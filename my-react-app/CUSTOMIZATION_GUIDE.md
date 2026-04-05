# Portfolio Customization Template

Use this file as a checklist and reference guide for customizing your portfolio.

---

## 1. HERO SECTION - `src/Project/Components/Hero.jsx`

### Update These Lines:

```javascript
// Line ~11
<h1 className="hero-title">Hi, I'm YOUR_NAME</h1>

// Line ~12
<p className="hero-subtitle">YOUR PROFESSIONAL_TITLE | YOUR_SPECIALTY | ANOTHER_SPECIALTY</p>

// Line ~13-16
<p className="hero-description">
  YOUR_TAGLINE - Describe what you do and your value proposition.
  Keep it compelling and brief.
</p>
```

### Example:
```javascript
<h1 className="hero-title">Hi, I'm Sarah Johnson</h1>
<p className="hero-subtitle">Full Stack Developer | UI Designer | Creative Problem Solver</p>
<p className="hero-description">
  I create beautiful and functional web applications that help businesses grow online.
  Let's transform your ideas into reality.
</p>
```

---

## 2. ABOUT SECTION - `src/Project/Components/About.jsx`

### Update These Sections:

```javascript
// Line ~18-23: Main Bio
<p>
  YOUR_PROFESSIONAL_BIO - Years of experience, specializations, notable achievements
</p>

// Line ~25-29: Your Journey
<p>
  DESCRIBE_YOUR_JOURNEY - How you started, what inspired you, where you are now
</p>

// Line ~36-43: About List - Update bullet points
<ul className="about-list">
  <li>✓ YOUR_SKILL_OR_SERVICE_1</li>
  <li>✓ YOUR_SKILL_OR_SERVICE_2</li>
  <li>✓ YOUR_SKILL_OR_SERVICE_3</li>
  <li>✓ YOUR_SKILL_OR_SERVICE_4</li>
  <li>✓ YOUR_SKILL_OR_SERVICE_5</li>
  <li>✓ YOUR_SKILL_OR_SERVICE_6</li>
</ul>
```

### Example:
```javascript
<p>
  I'm a passionate web developer with 5+ years of experience creating 
  dynamic, user-friendly web applications. I specialize in React, JavaScript, 
  and modern web technologies. I've helped 50+ clients build their digital presence.
</p>

<p>
  Starting from a curiosity about how websites work, I've evolved into a full-stack 
  developer. I love solving complex problems and turning creative ideas into 
  functional applications that users love.
</p>

<ul className="about-list">
  <li>✓ Responsive Web Design</li>
  <li>✓ Frontend Development (React, JavaScript, HTML/CSS)</li>
  <li>✓ Backend Development (Node.js, Express, MongoDB)</li>
  <li>✓ UI/UX Design Principles</li>
  <li>✓ Mobile Application Development</li>
  <li>✓ Web Performance Optimization</li>
</ul>
```

---

## 3. SKILLS SECTION - `src/Project/Components/Skills.jsx`

### Update Skill Categories and Levels:

```javascript
const skillCategories = [
  {
    category: 'CATEGORY_NAME_1',
    skills: [
      { name: 'SKILL_1', level: PROFICIENCY_1_TO_100 },
      { name: 'SKILL_2', level: PROFICIENCY_2_TO_100 },
      { name: 'SKILL_3', level: PROFICIENCY_3_TO_100 },
      { name: 'SKILL_4', level: PROFICIENCY_4_TO_100 },
    ]
  },
  // Add more categories...
];
```

### Example:
```javascript
const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Responsive Design', level: 90 },
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'RESTful APIs', level: 90 },
    ]
  },
  // ... more categories
];
```

### Update "Why Choose Me" Highlights:

```javascript
<div className="highlight-card">
  <FaStar className="highlight-icon" />
  <h4>YOUR_HIGHLIGHT_TITLE_1</h4>
  <p>Brief description of this highlight</p>
</div>
```

### Example:
```javascript
<div className="highlight-card">
  <FaStar className="highlight-icon" />
  <h4>Clean Code</h4>
  <p>Well-structured, maintainable, and optimized code</p>
</div>
```

**Level Scale Guide:**
- 90-100: Expert
- 75-89: Advanced
- 60-74: Intermediate
- 40-59: Beginner
- 0-39: Studying

---

## 4. PROJECTS SECTION - `src/Project/Components/Projects.jsx`

### Update Projects Array:

```javascript
const projects = [
  {
    id: 1,
    title: 'PROJECT_TITLE',
    description: 'Brief description of what the project does and its key features',
    technologies: ['TECH1', 'TECH2', 'TECH3', 'TECH4'],
    image: 'PROJECT_DISPLAY_NAME',
    github: 'https://github.com/username/project-repo',
    live: 'https://project-live-link.com'
  },
  // Add 5-6 more projects...
];
```

### Example:
```javascript
{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'A full-featured e-commerce store with product catalog, shopping cart, secure payment processing, and user authentication. Includes admin dashboard for inventory management.',
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  image: 'E-Commerce Store',
  github: 'https://github.com/yourname/ecommerce-platform',
  live: 'https://ecommerce-demo.netlify.app'
},
```

**Tips:**
- 6 projects recommended (looks complete without being overwhelming)
- Order by importance/recency
- Include a mix of project types
- Make descriptions benefit-focused
- Include 3-4 technologies per project
- GitHub link should be to your repo
- Live link should be to deployed version (or remove if not available)

---

## 5. CONTACT SECTION - `src/Project/Components/Contact.jsx`

### Update Contact Information:

```javascript
<div className="info-card">
  <FaPhone className="contact-icon" />
  <h3>Phone</h3>
  <p>YOUR_PHONE_NUMBER</p>
</div>

<div className="info-card">
  <FaEnvelope className="contact-icon" />
  <h3>Email</h3>
  <p>YOUR_EMAIL@example.com</p>
</div>

<div className="info-card">
  <FaMapMarkerAlt className="contact-icon" />
  <h3>Location</h3>
  <p>YOUR_CITY, YOUR_COUNTRY</p>
</div>
```

### Example:
```javascript
<div className="info-card">
  <FaPhone className="contact-icon" />
  <h3>Phone</h3>
  <p>+1 (555) 987-6543</p>
</div>

<div className="info-card">
  <FaEnvelope className="contact-icon" />
  <h3>Email</h3>
  <p>sarah@example.com</p>
</div>

<div className="info-card">
  <FaMapMarkerAlt className="contact-icon" />
  <h3>Location</h3>
  <p>San Francisco, California</p>
</div>
```

### Integrate Email Service (Optional):

To make contact form actually send emails, integrate with:
- **EmailJS** (Easiest)
- **Formspree**
- **Getform**
- **SendGrid**

Update the `handleSubmit` function to send to your service.

---

## 6. FOOTER SECTION - `src/Project/Components/Footer.jsx`

### Update Social Media Links:

```javascript
<a href="https://github.com/YOUR_USERNAME" title="GitHub" className="social-link">
  <FaGithub />
</a>

// Repeat for other platforms with your actual URLs
```

### Example:
```javascript
<a href="https://github.com/sarahjohnson" title="GitHub">...</a>
<a href="https://linkedin.com/in/sarahjohnson" title="LinkedIn">...</a>
<a href="https://twitter.com/sarahjohnson" title="Twitter">...</a>
<a href="https://instagram.com/sarahjohnson" title="Instagram">...</a>
```

### Update Footer Text:

```javascript
// Line ~54: Update copyright
<p>&copy; {currentYear} YOUR_NAME. All rights reserved.</p>

// Line ~55: Update description
<p>Designed & Built with ❤️ by YOUR_NAME</p>
```

---

## 7. NAVIGATION (OPTIONAL) - `src/Project/Components/Navigation.jsx`

The navigation is automatic, but if you want to add custom links:

```javascript
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
```

You can add more items here if needed.

---

## 8. COLORS - `src/Project/Portfolio.css`

### Update CSS Variables (Lines 13-22):

```css
:root {
  --primary-color: #6c5ce7;        /* Main color */
  --secondary-color: #a29bfe;      /* Light version of primary */
  --accent-color: #00b894;         /* Highlight/accent color */
  --dark-bg: #2d3436;              /* Dark backgrounds */
  --light-bg: #f5f3ff;             /* Light backgrounds */
  --text-dark: #2d3436;            /* Primary text color */
  --text-light: #636e72;           /* Secondary text color */
  --border-color: #dfe6e9;         /* Border colors */
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  --shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
}
```

### Popular Color Combos:

**Professional Blue:**
```css
--primary-color: #0066cc;
--secondary-color: #3399ff;
--accent-color: #ff6b6b;
```

**Modern Purple:**
```css
--primary-color: #7c3aed;
--secondary-color: #a78bfa;
--accent-color: #10b981;
```

**Corporate Dark:**
```css
--primary-color: #1e40af;
--secondary-color: #3b82f6;
--accent-color: #0891b2;
```

---

## 9. ADD PROFILE IMAGE

### Steps:

1. Save your photo to `src/assets/profile.jpg`
2. Import in components:
```javascript
import profileImage from '../assets/profile.jpg';
```
3. Replace placeholder, e.g., in Hero.jsx:
```javascript
<img src={profileImage} alt="Profile" className="profile-image" />
```

---

## 10. PROFILE INFORMATION - Update App Context

If using context for global data:

```javascript
const portfolioData = {
  name: 'YOUR_NAME',
  title: 'YOUR_TITLE',
  email: 'your@email.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
  bio: 'YOUR_BIO'
};
```

---

## 📋 Customization Checklist

- [ ] Update name and title in Hero section
- [ ] Update bio in About section
- [ ] Update skills and proficiency levels
- [ ] Add your 6 best projects
- [ ] Update contact information (email, phone, location)
- [ ] Update social media links in footer
- [ ] Add profile picture
- [ ] Choose your color scheme
- [ ] Update "Why Choose Me" highlights
- [ ] Update footer copyright text
- [ ] Test all sections on mobile
- [ ] Proofread all content for spelling/grammar

---

## 🚀 Ready to Deploy?

Once customized:
1. Run: `npm run build`
2. Choose your hosting platform
3. Deploy the `dist` folder
4. Share your portfolio!

**You're all set! Your portfolio is ready to impress! 🎉**
