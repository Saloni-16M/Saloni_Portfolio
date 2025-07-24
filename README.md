# 🚀 Saloni's Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a beautiful neon-themed design with smooth animations and interactive components.

## ✨ Features

### 🎨 Design & UI
- **Neon Theme**: Dark "Midnight Space" theme with cyan, magenta, and green neon accents
- **Glassmorphism**: Modern glass-like effects with backdrop blur
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Smooth Animations**: CSS animations and transitions throughout
- **Interactive Elements**: Hover effects, glowing buttons, and animated components

### 🧭 Navigation
- **Fixed Navigation Bar**: Always visible with profile picture and section links
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Section Highlighting**: Automatically highlights current section while scrolling
- **Logo Click**: Click logo to return to home section

### 📱 Sections

#### 🏠 Home Section
- **Animated Typing Effect**: Text appears character by character
- **Space Theme**: Floating astronaut and orbiting satellites
- **Call-to-Action Buttons**: Direct links to projects and contact
- **Profile Information**: Education and location tags

#### 👤 About Section
- **Personal Introduction**: Background and interests
- **Professional Summary**: Skills and experience overview
- **Animated Elements**: Floating shapes and neon effects

#### 📄 Resume Section
- **PDF Download**: Direct link to downloadable resume
- **Professional Layout**: Clean presentation of credentials

#### 💼 Projects Section
- **Interactive Carousel**: Horizontal sliding project showcase
- **Auto-Play**: Automatic sliding every 5 seconds
- **Pause on Hover**: Stops auto-play when user hovers
- **Manual Navigation**: Previous/Next buttons and dot indicators
- **Project Cards**: Each card shows:
  - Project image
  - Category and icon
  - Title and description
  - Technology badges
  - GitHub and Live Demo links
- **Project Modal**: Detailed view when clicking on cards

#### 🛠️ Skills Section
- **Technology Categories**: Frontend, Backend, Database, Tools
- **Icon Integration**: React Icons for visual appeal
- **Progress Indicators**: Visual representation of skill levels

#### 📈 Experience Section
- **Timeline Layout**: Vertical timeline with work history
- **Company Information**: Role, duration, and responsibilities
- **Technology Tags**: Skills used in each position

#### 📞 Contact Section
- **Two-Column Layout**: Contact info and social links
- **Social Media Icons**: LinkedIn, WhatsApp, Instagram, GitHub
- **Professional Presentation**: Clean, organized contact information

#### 🦶 Footer
- **Social Links**: Quick access to all social media
- **Copyright Information**: Professional footer with branding

## 🛠️ Technical Stack

### Frontend
- **React 19.1.0**: Modern React with hooks and functional components
- **Vite 7.0.0**: Fast build tool and development server
- **React Icons 5.5.0**: Comprehensive icon library
- **CSS3**: Custom styling with animations and responsive design

### Development Tools
- **ESLint**: Code quality and consistency
- **React Hooks**: State management and side effects
- **CSS Modules**: Scoped styling for components

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   │   ├── saloni_pic.jpg # Profile picture
│   │   └── saloni_resume.pdf # Resume PDF
│   ├── components/        # React components
│   │   ├── About.jsx      # About section component
│   │   ├── Contact.jsx    # Contact section component
│   │   ├── Experience.jsx # Experience timeline component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Home.jsx       # Hero section component
│   │   ├── Navigation.jsx # Navigation bar component
│   │   ├── Projects.jsx   # Projects carousel component
│   │   ├── ProjectModal.jsx # Project detail modal
│   │   ├── Skills.jsx     # Skills showcase component
│   │   ├── App.css        # Main app styles
│   │   ├── Footer.css     # Footer component styles
│   │   ├── Navigation.css # Navigation component styles
│   │   ├── ProjectModal.css # Modal component styles
│   │   └── Section.css    # Shared section styles
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The development server includes hot reload for instant updates

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## 🎯 Key Features Explained

### Projects Carousel
The projects section features a sophisticated carousel with:
- **Auto-play**: Slides automatically every 5 seconds
- **Pause on Hover**: Stops auto-play when user hovers over carousel
- **Manual Control**: Navigation buttons and dot indicators
- **Smooth Transitions**: CSS transitions for professional feel
- **Responsive Design**: Adapts to different screen sizes

### Navigation System
The navigation uses:
- **Scroll Detection**: Automatically highlights current section
- **Smooth Scrolling**: Seamless navigation between sections
- **Fixed Positioning**: Always visible at top of page
- **Active States**: Visual feedback for current section

### Animation System
The portfolio includes:
- **CSS Keyframes**: Custom animations for various elements
- **React Hooks**: State management for interactive animations
- **Intersection Observer**: Trigger animations on scroll
- **Performance Optimized**: Efficient animation rendering

## 🎨 Customization

### Colors and Theme
The neon theme uses CSS custom properties defined in `src/index.css`:
- `--accent-cyan`: Primary cyan color
- `--accent-magenta`: Secondary magenta color
- `--accent-green`: Accent green color
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color

### Adding New Projects
To add new projects, edit the `projects` array in `src/components/Projects.jsx`:
```javascript
{
  id: 6,
  title: "Your Project Title",
  description: "Project description...",
  image: "project-image-url",
  category: "Category",
  icon: <YourIcon />,
  technologies: ["Tech1", "Tech2"],
  github: "github-url",
  live: "live-demo-url"
}
```

### Modifying Sections
Each section is a separate component in the `src/components/` directory. Modify the respective component files to update content and styling.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect GitHub repository for automatic deployment
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Any Static Host**: Upload the `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or feedback about this portfolio:
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

**Built with ❤️ using React and Vite**
