// ===========================
// USER PROFILE
// ===========================
const userProfile = {
  name: "ARRB Project Manager",
  personality: "INTJ",
  domain: "Transportation Data & Infrastructure",
  education: "MBA",
  skills: {
    management: ["Project Management", "Strategic Planning", "Stakeholder Management", "Team Leadership"],
    technical: ["Vibe Coding", "Data Analysis", "Technical Documentation", "Systems Thinking"],
    data: ["Transportation Data", "GIS/Geospatial", "Data Visualization", "Analytics"],
    business: ["Business Strategy", "Financial Analysis", "Risk Management", "Change Management"]
  },
  preferences: {
    intj: {
      autonomy: 0.95,      // High preference for independent work
      innovation: 0.90,     // Strong drive for innovative solutions
      strategy: 0.95,       // Strategic, big-picture thinking
      impact: 0.90,         // Focus on meaningful, measurable impact
      learning: 0.85        // Continuous learning and growth
    }
  }
};

// ===========================
// JOB DATABASE
// ===========================
const jobsDatabase = [
  {
    id: 1,
    title: "Technical Product Manager - Transportation Platform",
    company: "Uber",
    location: "Remote",
    salary: "$180k - $220k",
    type: "Full-time",
    roleType: "technical",
    careerUrl: "https://www.uber.com/careers/",
    description: "Lead the development of next-generation transportation data platforms. Drive strategy for real-time traffic optimization and route planning systems used by millions daily.",
    requirements: ["5+ years PM experience", "Transportation domain expertise", "Technical background", "Data-driven decision making"],
    tags: ["Transportation", "Data Platform", "Strategic", "High Impact"],
    posted: "2 days ago",
    responsibilities: [
      "Define product roadmap for transportation analytics platform",
      "Work with engineering teams on data pipeline architecture",
      "Drive innovation in real-time traffic optimization",
      "Partner with city governments and transportation agencies"
    ],
    matchFactors: {
      skillAlignment: 95,
      intjFit: 92,
      domainMatch: 98,
      growthPotential: 90
    }
  },
  {
    id: 2,
    title: "Senior Data Product Manager",
    company: "Waze (Google)",
    location: "Hybrid - San Francisco",
    salary: "$200k - $250k",
    type: "Full-time",
    roleType: "data",
    careerUrl: "https://www.google.com/about/careers/",
    description: "Own the vision and execution for Waze's data analytics and insights platform. Transform billions of data points into actionable intelligence for urban planning and transportation optimization.",
    requirements: ["MBA preferred", "Product management in data/analytics", "Transportation or mapping experience", "Strong technical acumen"],
    tags: ["Data Analytics", "Geospatial", "Product Strategy", "Urban Tech"],
    posted: "1 week ago",
    responsibilities: [
      "Build analytics products for city planners and DOT agencies",
      "Define metrics and KPIs for transportation efficiency",
      "Collaborate with data science and engineering teams",
      "Present strategic insights to C-level executives"
    ],
    matchFactors: {
      skillAlignment: 93,
      intjFit: 95,
      domainMatch: 96,
      growthPotential: 92
    }
  },
  {
    id: 3,
    title: "Solutions Architect - Smart Infrastructure",
    company: "Siemens Mobility",
    location: "Remote",
    salary: "$170k - $210k",
    type: "Full-time",
    roleType: "infrastructure",
    careerUrl: "https://www.siemens.com/careers",
    description: "Design and implement integrated transportation solutions combining IoT sensors, data analytics, and AI. Work on projects for smart cities, intelligent traffic systems, and connected infrastructure.",
    requirements: ["Infrastructure or transportation background", "Technical architecture experience", "Project management", "Systems integration"],
    tags: ["IoT", "Smart Cities", "Systems Architecture", "Innovation"],
    posted: "3 days ago",
    responsibilities: [
      "Architect end-to-end smart infrastructure solutions",
      "Lead technical integration of sensor networks and data platforms",
      "Manage complex multi-stakeholder projects",
      "Drive innovation in transportation technology"
    ],
    matchFactors: {
      skillAlignment: 90,
      intjFit: 88,
      domainMatch: 94,
      growthPotential: 87
    }
  },
  {
    id: 4,
    title: "Director of Transportation Analytics",
    company: "Replica (Alphabet)",
    location: "Remote",
    salary: "$210k - $270k",
    type: "Full-time",
    roleType: "data",
    careerUrl: "https://replica.com/careers",
    description: "Lead a team building the future of urban mobility analytics. Use advanced data science and modeling to help cities optimize transportation networks and plan for sustainable growth.",
    requirements: ["8+ years in transportation/urban planning", "Data analytics leadership", "Strong technical background", "Strategic thinking"],
    tags: ["Leadership", "Urban Analytics", "Strategy", "High Impact"],
    posted: "5 days ago",
    responsibilities: [
      "Build and mentor analytics team",
      "Define product strategy for transportation modeling platform",
      "Partner with city governments and urban planners",
      "Drive thought leadership in mobility analytics"
    ],
    matchFactors: {
      skillAlignment: 94,
      intjFit: 96,
      domainMatch: 97,
      growthPotential: 95
    }
  },
  {
    id: 5,
    title: "Product Manager - Infrastructure Data Platform",
    company: "Autodesk",
    location: "Hybrid - Portland, OR",
    salary: "$165k - $200k",
    type: "Full-time",
    roleType: "product",
    careerUrl: "https://www.autodesk.com/careers",
    description: "Shape the future of infrastructure design and construction through data. Build platforms that help civil engineers and planners leverage data analytics for better decision-making.",
    requirements: ["Infrastructure domain knowledge", "Product management experience", "Technical aptitude", "Cross-functional leadership"],
    tags: ["Infrastructure", "Construction Tech", "Data Platform", "Innovation"],
    posted: "1 week ago",
    responsibilities: [
      "Own roadmap for infrastructure data analytics tools",
      "Work with engineering on data integration and APIs",
      "Engage with customers in construction and civil engineering",
      "Drive adoption of data-driven workflows"
    ],
    matchFactors: {
      skillAlignment: 88,
      intjFit: 85,
      domainMatch: 91,
      growthPotential: 84
    }
  },
  {
    id: 6,
    title: "Technical Program Manager - Autonomous Systems",
    company: "Aurora Innovation",
    location: "Remote",
    salary: "$190k - $240k",
    type: "Full-time",
    roleType: "technical",
    careerUrl: "https://aurora.tech/careers",
    description: "Manage cross-functional programs developing autonomous trucking technology. Bridge technical teams, business stakeholders, and strategic partners to deliver on the future of freight.",
    requirements: ["TPM or senior PM experience", "Autonomous systems or robotics", "Data pipelines and ML systems", "Technical degree preferred"],
    tags: ["Autonomous Vehicles", "Logistics", "Technical", "Cutting Edge"],
    posted: "4 days ago",
    responsibilities: [
      "Coordinate development of autonomous driving systems",
      "Manage data collection and annotation programs",
      "Work with ML engineers on model deployment",
      "Drive strategic initiatives with logistics partners"
    ],
    matchFactors: {
      skillAlignment: 86,
      intjFit: 91,
      domainMatch: 89,
      growthPotential: 93
    }
  },
  {
    id: 7,
    title: "Senior Product Manager - Logistics Optimization",
    company: "Convoy",
    location: "Remote",
    salary: "$175k - $215k",
    type: "Full-time",
    roleType: "product",
    careerUrl: "https://convoy.com/careers/",
    description: "Build products that revolutionize freight logistics through data science and optimization algorithms. Help eliminate waste in the $800B trucking industry.",
    requirements: ["Product management in logistics/supply chain", "Data-driven approach", "Technical collaboration", "Business acumen"],
    tags: ["Logistics", "Optimization", "Data Science", "Sustainability"],
    posted: "6 days ago",
    responsibilities: [
      "Define product vision for routing optimization platform",
      "Collaborate with data scientists on algorithm development",
      "Drive metrics and experimentation framework",
      "Partner with operations on product rollout"
    ],
    matchFactors: {
      skillAlignment: 87,
      intjFit: 84,
      domainMatch: 85,
      growthPotential: 86
    }
  },
  {
    id: 8,
    title: "Head of Product - Geospatial Analytics",
    company: "Mapbox",
    location: "Remote",
    salary: "$220k - $280k",
    type: "Full-time",
    roleType: "data",
    careerUrl: "https://www.mapbox.com/careers",
    description: "Lead product strategy for geospatial data and analytics platform serving thousands of developers and enterprises. Shape how location data powers transportation, logistics, and urban planning.",
    requirements: ["10+ years product experience", "Geospatial/mapping expertise", "Platform product leadership", "Strategic vision"],
    tags: ["Geospatial", "Platform", "Leadership", "Developer Tools"],
    posted: "1 week ago",
    responsibilities: [
      "Set strategic direction for geospatial analytics products",
      "Build and lead product management team",
      "Drive go-to-market strategy",
      "Partner with engineering and design leadership"
    ],
    matchFactors: {
      skillAlignment: 92,
      intjFit: 94,
      domainMatch: 95,
      growthPotential: 96
    }
  },
  {
    id: 9,
    title: "Product Manager - Traffic Management Systems",
    company: "Mobileye (Intel)",
    location: "Hybrid - San Diego",
    salary: "$170k - $210k",
    type: "Full-time",
    roleType: "technical",
    careerUrl: "https://www.mobileye.com/careers/",
    description: "Develop AI-powered traffic management solutions for smart cities. Work at intersection of computer vision, IoT, and urban infrastructure to reduce congestion and improve safety.",
    requirements: ["PM experience in automotive or transportation", "Understanding of AI/ML", "City infrastructure knowledge", "Technical background"],
    tags: ["AI/ML", "Traffic Systems", "Smart Cities", "Computer Vision"],
    posted: "3 days ago",
    responsibilities: [
      "Define product roadmap for traffic optimization systems",
      "Work with computer vision teams on vehicle detection",
      "Partner with cities on pilot deployments",
      "Drive product analytics and performance metrics"
    ],
    matchFactors: {
      skillAlignment: 89,
      intjFit: 87,
      domainMatch: 93,
      growthPotential: 88
    }
  },
  {
    id: 10,
    title: "Principal Product Manager - Mobility Data",
    company: "Lyft",
    location: "Remote",
    salary: "$195k - $245k",
    type: "Full-time",
    roleType: "data",
    careerUrl: "https://www.lyft.com/careers",
    description: "Own the data infrastructure and analytics that power Lyft's marketplace and operations. Build tools that help cities understand and improve urban mobility through data partnerships.",
    requirements: ["Senior PM experience", "Marketplace or platform products", "Data infrastructure", "Transportation domain"],
    tags: ["Marketplace", "Data Infrastructure", "Urban Mobility", "Analytics"],
    posted: "2 days ago",
    responsibilities: [
      "Build data products for city partnerships",
      "Define analytics infrastructure roadmap",
      "Drive data strategy for mobility insights",
      "Collaborate with engineering on data pipelines"
    ],
    matchFactors: {
      skillAlignment: 91,
      intjFit: 90,
      domainMatch: 94,
      growthPotential: 89
    }
  },
  {
    id: 11,
    title: "Solutions Architect - Transportation IoT",
    company: "AWS",
    location: "Remote",
    salary: "$180k - $230k",
    type: "Full-time",
    roleType: "infrastructure",
    careerUrl: "https://www.amazon.jobs/en/teams/amazon-web-services",
    description: "Help transportation companies and government agencies leverage AWS IoT and analytics services. Design cloud architectures for connected vehicles, smart infrastructure, and real-time traffic systems.",
    requirements: ["Cloud architecture experience", "IoT solutions", "Transportation industry knowledge", "Customer-facing role"],
    tags: ["Cloud", "IoT", "Architecture", "Consulting"],
    posted: "1 week ago",
    responsibilities: [
      "Design IoT architectures for transportation customers",
      "Lead technical workshops and proof-of-concepts",
      "Drive adoption of AWS analytics services",
      "Build thought leadership in transportation IoT"
    ],
    matchFactors: {
      skillAlignment: 85,
      intjFit: 86,
      domainMatch: 90,
      growthPotential: 87
    }
  },
  {
    id: 12,
    title: "VP of Product - Construction Tech",
    company: "Procore",
    location: "Hybrid - Austin, TX",
    salary: "$240k - $320k",
    type: "Full-time",
    roleType: "product",
    careerUrl: "https://www.procore.com/jobs",
    description: "Lead product organization building the operating system for the construction industry. Drive strategy for data analytics, project management, and workforce productivity tools.",
    requirements: ["VP-level product leadership", "Construction or infrastructure", "B2B SaaS experience", "Team building"],
    tags: ["Leadership", "Construction", "SaaS", "Enterprise"],
    posted: "1 week ago",
    responsibilities: [
      "Set product vision and strategy for construction platform",
      "Build and scale product management organization",
      "Drive key enterprise partnerships",
      "Lead product innovation and roadmap"
    ],
    matchFactors: {
      skillAlignment: 88,
      intjFit: 92,
      domainMatch: 87,
      growthPotential: 94
    }
  }
];

// ===========================
// MATCHING ALGORITHM
// ===========================
function calculateMatchScore(job) {
  const { skillAlignment, intjFit, domainMatch, growthPotential } = job.matchFactors;

  // Weighted scoring based on INTJ preferences
  const weights = {
    skillAlignment: 0.30,    // How well skills match
    intjFit: 0.25,          // Autonomy, innovation, strategic impact
    domainMatch: 0.30,       // Transportation/infrastructure relevance
    growthPotential: 0.15    // Learning and advancement opportunity
  };

  const score =
    (skillAlignment * weights.skillAlignment) +
    (intjFit * weights.intjFit) +
    (domainMatch * weights.domainMatch) +
    (growthPotential * weights.growthPotential);

  return Math.round(score);
}

// Add match scores to all jobs
jobsDatabase.forEach(job => {
  job.matchScore = calculateMatchScore(job);
});

// ===========================
// STATE MANAGEMENT
// ===========================
let currentSort = 'match';
let currentFilters = {
  search: '',
  role: 'all',
  location: 'all',
  salary: 'all'
};

// ===========================
// RENDER FUNCTIONS
// ===========================
function renderProfile() {
  const profileGrid = document.getElementById('profileGrid');

  const profileCards = [
    { icon: '🎯', label: 'Current Role', value: userProfile.name },
    { icon: '🧠', label: 'Personality', value: userProfile.personality },
    { icon: '🚊', label: 'Domain', value: userProfile.domain },
    { icon: '🎓', label: 'Education', value: userProfile.education },
    { icon: '💻', label: 'Technical Skills', value: 'Vibe Coding + Data' },
    { icon: '📊', label: 'Expertise', value: 'PM + Data + Strategy' }
  ];

  profileGrid.innerHTML = profileCards.map(card => `
    <div class="profile-card">
      <div class="profile-icon">${card.icon}</div>
      <div class="profile-label">${card.label}</div>
      <div class="profile-value">${card.value}</div>
    </div>
  `).join('');
}

function renderJobs(jobs) {
  const jobsGrid = document.getElementById('jobsGrid');
  const resultsCount = document.getElementById('resultsCount');

  resultsCount.textContent = `${jobs.length} opportunities found`;

  if (jobs.length === 0) {
    jobsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-secondary);">
        <p style="font-size: 1.2rem;">No jobs match your current filters.</p>
        <p style="margin-top: 1rem;">Try adjusting your search criteria.</p>
      </div>
    `;
    return;
  }

  jobsGrid.innerHTML = jobs.map(job => `
    <div class="job-card" data-job-id="${job.id}">
      <div class="job-header">
        <div class="match-score">${job.matchScore}% Match</div>
      </div>
      
      <h3 class="job-title">${job.title}</h3>
      <div class="company">${job.company}</div>
      
      <div class="job-meta">
        <div class="meta-item">
          <span class="meta-icon">📍</span>
          ${job.location}
        </div>
        <div class="meta-item">
          <span class="meta-icon">💰</span>
          ${job.salary}
        </div>
        <div class="meta-item">
          <span class="meta-icon">⏰</span>
          ${job.posted}
        </div>
      </div>
      
      <p class="job-description">${job.description}</p>
      
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      
      <div class="match-details">
        <div class="match-item">
          <div class="match-label">Skills</div>
          <div class="match-value">${job.matchFactors.skillAlignment}%</div>
        </div>
        <div class="match-item">
          <div class="match-label">INTJ Fit</div>
          <div class="match-value">${job.matchFactors.intjFit}%</div>
        </div>
        <div class="match-item">
          <div class="match-label">Domain</div>
          <div class="match-value">${job.matchFactors.domainMatch}%</div>
        </div>
        <div class="match-item">
          <div class="match-label">Growth</div>
          <div class="match-value">${job.matchFactors.growthPotential}%</div>
        </div>
      </div>
      
      <div class="job-actions">
        <button class="btn-save" data-job-id="${job.id}">
          <span class="btn-icon">💾</span>
          Save Job
        </button>
        <a href="${job.careerUrl}" target="_blank" rel="noopener noreferrer" class="btn-apply">
          <span class="btn-icon">🚀</span>
          Apply Now
          <span class="external-icon">↗</span>
        </a>
      </div>
    </div>
  `).join('');

  // Add click handlers for job cards (to view details)
  document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking on buttons
      if (e.target.closest('.job-actions')) return;

      const jobId = parseInt(card.dataset.jobId);
      const job = jobsDatabase.find(j => j.id === jobId);
      if (job) showJobDetails(job);
    });
  });

  // Add click handlers for Save buttons
  document.querySelectorAll('.btn-save').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const jobId = parseInt(btn.dataset.jobId);
      saveJob(jobId);
    });
  });
}

function showJobDetails(job) {
  alert(`
${job.title}
${job.company} | ${job.location}
${job.salary}

${job.description}

Key Responsibilities:
${job.responsibilities.map((r, i) => `${i + 1}. ${r}`).join('\n')}

Requirements:
${job.requirements.map(r => `• ${r}`).join('\n')}

Match Score: ${job.matchScore}%
  `);
}

// Placeholder for save job functionality (will be implemented with tracker)
function saveJob(jobId) {
  const job = jobsDatabase.find(j => j.id === jobId);
  if (job) {
    alert(`Job saved! "${job.title}" at ${job.company} will be added to your tracker.\n\n(Application Tracker coming next!)`);
  }
}

// ===========================
// FILTER & SORT FUNCTIONS
// ===========================
function filterJobs() {
  let filtered = [...jobsDatabase];

  // Search filter
  if (currentFilters.search) {
    const search = currentFilters.search.toLowerCase();
    filtered = filtered.filter(job =>
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.description.toLowerCase().includes(search) ||
      job.tags.some(tag => tag.toLowerCase().includes(search))
    );
  }

  // Role type filter
  if (currentFilters.role !== 'all') {
    filtered = filtered.filter(job => job.roleType === currentFilters.role);
  }

  // Location filter
  if (currentFilters.location !== 'all') {
    filtered = filtered.filter(job =>
      job.location.toLowerCase().includes(currentFilters.location.toLowerCase())
    );
  }

  // Salary filter
  if (currentFilters.salary !== 'all') {
    const minSalary = parseInt(currentFilters.salary);
    filtered = filtered.filter(job => {
      const salaryMatch = job.salary.match(/\$(\d+)k/);
      return salaryMatch && parseInt(salaryMatch[1]) >= minSalary;
    });
  }

  return filtered;
}

function sortJobs(jobs) {
  const sorted = [...jobs];

  switch (currentSort) {
    case 'match':
      sorted.sort((a, b) => b.matchScore - a.matchScore);
      break;
    case 'salary':
      sorted.sort((a, b) => {
        const aMax = parseInt(a.salary.match(/\$(\d+)k - \$(\d+)k/)[2]);
        const bMax = parseInt(b.salary.match(/\$(\d+)k - \$(\d+)k/)[2]);
        return bMax - aMax;
      });
      break;
    case 'recent':
      sorted.sort((a, b) => {
        const getDays = (posted) => {
          const match = posted.match(/(\d+)/);
          return match ? parseInt(match[1]) : 999;
        };
        return getDays(a.posted) - getDays(b.posted);
      });
      break;
  }

  return sorted;
}

function updateJobs() {
  const filtered = filterJobs();
  const sorted = sortJobs(filtered);
  renderJobs(sorted);
}

// ===========================
// EVENT LISTENERS
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  // Render initial state
  renderProfile();
  updateJobs();

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    currentFilters.search = e.target.value;
    updateJobs();
  });

  // Filters
  document.getElementById('roleFilter').addEventListener('change', (e) => {
    currentFilters.role = e.target.value;
    updateJobs();
  });

  document.getElementById('locationFilter').addEventListener('change', (e) => {
    currentFilters.location = e.target.value;
    updateJobs();
  });

  document.getElementById('salaryFilter').addEventListener('change', (e) => {
    currentFilters.salary = e.target.value;
    updateJobs();
  });

  // Sort buttons
  document.querySelectorAll('[data-sort]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Update active state
      document.querySelectorAll('[data-sort]').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      // Update sort
      currentSort = e.target.dataset.sort;
      updateJobs();
    });
  });
});
