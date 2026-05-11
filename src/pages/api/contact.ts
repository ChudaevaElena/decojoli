import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, city, phone, comment } = req.body;

  // Валидация данных
  if (!name || !city || !phone || !comment) {
    return res.status(400).json({ message: 'Все поля обязательны для заполнения' });
  }

  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ message: 'Имя должно содержать от 2 до 100 символов' });
  }

  if (city.length < 2 || city.length > 100) {
    return res.status(400).json({ message: 'Город должен содержать от 2 до 100 символов' });
  }

  if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
    return res.status(400).json({ message: 'Неверный формат телефона' });
  }

  if (comment.length < 10 || comment.length > 1000) {
    return res.status(400).json({ message: 'Комментарий должен содержать от 10 до 1000 символов' });
  }

  // Проверка переменных окружения
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER or EMAIL_PASS not configured');
    return res.status(500).json({ message: 'Ошибка конфигурации сервера' });
  }

  const transporter = nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'hello@decojoli.ru',
      subject: 'Новая заявка с сайта decojoli',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #252324;">Новая заявка с сайта decojoli</h2>
          <div style="background: #f8f8f8; padding: 20px; border-radius: 8px;">
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Город:</strong> ${city}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Комментарий:</strong></p>
            <p style="background: white; padding: 10px; border-radius: 4px;">${comment.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Заявка отправлена ${new Date().toLocaleString('ru-RU')}
          </p>
        </div>
      `,
    });

    console.log('Email sent successfully:', { name, city, phone });
    res.status(200).json({ message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Ошибка отправки заявки. Попробуйте позже или позвоните нам напрямую.' });
  }
}