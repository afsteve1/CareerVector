# CareerVector - Personalized Job Discovery Platform

An intelligent job discovery platform tailored for ARRB Project Managers with transportation data expertise, MBA credentials, and technical coding skills.

## 🎯 Features

- **Intelligent Matching Algorithm**: AI-powered job recommendations based on:
  - Skill alignment (PM, data, technical)
  - INTJ personality preferences (autonomy, innovation, strategic impact)
  - Domain relevance (transportation, infrastructure, data platforms)
  - Career growth potential

- **Personalized Profile Dashboard**: View your unique combination of skills and expertise

- **Advanced Filtering & Search**: Find opportunities by role type, location, salary, and keywords

- **Career Insights**: Curated recommendations for ideal role types and growth sectors

- **Premium UI**: Modern dark mode with glassmorphism, vibrant gradients, and smooth animations

## 🚀 How It Works

### Matching Algorithm

The platform uses a weighted scoring system:

```
Match Score = (Skill Alignment × 30%) + 
              (INTJ Fit × 25%) + 
              (Domain Match × 30%) + 
              (Growth Potential × 15%)
```

**INTJ Fit Factors:**
- Autonomy: Preference for independent work
- Innovation: Drive for innovative solutions
- Strategy: Big-picture, strategic thinking
- Impact: Focus on measurable, meaningful impact
- Learning: Continuous growth opportunities

### Job Database

Curated opportunities across:
- Transportation technology & smart cities
- Infrastructure & construction tech
- Logistics & supply chain technology
- Data platforms & analytics
- Product management (technical/data products)

## Getting Started

### Live Demo

The platform runs locally with a simple static server:

```bash
# Navigate to the project directory
cd jobsearch

# Start the local server
npx -y serve .
```

Then open your browser to `http://localhost:3000`

### GitHub Repository

**🔗 Live on GitHub:** [https://github.com/afsteve1/CareerVector](https://github.com/afsteve1/CareerVector)

Clone and run locally:

```bash
# Clone the repository
git clone https://github.com/afsteve1/CareerVector.git

# Navigate to project
cd CareerVector

# Start local server
npx -y serve .

# Open http://localhost:3000 in your browser
```

### Option 2: Using Python
```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

### Option 3: Direct File Open
Simply open `index.html` in your browser (some features may be limited)

## 📁 Project Structure

```
jobsearch/
├── index.html      # Main application structure
├── styles.css      # Premium design system
├── app.js          # Matching algorithm and business logic
└── README.md       # This file
```

## 🎨 Design Philosophy

- **Premium First**: Stunning visual design that wows on first impression
- **Data-Driven**: Every recommendation backed by intelligent matching
- **INTJ-Optimized**: Designed for strategic, independent thinkers
- **No Dependencies**: Pure HTML, CSS, JavaScript for maximum flexibility

## 🔮 Future Enhancements

- Live job API integration (LinkedIn, Indeed, GitHub Jobs)
- Application tracking and status management
- Resume/cover letter generation
- Interview preparation resources
- Networking and contact management
- Salary negotiation insights
- GitHub repository integration
- Email alerts for new matches

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Glassmorphism, CSS Grid, Custom animations
- **Fonts**: Google Fonts (Inter)
- **No frameworks**: Zero dependencies

## 📊 Sample Jobs Included

The platform includes 12 carefully curated job opportunities from companies like:
- Uber, Waze (Google), Lyft
- Siemens Mobility, Aurora Innovation
- Mapbox, Mobileye (Intel)
- AWS, Autodesk, Procore
- And more...

---

Built with ❤️ for strategic leaders in transportation tech
