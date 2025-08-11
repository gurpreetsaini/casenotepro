# Casenotepro Website

A modern, professional website for Casenotepro - the advanced case note management app designed specifically for social workers, counselors, and human services professionals.

## 🚀 Features

- **Modern Design**: Built with Next.js 14 and Tailwind CSS
- **Responsive**: Optimized for all device sizes
- **SEO Optimized**: Meta tags and structured content for search engines
- **Professional Focus**: Tailored specifically for human services professionals
- **Privacy First**: Comprehensive privacy policy and security information
- **Fast Performance**: Static site generation for optimal loading speed

## 📋 Sections

### 🏠 Hero Section
- Professional introduction and value proposition
- App showcase with mockup interface
- Key features overview
- Call-to-action for app download

### ⚡ Features Section
- Detailed feature breakdown with icons and descriptions
- Professional case note structure explanation
- Sample output demonstration
- Coming soon features preview

### 👥 Who It's For Section
- Target audience breakdown (Social Workers, Counselors, Legal Advocates, etc.)
- Use case scenarios
- Professional standards compliance
- Student and new professional focus

### ✨ Why Choose Section
- Benefits comparison (Traditional vs Casenotepro)
- Time savings calculations
- Professional testimonials
- ROI demonstration

### ❓ FAQ Section
- Comprehensive Q&A covering:
  - General questions
  - Privacy & Security
  - Professional Use
  - Technical details
  - Getting Started
- Collapsible interface for easy navigation

### 🔒 Privacy & Footer
- Detailed privacy commitment
- Full privacy policy modal
- Contact information
- Professional compliance details

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Static Export** - Optimized for Vercel deployment

## 🎨 Design System

### Colors
- **Primary**: Calm Teal (#2B7A78) - matches app color scheme
- **Secondary**: Indigo (#355C7D) - professional tone
- **Accent**: Orange (#F6A85B) - highlighting and CTAs

### Typography
- **Font**: Inter - modern, professional, readable
- **Hierarchy**: Clear heading structure for accessibility

### Components
- Reusable, modular components
- Responsive design patterns
- Consistent spacing and styling

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized images and performance
- Progressive enhancement

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd casenotepro-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build with static export for deployment.

## 🌐 Deployment

The site is configured for easy deployment to Vercel:

1. Push to your Git repository
2. Connect to Vercel
3. Deploy automatically with zero configuration

Alternative deployment options:
- Netlify
- GitHub Pages
- Any static hosting provider

## 📊 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Sitemap generation
- Robot.txt configuration

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation links in Header component

### Styling Changes
- Modify `tailwind.config.js` for design system changes
- Update color scheme in the config
- Customize components in respective files

### Content Updates
- FAQ content in `src/components/FAQ.tsx`
- Features in `src/components/Features.tsx`
- Update meta data in `src/app/layout.tsx`

## 📁 Project Structure

```
casenotepro-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── WhoItsFor.tsx
│       ├── WhyChoose.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎯 Target Audience

This website is designed for:
- Social Workers
- Counselors & Therapists
- Legal Advocates
- Social Work Students
- Agency Supervisors
- Case Managers
- Human Services Professionals

## 📈 Performance

- Lighthouse score optimization
- Image optimization
- Code splitting
- Static generation
- CDN-ready assets

## 🔒 Privacy Compliance

The website includes comprehensive privacy information covering:
- HIPAA compliance details
- NASW Code of Ethics alignment
- On-device processing explanation
- Data security measures

## 📞 Support

For questions about the website or the Casenotepro app:
- Email: info@casenotepro.com
- Support: support@casenotepro.com

## 📄 License

This website is proprietary to Casenotepro. All rights reserved.

---

Built with ❤️ for human services professionals
