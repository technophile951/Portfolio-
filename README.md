# George Uwora - Cybersecurity Portfolio

A professional cybersecurity portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🎯 Overview

This is a modern, responsive portfolio website for a Junior Penetration Tester / Associate OffSec Analyst. The site features a dark theme with a professional cybersecurity aesthetic.

## ✨ Features

### Sections
- **Hero Section** - Shield icon, name, title, CTA buttons (LinkedIn, Download Resume)
- **About** - Profile information, bio, contact details
- **Skills** - 4 categories with animated proficiency bars:
  - Offensive Security
  - Defensive Security
  - Network & Systems
  - Tools & Technologies
- **Certifications** - CEH and CCNA (issued by HIIT)
- **Experience** - CyberWarLab internship (Dec 2025 - Feb 2026)
- **Blog** - 4 cybersecurity articles
- **Contact** - Working contact form with toast notifications
- **Footer** - Links, social media, copyright

### Interactive Features
- ✅ Dark/Light mode toggle (persists in localStorage)
- ✅ Smooth scrolling navigation
- ✅ Mobile-responsive hamburger menu
- ✅ Animated skill progress bars on scroll
- ✅ Toast notifications for form submissions
- ✅ Hover effects and transitions
- ✅ Sticky header with scroll effect

### Design Features
- Professional dark theme with cyber blue accents (#00d9ff)
- JetBrains Mono & Inter fonts for technical aesthetic
- Grid pattern background
- Floating geometric elements
- Glowing effects and shadows
- Fully responsive design

## 📋 File Structure

```
/app/portfolio/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete CSS with dark/light themes
├── script.js       # JavaScript for interactivity and data
└── README.md       # This file
```

## 🚀 Usage

### Open Locally
Simply open `index.html` in any modern web browser:
```bash
# Using your browser
open /app/portfolio/index.html

# Or serve with Python
cd /app/portfolio
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deploy
Upload the three files (index.html, styles.css, script.js) to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## 📱 Contact Information

- **Name:** George Uwora
- **Title:** Junior Penetration Tester / Associate OffSec Analyst
- **Email:** george.uwora@example.com
- **Phone:** +23409128794097
- **LinkedIn:** [linkedin.com/in/george-uwora-5b7351242](https://www.linkedin.com/in/george-uwora-5b7351242)
- **Location:** Remote

## 🎨 Customization

### Update Personal Information
Edit the `profileData` object in `script.js`:
```javascript
const profileData = {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    phone: "+1234567890",
    // ...
};
```

### Modify Skills
Edit the `skills` array in `script.js` to add/remove skills and categories.

### Add/Remove Certifications
Edit the `certifications` array in `script.js`.

### Update Experience
Edit the `experience` array in `script.js`.

### Change Blog Posts
Edit the `blogPosts` array in `script.js`.

### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #0ea5e9; /* Change primary color */
    /* ... other variables */
}
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Google Fonts** - Inter & JetBrains Mono
- **SVG Icons** - Custom inline SVG icons

## 📸 Screenshots

The portfolio includes:
- Clean hero section with shield icon
- Professional about section with profile image
- Skills section with animated progress bars
- Certification cards (CEH, CCNA from HIIT)
- Experience timeline
- Blog article grid
- Contact form
- Dark and light themes

## ⚡ Performance

- No external dependencies (except Google Fonts)
- Lightweight and fast loading
- Optimized images
- Smooth animations with CSS transitions
- Responsive images

## 🔒 Security Note

- No backend required
- Form submissions show toast notifications (frontend only)
- Real form submission would require backend integration
- All data is client-side JavaScript

## 📄 License

All rights reserved © 2026 George Uwora

## 🤝 Support

For issues or questions, contact: george.uwora@example.com

---

**Built with ❤️ and JavaScript**
