# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcase your projects, experience, skills, and resume in a beautiful, professional format.

## Features

- 🎨 **Modern Design** - Clean, professional UI with dark mode support
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Fast Performance** - Optimized with Next.js 16
- 📄 **Resume Viewer** - View and download your resume in PDF format
- 💼 **Project Showcase** - Display your projects with links to GitHub and live demos
- 📧 **Contact Form** - Easy way for visitors to reach out
- 🔗 **Social Media Links** - Connect all your social profiles
- ⚡ **Smooth Animations** - Enhanced user experience with transitions

## Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal information and bio
3. **Skills** - Technologies and skills you work with
4. **Experience** - Work history and achievements
5. **Projects** - Portfolio of your work
6. **Resume** - PDF viewer and download
7. **Contact** - Contact form and social links
8. **Footer** - Additional links and copyright

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Customize your portfolio data in `app/data/portfolio.ts`:
   - Update your name, title, bio
   - Add your email and location
   - Update social media links
   - Add your skills
   - Add your work experience
   - Add your projects
   - Set your resume PDF path

4. Add your resume PDF to the `public` folder and name it `resume.pdf` (or update the path in `portfolio.ts`)

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Portfolio Data

Edit `app/data/portfolio.ts` to customize:
- Personal information
- Skills list
- Work experience
- Projects
- Social media links
- Resume PDF path

### Styling

The project uses Tailwind CSS. You can customize colors, spacing, and other styles by modifying:
- `app/globals.css` - Global styles
- Component files in `app/components/` - Component-specific styles

### Adding Your Resume

1. Place your resume PDF file in the `public` folder
2. Update the `resumeUrl` in `app/data/portfolio.ts` to match your file name (e.g., `/resume.pdf`)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts  # Portfolio data configuration
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── public/               # Static assets (resume PDF, images)
└── package.json
```

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Geist Font** - Typography

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please open an issue on GitHub or contact me through the portfolio contact form.

---

Built with ❤️ using Next.js
