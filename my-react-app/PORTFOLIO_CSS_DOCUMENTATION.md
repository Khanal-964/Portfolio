# Portfolio CSS Documentation

## Overview
This portfolio website uses a comprehensive CSS structure with CSS custom properties (variables) for easy customization. The design features a modern, responsive layout with gradient backgrounds, smooth animations, and mobile-first responsive design.

## CSS Structure & Organization

### 1. CSS Variables (Custom Properties)
Located in the `:root` selector, these variables control the entire color scheme and can be easily modified:

```css
:root {
  --primary-color: #38bdf8;      /* Main blue color */
  --secondary-color: #22c55e;    /* Green accent */
  --accent-color: #22d3ee;       /* Light blue accent */
  --dark-bg: #061b2e;            /* Dark background */
  --light-bg: rgba(255, 255, 255, 0.08);  /* Light overlay */
  --text-dark: #e7f0fb;          /* Primary text color */
  --text-light: #cbd6e8;         /* Secondary text color */
  --border-color: rgba(255, 255, 255, 0.12);  /* Border color */
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);   /* Large shadow */
  --shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.2); /* Small shadow */
}
```

**How to modify colors:**
- Change any `--variable-name` value to your preferred color
- Colors can be hex codes (#38bdf8), RGB, HSL, or color names
- All elements using these variables will automatically update

### 2. Global Styles

#### Body & Typography
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
  /* Gradient background with multiple layers */
}
```

**Font customization:**
- Change `font-family` to any Google Font or system font
- Modify `line-height` for text spacing (1.6 = 160% of font size)
- Adjust `color` using CSS variables or direct colors

#### Container & Layout
```css
.container {
  max-width: 1200px;    /* Maximum width of content */
  margin: 0 auto;       /* Center the container */
  padding: 0 20px;      /* Horizontal padding */
}
```

**Layout modifications:**
- Change `max-width` to make content wider/narrower
- Adjust `padding` for more/less side spacing

## Section-by-Section CSS Guide

### 3. Navigation (Navbar)

#### Main Navbar Styles
```css
.navbar {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

**Navbar customization:**
- Change gradient colors by modifying the `linear-gradient` values
- Adjust `padding` for navbar height
- Modify `position` if you don't want sticky behavior

#### Logo Styles
```css
.logo h1 {
  color: white;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
}
```

**Logo modifications:**
- Change `font-size` for larger/smaller logo
- Adjust `letter-spacing` for character spacing
- Modify `font-weight` (100-900 scale)

#### Navigation Links
```css
.nav-links {
  color: white;
  font-size: 16px;
  font-weight: 500;
  /* Hover effects and transitions */
}
```

**Link customization:**
- Change `font-size` for larger/smaller text
- Modify hover effects in `.nav-links:hover`
- Adjust `gap` in `.nav-menu` for link spacing

### 4. Hero Section

#### Hero Layout
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* Two-column layout */
  gap: 50px;
  min-height: calc(100vh - 80px);
  padding: 60px 20px;
}
```

**Hero layout changes:**
- Change `grid-template-columns` to `1fr` for single column
- Adjust `gap` for spacing between content and image
- Modify `min-height` for section height

#### Hero Text Styles
```css
.hero-content h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.hero-subtitle {
  font-size: 24px;
  color: var(--primary-color);
  font-weight: 600;
}

.hero-description {
  font-size: 16px;
  color: var(--text-light);
  line-height: 1.8;
}
```

**Typography modifications:**
- Adjust `font-size` for different heading sizes
- Change colors using CSS variables or direct values
- Modify `line-height` for text spacing

#### Hero Buttons
```css
.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}
```

**Button customization:**
- Change `padding` for button size
- Modify `border-radius` for rounded corners
- Adjust gradient colors in `background`

### 5. About Section

#### About Layout
```css
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}
```

**About layout:**
- Change to single column with `grid-template-columns: 1fr`
- Adjust `gap` for content spacing

#### About Text Styles
```css
.about-text h3 {
  font-size: 24px;
  color: white;
  margin-bottom: 15px;
}

.about-text p {
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.8;
}
```

**Text customization:**
- Modify `font-size` and colors
- Adjust opacity with `rgba()` values

#### About List
```css
.about-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.about-list li {
  background: rgba(255, 255, 255, 0.12);
  border-left: 4px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}
```

**List styling:**
- Change grid columns for different layouts
- Modify background colors and border styles

### 6. Skills Section

#### Skills Grid
```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
```

**Skills layout:**
- Adjust `minmax()` values for card widths
- Change `gap` for spacing

#### Skill Cards
```css
.skill-category {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(15, 47, 93, 0.12);
}
```

**Card styling:**
- Modify `background` for different card colors
- Adjust `padding` and `border-radius`
- Change shadow properties

#### Skill Tags
```css
.skill-tag {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 197, 253, 0.28));
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
}
```

**Tag customization:**
- Change gradient colors
- Adjust `padding` and `border-radius`
- Modify `font-size`

### 7. Projects Section

#### Projects Grid
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}
```

**Projects layout:**
- Adjust `minmax()` for different card sizes
- Change `gap` for spacing

#### Project Cards
```css
.project-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-15px);
  box-shadow: var(--shadow);
}
```

**Card effects:**
- Modify hover `transform` values
- Change `transition` timing
- Adjust shadow variables

#### Project Links
```css
.project-link {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 600;
}
```

**Button styling:**
- Change gradient colors
- Adjust `padding` and `border-radius`

### 8. Contact Section

#### Contact Layout
```css
.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;  /* Info | Form */
  gap: 50px;
  align-items: start;
}
```

**Contact layout:**
- Change to single column with `grid-template-columns: 1fr`
- Adjust `gap` for spacing

#### Contact Info Cards
```css
.info-card {
  background: rgba(255, 255, 255, 0.88);
  padding: 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-10px);
}
```

**Card styling:**
- Modify `background` and `padding`
- Adjust hover effects

#### Contact Form
```css
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
}
```

**Form styling:**
- Change `gap` for field spacing
- Modify `padding`, `border`, and `border-radius`
- Adjust `font-size`

#### Contact Map
```css
.contact-map {
  margin-top: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.contact-map iframe {
  border-radius: 15px;
}
```

**Map styling:**
- Adjust `margin-top` for spacing
- Change `border-radius` and shadow

### 9. Footer Section

#### Footer Layout
```css
.footer {
  background: linear-gradient(135deg, var(--dark-bg), #1e272e);
  padding: 50px 20px 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}
```

**Footer styling:**
- Change gradient colors
- Adjust `padding` and grid properties

#### Social Links
```css
.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--accent-color);
  transform: translateY(-5px);
}
```

**Social icons:**
- Modify size with `width` and `height`
- Change hover colors and effects

## Responsive Design

### Breakpoints
- **768px and below**: Tablet and mobile landscape
- **480px and below**: Mobile portrait

### Mobile Optimizations
- Navigation becomes hamburger menu
- Grid layouts stack vertically
- Font sizes reduce
- Padding and margins decrease
- Touch-friendly button sizes

**To modify breakpoints:**
```css
@media (max-width: 768px) {
  /* Your custom mobile styles */
}
```

## Animations & Transitions

### Keyframe Animations
- `fadeInUp`: Elements slide up from bottom
- `fadeInRight`: Elements slide in from right
- `slideInDown`: Success messages slide down
- `slideInWidth`: Progress bar animations

### Transition Properties
Most elements use `transition: all 0.3s ease` for smooth hover effects.

**To modify animations:**
- Change timing: `0.3s` to `0.5s` for slower transitions
- Adjust easing: `ease`, `ease-in`, `ease-out`, `linear`
- Modify transform values for different effects

## Customization Quick Reference

### Colors
```css
/* Change these variables in :root */
--primary-color: #your-color;
--secondary-color: #your-color;
--accent-color: #your-color;
--dark-bg: #your-color;
--text-dark: #your-color;
```

### Fonts
```css
body {
  font-family: 'Your Font', sans-serif;
}

.section-title {
  font-size: 48px; /* Larger titles */
}

.hero-content h1 {
  font-size: 50px; /* Larger hero text */
}
```

### Spacing
```css
.container {
  max-width: 1400px; /* Wider content */
  padding: 0 30px; /* More side padding */
}

.section-title {
  margin-bottom: 30px; /* More space below titles */
}
```

### Layout Changes
```css
/* Single column hero */
.hero {
  grid-template-columns: 1fr;
}

/* Different grid layouts */
.skills-grid {
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
}
```

### Effects & Shadows
```css
/* Softer shadows */
--shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

/* Different hover effects */
.project-card:hover {
  transform: scale(1.02); /* Scale instead of translate */
}
```

## Best Practices for Modification

1. **Use CSS Variables**: Modify colors in `:root` for consistent changes
2. **Test Responsiveness**: Always check mobile layouts after changes
3. **Maintain Hierarchy**: Keep font sizes proportional (h1 > h2 > h3)
4. **Consistent Spacing**: Use consistent gap and padding values
5. **Performance**: Avoid heavy animations on mobile devices
6. **Accessibility**: Maintain good color contrast ratios

## File Structure
- `Portfolio.css`: Main stylesheet
- `App.css`: Additional global styles
- `index.css`: Base styles and resets

Remember to test your changes across different screen sizes and browsers!</content>
<parameter name="filePath">d:\React Tutorial\my-react-app\PORTFOLIO_CSS_DOCUMENTATION.md