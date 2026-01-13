# Modern CV Website

A stunning, modern CV website built with Python Flask featuring glassmorphism design, smooth animations, and responsive layout.

## Features

✨ **Modern Design**
- Glassmorphism effects and vibrant gradients
- Smooth animations and micro-interactions
- Responsive design for all devices
- Dark theme with animated background

🎨 **Sections**
- Hero section with profile photo
- About me with statistics
- Work experience timeline
- Education background
- Skills with progress bars
- Featured projects
- Contact information

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Customize Your Information

Edit `Web.py` and update the `cv_data` dictionary with your personal information:
- Name, title, and tagline
- Contact details (email, phone, location)
- Social media links (LinkedIn, GitHub, website)
- About section
- Skills and proficiency levels
- Work experience
- Education
- Projects

### 3. Add Your Profile Photo

Replace `static/images/profile.jpg` with your own professional photo.

### 4. Run the Application

```bash
python Web.py
```

The website will be available at: `http://localhost:5000`

## Customization

### Colors
Edit `static/css/style.css` and modify the CSS variables in the `:root` section to change colors:
- `--primary-gradient`: Main gradient colors
- `--secondary-gradient`: Secondary accent colors
- `--accent-color`: Highlight color

### Content
All content is managed in the `cv_data` dictionary in `Web.py`. Simply update the values to reflect your information.

### Sections
To add or remove sections, edit `templates/index.html` and the corresponding CSS in `static/css/style.css`.

## Technologies Used

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: Font Awesome 6
- **Design**: Glassmorphism, CSS Grid, Flexbox

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

Free to use for personal projects. Customize as needed!

---

**Made with ❤️ using Python & Flask**
