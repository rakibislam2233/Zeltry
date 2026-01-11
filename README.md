# Zeltry

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, feature-rich e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.

</div>

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **🛒 Storefront**: Intuitive product browsing with category filtering and advanced search
- **👤 User Dashboard**: Comprehensive management for orders, profile settings, wallet, and wishlist
- **🔐 Secure Authentication**: Complete authentication system with register, login, password recovery, and email verification
- **💳 Checkout Process**: Streamlined multi-step checkout with order summary and payment processing
- **📱 Responsive Design**: Fully responsive across all device sizes
- **⚡ Performance Optimized**: Fast loading with code splitting and image optimization
- **🔍 SEO Friendly**: Proper meta tags and structured data for better search engine visibility
- **🛒 Shopping Cart**: Persistent cart functionality with add, remove, and update features

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [React](https://reactjs.org/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Next-Auth](https://next-auth.js.org/) | Authentication solution |
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [React Hook Form](https://react-hook-form.com/) | Form validation and management |
| [Zustand](https://zustand-demo.pmnd.rs/) | State management |
| [React Query](https://tanstack.com/query/v4) | Server state management |
| [ESLint](https://eslint.org/) | Code linting |
| [Prettier](https://prettier.io/) | Code formatting |

## 📁 Project Structure

```
oryzn-client/
├── components.json         # Component library configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static assets
└── src/
    ├── app/                # App Router pages
    │   ├── (auth)/         # Authentication routes
    │   ├── (dashboard)/    # Dashboard routes
    │   └── (public)/       # Public-facing routes
    ├── components/         # Reusable UI components
    │   ├── common/         # Shared components
    │   ├── layouts/        # Layout components
    │   ├── pages/          # Page-specific components
    │   └── shared/         # Shared UI elements
    └── lib/                # Utility functions and configurations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rakibislam2233/oryzn-client.git
   cd oryzn-client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Set up environment variables (see [Environment Variables](#-environment-variables) section)

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build application for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint and check code quality |
| `npm run prettier` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

## 🌐 API Endpoints

The application communicates with the following API endpoints (if applicable):

- `/api/auth`: Authentication endpoints
- `/api/products`: Product catalog
- `/api/cart`: Shopping cart operations
- `/api/orders`: Order management
- `/api/users`: User profile management
- `/api/wishlist`: Wishlist operations

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-next-auth-secret

# Database
DATABASE_URL=your-database-url

# Authentication
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

# Payment Integration
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key

# Email Service
EMAIL_SERVER_HOST=smtp.your-email-provider.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@domain.com
EMAIL_SERVER_PASSWORD=your-email-password

# Other Services
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Oryzn Client
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t oryzn-client .
docker run -p 3000:3000 oryzn-client
```

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🤝 Contributing

We welcome contributions to this project! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please make sure to update tests as appropriate and follow the code style.

### Development Guidelines

- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages
- Write TypeScript for type safety
- Use Tailwind CSS for styling (avoid custom CSS when possible)
- Follow React best practices and hooks conventions
- Write unit tests for new components and functions
- Ensure accessibility (a11y) compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or issues, feel free to:

- Open an issue in the repository
- Contact the maintainers directly
- Check out the documentation

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - For providing an excellent React framework
- [TypeScript](https://www.typescriptlang.org/) - For making JavaScript development safer
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- All the open-source contributors whose tools make this project possible

---

<div align="center">

Made with ❤️ by the Zeltry Team

[Back to top](#oryzn-client)

</div>
