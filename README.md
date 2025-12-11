# Akshat Joshi's Portfolio

A modern, responsive portfolio website showcasing professional experience, technical skills, and projects. Built with clean HTML, Tailwind CSS, and custom CSS animations.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional interface with smooth animations and hover effects
- **Interactive Elements**: Engaging user experience with transitions, hover states, and visual feedback
- **Cross-Browser Compatible**: Tested on iOS 11+, Android 8+, and modern browsers
- **Performance Optimized**: Lightweight with fast loading times
- **Easy to Customize**: Well-structured code for easy updates and modifications

## Tech Stack

### Frontend
- **HTML5**: Semantic markup for better accessibility and SEO
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Custom CSS**: Enhanced styling with animations and effects
- **Vanilla JavaScript**: Mobile menu toggle functionality

### Design Features
- Smooth scrolling navigation
- Gradient backgrounds and text effects
- Animated hover states
- Custom scrollbar styling
- Fade-in animations
- Interactive cards and sections
- Mobile-friendly hamburger menu

## Project Structure

```
portfolio/
├── index.html          # Main HTML file with portfolio content
├── style.css           # Custom CSS with animations and enhancements
├── script.js           # JavaScript for mobile menu functionality
├── assets/
│   └── images/
│       └── profile.png # Profile picture
└── README.md           # Project documentation
```

## Sections

1. **About**: Introduction with profile picture and professional summary
2. **Technical Skills**: Comprehensive list of programming languages, frameworks, databases, and tools
3. **Experience & Projects**: Detailed work history with key achievements
   - Rakuten Group (May 2025 - Present)
   - TakeMe k.k. (Aug 2022 - May 2025)
   - Delhivery Ltd. (Jun 2020 - Aug 2022)
4. **Education**: Academic background
5. **Certifications & Publications**: GeeksforGeeks articles and contributions
6. **Interests**: Personal hobbies and activities
7. **Contact**: Email, LinkedIn, and GitHub links

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for customization

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshat98/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   # or
   start index.html  # Windows
   # or
   xdg-open index.html  # Linux
   ```

3. **Or use a local server** (recommended for development)
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

   Then visit `http://localhost:8000` in your browser.

## Customization Guide

### Update Personal Information

1. **Profile Picture**: Replace `assets/images/profile.png` with your photo
2. **Name & Title**: Edit the `<h1>` and `<h2>` tags in `index.html`
3. **About Section**: Modify the introduction text in the `#about` section
4. **Work Experience**: Update the experience sections with your details
5. **Skills**: Edit the skills list in the `#skills` section
6. **Contact Links**: Update email, LinkedIn, and GitHub URLs

### Modify Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-color: #3b82f6;      /* Primary blue */
  --secondary-color: #1e40af;    /* Dark blue */
  --accent-color: #60a5fa;       /* Light blue */
  --text-dark: #1f2937;          /* Dark gray */
  --text-light: #6b7280;         /* Light gray */
}
```

### Add New Sections

1. Add HTML structure in `index.html`
2. Add corresponding navigation link in the header
3. Style using Tailwind classes or custom CSS
4. Add smooth scroll behavior (automatically handled)

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (main) and root folder
4. Your site will be live at `https://yourusername.github.io/portfolio/`

### Netlify

1. Connect your GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/`
4. Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (iOS 11+)
- Android Browser (Android 8+)

## Performance

- Lightweight: ~50KB total size (excluding images)
- Fast loading: < 1s on 3G connection
- Optimized images recommended
- Minimal JavaScript for better performance

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project showcase with live demos
- [ ] Downloadable resume
- [ ] Contact form with backend integration
- [ ] Analytics integration
- [ ] SEO optimization with meta tags
- [ ] Accessibility improvements (ARIA labels)

## Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio!

## Contact

**Akshat Joshi**

- Email: [joshiakshat1998@gmail.com](mailto:joshiakshat1998@gmail.com)
- LinkedIn: [linkedin.com/in/akshat-joshi-075093127](https://linkedin.com/in/akshat-joshi-075093127)
- GitHub: [github.com/akshat98](https://github.com/akshat98)
- Location: Tokyo, Japan

---

Made with ❤️ by Akshat Joshi | Last Updated: December 2025
