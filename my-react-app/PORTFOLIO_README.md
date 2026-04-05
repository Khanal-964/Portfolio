# Portfolio Website - Complete Guide

A modern, interactive, and responsive portfolio website built with **React**, **JavaScript**, **CSS**, and **HTML** using Vite.

## 📁 Project Structure

```
src/Project/
├── Portfolio.jsx              # Main portfolio component
├── Portfolio.css              # Main portfolio styles
└── Components/
    ├── Navigation.jsx         # Navigation bar component
    ├── Hero.jsx              # Hero/welcome section
    ├── About.jsx             # About me section
    ├── Skills.jsx            # Skills with progress bars
    ├── Projects.jsx          # Portfolio projects showcase
    ├── Contact.jsx           # Contact form
    └── Footer.jsx            # Footer with social links
```

## 🎯 Main Features

### 1. **Navigation Bar**
- Sticky navigation that follows scroll
- Mobile-responsive hamburger menu
- Active section highlighting
- Smooth transitions

### 2. **Hero Section**
- Eye-catching introduction
- Call-to-action buttons
- Professional photo placeholder
- Smooth animations

### 3. **About Section**
- Personal bio and journey
- Skills list with checkmarks
- Professional image placeholder
- Responsive two-column layout

### 4. **Skills Section**
- Categorized skills (Frontend, Backend, Tools, Soft Skills)
- Animated progress bars showing proficiency levels
- Hover effects on skill cards
- Why Choose Me highlights

### 5. **Projects Showcase**
- 6 project cards in a responsive grid
- Project descriptions and tech stacks
- GitHub and Live Demo links
- Hover animations

### 6. **Contact Section**
- Contact information cards (Phone, Email, Location)
- Functional contact form with validation
- Success message notification
- Responsive layout

### 7. **Footer**
- Social media links
- Quick navigation links
- Copyright information
- Professional styling

## 🎨 Design Features

### Color Scheme
- **Primary Color**: `#6c5ce7` (Purple)
- **Secondary Color**: `#a29bfe` (Light Purple)
- **Accent Color**: `#00b894` (Green)
- **Dark Background**: `#2d3436` (Dark Gray)
- **Light Background**: `#f5f3ff` (Very Light Purple)

### Key Styling Elements
- Gradient backgrounds for visual appeal
- Smooth animations and transitions
- Box shadows for depth
- Responsive grid layouts
- Mobile-first design approach

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Large screens**: Full desktop layout
- **Tablets (≤768px)**: Mobile menu, optimized layouts
- **Mobile (≤480px)**: Single column layouts, larger touch targets

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173` (or as shown in terminal)

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📝 Customization Guide

### Update Your Information

#### Portfolio.jsx (Main Component)
```javascript
// Add your sections or modify state management
```

#### Hero.jsx
```javascript
// Update:
<h1 className="hero-title">Hi, I'm [Your Name]</h1>
<p className="hero-subtitle">[Your Title]</p>
<p className="hero-description">[Your Description]</p>
```

#### About.jsx
```javascript
// Update your personal information, bio, and skills
```

#### Skills.jsx
```javascript
// Update skill categories and proficiency levels
const skillCategories = [
  {
    category: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 95 }
    ]
  }
];
```

#### Projects.jsx
```javascript
// Add your projects with descriptions and links
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description',
    technologies: ['Tech1', 'Tech2'],
    github: 'your-github-link',
    live: 'your-live-link'
  }
];
```

#### Contact.jsx
```javascript
// Update contact information
<p>+1 (555) 123-4567</p>      // Phone
<p>hello@yourname.com</p>      // Email
<p>Your City, Your Country</p> // Location
```

#### Footer.jsx
```javascript
// Update social media links
<a href="your-github-link">GitHub</a>
<a href="your-linkedin-link">LinkedIn</a>
// etc.
```

### Add Profile Images

Replace the image placeholders with your actual images:

1. Add images to `src/assets/`
2. Import and use them:
```javascript
import profileImage from '../assets/your-image.jpg';

// In JSX:
<img src={profileImage} alt="Profile" />
```

### Customize Colors

Edit `Portfolio.css` CSS variables:
```css
:root {
  --primary-color: #6c5ce7;
  --secondary-color: #a29bfe;
  --accent-color: #00b894;
  /* ... other colors ... */
}
```

## 🔧 Technologies Used

- **React 19.2.0**: JavaScript library for UI
- **Vite**: Next-generation build tool
- **React Icons 5.5.0**: Icon library
- **CSS3**: Modern styling
- **JavaScript (ES6+)**: Programming language

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icons": "^5.5.0"
}
```

## 🌐 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with one click

### Deploy to Netlify
1. Build your project: `npm run build`
2. Connect your GitHub to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
1. Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
  // ...
}
```
2. Run: `npm run build`
3. Push to GitHub

## ✨ Animation Effects

The portfolio includes smooth animations:
- **fadeInUp**: Elements fade in while moving up
- **fadeInRight**: Elements fade in while moving right
- **slideInWidth**: Progress bars animate to their width
- **slideInDown**: Success messages slide down
- Hover effects with scale and transform transitions

## 📞 Contact Form Integration

The contact form currently logs to console. To integrate with a backend:

1. Update `Contact.jsx` handleSubmit:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('your-api-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

2. Or use services like:
   - EmailJS
   - Formspree
   - Getform
   - SendGrid

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [CSS Tricks](https://css-tricks.com)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and create your own portfolio based on it!

---

**Built with ❤️ using React and modern web technologies**
