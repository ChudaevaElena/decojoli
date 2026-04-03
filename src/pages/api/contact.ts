import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, city, phone, comment } = req.body;

  // Для тестирования просто логируем и возвращаем успех
  console.log('Form submitted:', { name, city, phone, comment });
  
  // Раскомментируйте для отправки реальных писем
  /*
  const transporter = nodemailer.createTransport({
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
      subject: 'Новая заявка с сайта',
      html: `
        <h3>Новая заявка</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Город:</strong> ${city}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Комментарий:</strong> ${comment}</p>
      `,
    });
    res.status(200).json({ message: 'OK' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
  */
  
  // Временно возвращаем успех для тестирования
  res.status(200).json({ message: 'OK' });
}