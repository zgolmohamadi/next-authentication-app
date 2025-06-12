# Next.js Authentication System

A simple authentication system built with Next.js, TypeScript, and SCSS Modules.

## Demo

Live demo: [https://next-authentication-app-cm1g.vercel.app/auth](https://next-authentication-app-cm1g.vercel.app/auth)

## Features

* Phone number authentication (Iranian mobile number format)
* Form validation
* Responsive design
* Dashboard with user profile
* Secure authentication flow
* RTL support for Persian language

## Technologies Used

* Next.js 15.3.3
* TypeScript
* SCSS Modules
* Local Storage for state management

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/zgolmohamadi/next-authentication-app.git
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser.

## Project Structure

```
src/
  ├── app/              # App router pages
  │   ├── auth/        # Authentication pages
  │   └── dashboard/   # Dashboard pages
  ├── components/      # Reusable components
  │   ├── Button/     # Button component
  │   └── Input/      # Input component
  ├── styles/         # Global styles
  └── types/          # TypeScript type definitions
```

## License

MIT

## About

This project is a simple authentication system that demonstrates:
- Phone number validation
- User authentication flow
- Protected routes
- Responsive UI design
- RTL support for Persian language
