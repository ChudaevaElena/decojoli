# decojoli - Премиальная мебель на заказ

Сайт фабрики decojoli, специализирующейся на изготовлении премиальной мебели на заказ.

## Технологии

- Next.js 14 (Pages Router)
- TypeScript
- CSS Modules
- Nodemailer

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

## Настройка контактной формы

Для работы отправки писем через контактную форму необходимо настроить переменные окружения:

1. Создайте файл `.env.local` в корне проекта
2. Добавьте следующие переменные:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Настройка Gmail

1. Включите двухфакторную аутентификацию в аккаунте Gmail
2. Создайте пароль приложения: https://myaccount.google.com/apppasswords
3. Используйте пароль приложения в `EMAIL_PASS`

### Безопасность

- Никогда не коммитите `.env.local` в git
- Добавьте `.env.local` в `.gitignore`
- Используйте только пароли приложений, а не основной пароль Gmail
