# Softwave Tech Solutions Website

A modern, responsive single-page website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional white background with elegant typography
- **Smooth Animations**: Framer Motion for fade-in and slide-up effects
- **Responsive Layout**: Fully responsive from mobile to desktop
- **Smooth Scrolling**: Navigation with smooth scroll between sections
- **Social Media Integration**: Links to all social media platforms
- **Contact Information**: Complete contact details with Google Maps integration
- **Contact Form**: Functional contact form with Resend email integration

## 📁 Project Structure

```
app/
├── components/
│   ├── Navbar.tsx          # Navigation bar with smooth scroll
│   ├── Hero.tsx            # Hero section with company name and tagline
│   ├── About.tsx           # About section with social links
│   ├── MissionVision.tsx   # Mission & Vision cards
│   ├── Services.tsx        # Services grid layout
│   ├── Team.tsx            # Team section with profiles
│   ├── Contact.tsx         # Contact information and footer
│   └── ContactForm.tsx     # Contact form component
├── api/
│   └── contact/
│       └── route.ts        # API route for handling form submissions
├── page.tsx                # Main page assembling all components
├── layout.tsx              # Root layout with metadata
└── globals.css             # Global styles
```

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Resend** (email service)

## 🎨 Design Guidelines

- Background: White
- Text: Dark gray (`text-gray-800`)
- Accent Color: Soft blue (`#2563eb`)
- Max Width: `max-w-7xl mx-auto px-6`
- Hover Effects: `hover:scale-105` on cards

## 📄 Sections

1. **Hero**: Company name, tagline, and CTA button
2. **About**: Company information and social media links
3. **Mission & Vision**: Two-column cards with mission and vision
4. **Services**: Grid layout with 5 service categories
5. **Team**: Team culture and leadership profiles
6. **Contact**: Contact details, business hours, contact form, and footer

## 📧 Contact Form

The contact form sends emails using Resend API. When a user submits the form:
- The form data is sent to `/api/contact`
- An email is sent to `softwavetechsolutionsprivateli@gmail.com`
- The user receives a success/error message

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

2. Get your Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)

3. Add your API key to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
```

4. Update the `from` email address in `app/api/contact/route.ts` to use your verified domain email address.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 License

© 2025 Softwave Tech Solutions. All rights reserved.
