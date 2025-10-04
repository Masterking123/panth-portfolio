# Portfolio Configuration Guide

This guide explains how to customize your portfolio by editing the configuration file.

## Quick Start

To update your portfolio information, simply edit the `/src/config/portfolio.ts` file. All changes will automatically reflect across your entire portfolio.

## Configuration Sections

### 1. Personal Information

```typescript
personal: {
  name: "Your Name",                    // Your full name
  title: "Your Job Title",              // Professional title
  email: "your.email@example.com",      // Contact email
  phone: "+1 (555) 123-4567",          // Phone number
  location: "Your City, Country",       // Location (optional)
  bio: "Your professional bio...",      // Hero section description

  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",     // Optional
    portfolio: "https://yourportfolio.com",     // Optional
  }
}
```

### 2. About Section

```typescript
about: {
  journey: [
    "First paragraph about your background...",
    "Second paragraph about your approach...",
  ];
}
```

### 3. Skills & Technologies

```typescript
skills: [
  "JavaScript",
  "React",
  "Node.js",
  // Add or remove skills as needed
];
```

### 4. Projects

```typescript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/username/project",
      demo: "https://project-demo.com",
    },
    image: "https://image-url.com/project.jpg",
    featured: true, // Set to true to show on homepage
  },
];
```

### 5. Animation Settings

```typescript
animations: {
  typewriterSpeed: 80,    // Speed of name typing (lower = faster)
  typewriterDelay: 1000,  // Delay before typing starts
  staggerDelay: 0.1,      // Delay between animated elements
  pageLoadDelay: 200      // Initial page load delay
}
```

### 6. SEO Settings

```typescript
seo: {
  title: "Your Name - Portfolio",
  description: "Your portfolio description for search engines",
  keywords: "web developer, react, portfolio",
  ogImage: "/og-image.jpg"
}
```

### 7. Navigation

```typescript
navigation: [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
```

## Adding New Projects

To add a new project:

1. Open `/src/config/portfolio.ts`
2. Add a new object to the `projects` array:

```typescript
{
  title: "Your New Project",
  description: "Describe what your project does...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  links: {
    github: "https://github.com/username/new-project",
    demo: "https://new-project-demo.com"
  },
  image: "https://image-url.com/new-project.jpg",
  featured: true  // Show on homepage
}
```

## Helper Functions

The configuration includes helper functions:

- `getFeaturedProjects()` - Returns only projects with `featured: true`
- `getAllProjects()` - Returns all projects
- `getSkillsByCategory()` - Organizes skills by category

## Tips

1. **Images**: Use high-quality images (500x300px recommended) from Unsplash or your own hosting
2. **Skills**: Keep the most relevant skills - too many can be overwhelming
3. **Projects**: Featured projects appear on the homepage, others can be shown on a dedicated projects page
4. **Bio**: Keep it concise but engaging - 1-2 sentences work best
5. **Links**: Always test your links to ensure they work correctly

## Need Help?

If you need to add new sections or customize beyond what the configuration allows, you may need to edit the React components directly. The main App component is in `/src/App.tsx`.
