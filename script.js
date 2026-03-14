// Data
const profileData = {
    name: "George Uwora",
    title: "Junior Penetration Tester / Associate OffSec Analyst",
    email: "georgeuwora@gmail.com",
    phone: "+23409128794097",
    location: "Remote",
    linkedin: "https://www.linkedin.com/in/george-uwora"
};

const skills = [
    {
        id: 1,
        category: "Offensive Security",
        icon: "terminal",
        items: [
            { name: "Ethical Hacking", level: 85 },
            { name: "Penetration Testing", level: 80 },
            { name: "Vulnerability Assessment", level: 75 },
            { name: "Exploit Development", level: 70 }
        ]
    },
    {
        id: 2,
        category: "Defensive Security",
        icon: "shield",
        items: [
            { name: "SOC Analysis", level: 80 },
            { name: "Incident Response", level: 75 },
            { name: "Threat Intelligence", level: 70 },
            { name: "SIEM Tools", level: 75 }
        ]
    },
    {
        id: 3,
        category: "Network & Systems",
        icon: "network",
        items: [
            { name: "Network Security", level: 85 },
            { name: "Linux Administration", level: 80 },
            { name: "Windows Security", level: 75 },
            { name: "Firewall Configuration", level: 80 }
        ]
    },
    {
        id: 4,
        category: "Tools & Technologies",
        icon: "wrench",
        items: [
            { name: "Metasploit", level: 80 },
            { name: "Burp Suite", level: 85 },
            { name: "Wireshark", level: 80 },
            { name: "Nmap", level: 85 },
            { name: "Nessus", level: 75 },
            { name: "Splunk", level: 70 }
        ]
    }
];

const certifications = [
    {
        id: 1,
        name: "Certified Ethical Hacker",
        acronym: "CEH",
        issuer: "HIIT",
        date: "2024",
        icon: "shield-check"
    },
    {
        id: 2,
        name: "Cisco Certified Network Associate",
        acronym: "CCNA",
        issuer: "HIIT",
        date: "2024",
        icon: "network"
    }
];

const experience = [
    {
        id: 1,
        title: "Security Analyst Intern",
        company: "CyberWarLab",
        location: "Remote",
        startDate: "December 2025",
        endDate: "February 2026",
        responsibilities: [
            "Conducted vulnerability assessments on client networks and web applications",
            "Assisted in penetration testing engagements using industry-standard tools",
            "Analyzed security logs and alerts to identify potential threats",
            "Documented findings and prepared detailed security assessment reports",
            "Collaborated with senior analysts on incident response activities"
        ]
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Understanding SQL Injection: A Beginner's Guide",
        excerpt: "Explore the fundamentals of SQL injection attacks, how they work, and effective mitigation strategies to protect your web applications.",
        date: "2025-03-15",
        readTime: "8 min read",
        category: "Web Security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
    {
        id: 2,
        title: "Building a Home Lab for Penetration Testing",
        excerpt: "Step-by-step guide to setting up your own cybersecurity lab environment for practicing ethical hacking techniques safely.",
        date: "2025-02-28",
        readTime: "12 min read",
        category: "Lab Setup",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
        id: 3,
        title: "Top 10 OWASP Vulnerabilities Explained",
        excerpt: "Deep dive into the OWASP Top 10 security risks, with real-world examples and practical remediation techniques.",
        date: "2025-02-10",
        readTime: "15 min read",
        category: "Security Fundamentals",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
        id: 4,
        title: "Network Reconnaissance with Nmap: Advanced Techniques",
        excerpt: "Master advanced Nmap scanning techniques for effective network reconnaissance and security auditing.",
        date: "2025-01-20",
        readTime: "10 min read",
        category: "Network Security",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    }
];

// SVG Icons
const icons = {
    terminal: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    network: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>',
    wrench: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    'shield-check': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>',
    briefcase: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    mapPin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    clock: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    calendarSmall: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'
};

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('dark', savedTheme === 'dark');
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Download Resume
// function downloadResume() {
//     showToast('Resume download functionality - will be connected to actual file');
// }

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    skills.forEach(category => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category';
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <div class="icon-box">${icons[category.icon]}</div>
                <h3>${category.category}</h3>
            </div>
            <div class="skill-list">
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-level">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-level="${skill.level}" style="width: 0%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
    
    // Animate skill bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsGrid);
}

// Render Certifications
function renderCertifications() {
    const certsGrid = document.getElementById('certs-grid');
    
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';
        
        certCard.innerHTML = `
            <div class="cert-header">
                <div class="cert-icon">${icons[cert.icon]}</div>
                <div class="cert-badge">${cert.date}</div>
            </div>
            <h3 class="cert-acronym">${cert.acronym}</h3>
            <h4 class="cert-name">${cert.name}</h4>
            <div class="cert-details">
                <p><strong>Issuer:</strong> ${cert.issuer}</p>
            </div>
        `;
        
        certsGrid.appendChild(certCard);
    });
}

// Render Experience
function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    
    // Add timeline line
    const timelineLine = document.createElement('div');
    timelineLine.className = 'timeline-line';
    timeline.appendChild(timelineLine);
    
    experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        
        expItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="experience-card">
                <div class="exp-header">
                    <h3 class="exp-title">${exp.title}</h3>
                    <div class="exp-company">${icons.briefcase} ${exp.company}</div>
                </div>
                <div class="exp-meta">
                    <div class="exp-meta-item">${icons.calendar} ${exp.startDate} - ${exp.endDate}</div>
                    <div class="exp-meta-item">${icons.mapPin} ${exp.location}</div>
                </div>
                <div class="exp-responsibilities">
                    <p>Key Responsibilities:</p>
                    <ul class="exp-list">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        timeline.appendChild(expItem);
    });
}

// Render Blog
function renderBlog() {
    const blogGrid = document.getElementById('blog-grid');
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        const date = new Date(post.date);
        const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        
        blogCard.innerHTML = `
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-category">${post.category}</div>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <div class="blog-meta-item">${icons.calendarSmall} ${formattedDate}</div>
                    <div class="blog-meta-item">${icons.clock} ${post.readTime}</div>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-link" onclick="handleBlogClick(${post.id}); return false;">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
}

// Handle Blog Click
function handleBlogClick(postId) {
    showToast(`Navigate to blog post ${postId} - will be implemented with routing`);
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        
        // Simulate form submission
        showToast('Message sent! Thank you for reaching out.');
        form.reset();
    });
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Update Current Year
function updateYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    renderSkills();
    renderCertifications();
    renderExperience();
    renderBlog();
    initContactForm();
    updateYear();
});
