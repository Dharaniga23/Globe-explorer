# 🌍 Globe Explorer

A beautiful, modern web application for exploring detailed information about countries around the world.

![Globe Explorer](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 🔍 **Search Countries** - Search for any country by name
- 📊 **Comprehensive Data** - View 12+ detailed information fields
- 🎨 **Premium Design** - Modern glassmorphism UI with smooth animations
- ⚡ **Fast & Responsive** - Mobile-first design that works on all devices
- 🕐 **Recent Searches** - Automatically saves your last 5 searches
- ⌨️ **Keyboard Shortcuts** - Press Enter to search
- 🌈 **Animated Title** - Eye-catching gradient text with floating animation
- 🗺️ **Google Maps Integration** - View country location with one click

## 🚀 Demo

Simply open `index.html` in your browser to start exploring countries!

## 📸 Screenshots

### Main Interface
Beautiful gradient background with glassmorphism search box and animated title.

### Country Information Display
Displays comprehensive country data in elegant, centered cards with subtle shadows.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, animations, and glassmorphism
- **JavaScript (ES6+)** - Vanilla JS for functionality
- **REST Countries API** - Data source for country information
- **Google Fonts** - Inter font family
- **LocalStorage API** - Recent searches persistence

## 📋 Information Displayed

- Official Name
- Native Name
- Capital City
- Region & Subregion
- Population
- Area (km²)
- Currencies (with symbols)
- Languages
- Timezones
- Bordering Countries
- Driving Side

## 🎨 Design Features

- **Gradient Background** - Subtle purple gradient with animated overlays
- **Glassmorphism Effects** - Translucent cards with backdrop blur
- **Smooth Animations** - Fade-in, floating, and staggered card animations
- **Animated Title** - Gradient color shift with floating motion
- **Hover Effects** - Interactive cards with lift and glow effects
- **Loading States** - Animated spinner during data fetch
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and Google Fonts)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/globe-explorer.git
```

2. Navigate to the project directory:
```bash
cd globe-explorer
```

3. Open `index.html` in your browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

That's it! No build process or dependencies required.

## 📁 Project Structure

```
globe-explorer/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 Usage

1. **Search for a Country**
   - Type a country name in the search box
   - Click "Search" or press Enter
   - Watch the loading animation

2. **View Information**
   - Browse through 12 information cards
   - Hover over cards for interactive effects
   - Click "View on Google Maps" to see location

3. **Use Recent Searches**
   - Click any recent search tag to instantly reload
   - Recent searches persist across browser sessions

## 🌐 API Reference

This project uses the [REST Countries API](https://restcountries.com/):
- Endpoint: `https://restcountries.com/v3.1/name/{country}`
- No API key required
- Free to use

## 🎨 Customization

### Change Color Scheme

Edit the CSS custom properties in `style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... more colors */
}
```

### Modify Background Gradient

Update the body background in `style.css`:

```css
body {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 50%, #553c9a 100%);
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Globe Explorer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

- GitHub: [@Dharaniga23](https://github.com/Dharaniga23)

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing country data
- [Google Fonts](https://fonts.google.com/) for the Inter font family
- Inspiration from modern web design trends

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ and modern web technologies**
