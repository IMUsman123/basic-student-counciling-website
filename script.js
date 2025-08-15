// Career Guidance Website JavaScript

// Sample career dataset - Replace this with your actual data from career_dataset.docx
const careerDataset = {
    careers: [
        {
            id: 1,
            name: "Software Engineer",
            description: "Develop software applications and systems using programming languages and development tools.",
            skills: ["Programming", "Problem Solving", "Analytical Thinking", "Teamwork", "Communication"],
            category: "Technology",
            growth: "High",
            salary: "$80,000 - $150,000"
        },
        {
            id: 2,
            name: "Data Scientist",
            description: "Analyze complex data sets to help organizations make better decisions.",
            skills: ["Statistics", "Machine Learning", "Python", "Data Visualization", "Business Acumen"],
            category: "Technology",
            growth: "Very High",
            salary: "$90,000 - $160,000"
        },
        {
            id: 3,
            name: "Marketing Manager",
            description: "Develop and implement marketing strategies to promote products and services.",
            skills: ["Strategic Planning", "Digital Marketing", "Analytics", "Leadership", "Creativity"],
            category: "Business",
            growth: "High",
            salary: "$70,000 - $130,000"
        },
        {
            id: 4,
            name: "Healthcare Administrator",
            description: "Manage healthcare facilities and coordinate medical services.",
            skills: ["Healthcare Management", "Leadership", "Communication", "Problem Solving", "Regulatory Knowledge"],
            category: "Healthcare",
            growth: "High",
            salary: "$60,000 - $120,000"
        },
        {
            id: 5,
            name: "Environmental Scientist",
            description: "Study environmental problems and develop solutions to protect the environment.",
            skills: ["Environmental Science", "Research", "Data Analysis", "Field Work", "Technical Writing"],
            category: "Science",
            growth: "High",
            salary: "$50,000 - $100,000"
        },
        {
            id: 6,
            name: "Financial Analyst",
            description: "Analyze financial data and provide guidance for business decisions.",
            skills: ["Financial Analysis", "Excel", "Critical Thinking", "Attention to Detail", "Communication"],
            category: "Business",
            growth: "High",
            salary: "$65,000 - $120,000"
        },
        {
            id: 7,
            name: "UX/UI Designer",
            description: "Design user-friendly digital interfaces and experiences.",
            skills: ["Design Software", "User Research", "Prototyping", "Creativity", "User Empathy"],
            category: "Design",
            growth: "Very High",
            salary: "$70,000 - $130,000"
        },
        {
            id: 8,
            name: "Civil Engineer",
            description: "Design and oversee construction of infrastructure projects.",
            skills: ["Engineering", "Project Management", "Problem Solving", "Technical Skills", "Teamwork"],
            category: "Engineering",
            growth: "Medium",
            salary: "$65,000 - $120,000"
        }
    ]
};

// Quiz questions
const quizQuestions = [
    {
        id: 1,
        question: "What type of work environment do you prefer?",
        options: [
            { text: "Collaborative team environment", score: { "Technology": 2, "Business": 3, "Healthcare": 3, "Science": 2, "Design": 2, "Engineering": 2 } },
            { text: "Independent work with minimal supervision", score: { "Technology": 3, "Business": 2, "Healthcare": 1, "Science": 3, "Design": 3, "Engineering": 2 } },
            { text: "Fast-paced, dynamic environment", score: { "Technology": 3, "Business": 3, "Healthcare": 2, "Science": 2, "Design": 3, "Engineering": 2 } },
            { text: "Structured, organized environment", score: { "Technology": 2, "Business": 2, "Healthcare": 3, "Science": 2, "Design": 1, "Engineering": 3 } }
        ]
    },
    {
        id: 2,
        question: "How do you prefer to solve problems?",
        options: [
            { text: "Using logical analysis and data", score: { "Technology": 3, "Business": 3, "Healthcare": 2, "Science": 3, "Design": 2, "Engineering": 3 } },
            { text: "Through creative thinking and innovation", score: { "Technology": 2, "Business": 2, "Healthcare": 1, "Science": 2, "Design": 3, "Engineering": 2 } },
            { text: "By collaborating with others", score: { "Technology": 2, "Business": 3, "Healthcare": 3, "Science": 2, "Design": 2, "Engineering": 2 } },
            { text: "Following established procedures", score: { "Technology": 1, "Business": 2, "Healthcare": 3, "Science": 2, "Design": 1, "Engineering": 2 } }
        ]
    },
    {
        id: 3,
        question: "What subjects interest you the most?",
        options: [
            { text: "Mathematics and Computer Science", score: { "Technology": 3, "Business": 2, "Healthcare": 1, "Science": 2, "Design": 1, "Engineering": 3 } },
            { text: "Business and Economics", score: { "Technology": 1, "Business": 3, "Healthcare": 2, "Science": 1, "Design": 1, "Engineering": 1 } },
            { text: "Biology and Health Sciences", score: { "Technology": 1, "Business": 1, "Healthcare": 3, "Science": 3, "Design": 1, "Engineering": 1 } },
            { text: "Arts and Design", score: { "Technology": 1, "Business": 1, "Healthcare": 1, "Science": 1, "Design": 3, "Engineering": 1 } }
        ]
    },
    {
        id: 4,
        question: "How do you feel about working with technology?",
        options: [
            { text: "I love learning new technologies", score: { "Technology": 3, "Business": 2, "Healthcare": 1, "Science": 2, "Design": 2, "Engineering": 2 } },
            { text: "I'm comfortable with basic technology", score: { "Technology": 2, "Business": 3, "Healthcare": 2, "Science": 2, "Design": 2, "Engineering": 2 } },
            { text: "I prefer minimal technology use", score: { "Technology": 1, "Business": 2, "Healthcare": 2, "Science": 2, "Design": 2, "Engineering": 1 } },
            { text: "I'm interested in specific applications", score: { "Technology": 2, "Business": 2, "Healthcare": 2, "Science": 2, "Design": 3, "Engineering": 2 } }
        ]
    },
    {
        id: 5,
        question: "What motivates you in your work?",
        options: [
            { text: "Solving complex technical challenges", score: { "Technology": 3, "Business": 2, "Healthcare": 1, "Science": 3, "Design": 2, "Engineering": 3 } },
            { text: "Helping others and making a difference", score: { "Technology": 1, "Business": 2, "Healthcare": 3, "Science": 2, "Design": 2, "Engineering": 2 } },
            { text: "Creating innovative solutions", score: { "Technology": 3, "Business": 2, "Healthcare": 1, "Science": 2, "Design": 3, "Engineering": 2 } },
            { text: "Achieving business goals and success", score: { "Technology": 2, "Business": 3, "Healthcare": 2, "Science": 1, "Design": 2, "Engineering": 1 } }
        ]
    },
    {
        id: 6,
        question: "How do you prefer to communicate?",
        options: [
            { text: "Through written reports and documentation", score: { "Technology": 2, "Business": 2, "Healthcare": 2, "Science": 3, "Design": 2, "Engineering": 2 } },
            { text: "In face-to-face meetings and presentations", score: { "Technology": 2, "Business": 3, "Healthcare": 3, "Science": 2, "Design": 2, "Engineering": 2 } },
            { text: "Using visual aids and demonstrations", score: { "Technology": 2, "Business": 2, "Healthcare": 2, "Science": 2, "Design": 3, "Engineering": 2 } },
            { text: "Through collaborative discussions", score: { "Technology": 2, "Business": 3, "Healthcare": 2, "Science": 2, "Design": 2, "Engineering": 2 } }
        ]
    }
];

// Global variables
let currentQuestionIndex = 0;
let userAnswers = [];
let categoryScores = {
    "Technology": 0,
    "Business": 0,
    "Healthcare": 0,
    "Science": 0,
    "Design": 0,
    "Engineering": 0
};

// DOM elements
const quizIntro = document.getElementById('quizIntro');
const quizQuestionsElement = document.getElementById('quizQuestions'); // Renamed to avoid conflict
const quizResults = document.getElementById('quizResults');
const questionContainer = document.getElementById('questionContainer');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature, .career-card, .quiz-card').forEach(el => {
        observer.observe(el);
    });
});

// Quiz functionality
function startQuiz() {
    quizIntro.style.display = 'none';
    quizQuestionsElement.style.display = 'block'; // Use the new variable name
    currentQuestionIndex = 0;
    userAnswers = [];
    resetCategoryScores();
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const questionHTML = `
        <div class="question">
            <h3>Question ${question.id} of ${quizQuestions.length}</h3>
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                         onclick="selectOption(${index})">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    questionContainer.innerHTML = questionHTML;
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update visual selection
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.toggle('selected', index === optionIndex);
    });
    
    // Enable next button if it's the last question
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = 'See Results';
    }
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an option before continuing.');
        return;
    }

    if (currentQuestionIndex === quizQuestions.length - 1) {
        calculateResults();
        return;
    }

    currentQuestionIndex++;
    displayQuestion();
    updateProgress();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function updateNavigationButtons() {
    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    nextBtn.textContent = currentQuestionIndex === quizQuestions.length - 1 ? 'See Results' : 'Next';
}

function calculateResults() {
    // Calculate category scores based on user answers
    userAnswers.forEach((answer, index) => {
        const question = quizQuestions[index];
        const selectedOption = question.options[answer];
        
        Object.keys(selectedOption.score).forEach(category => {
            categoryScores[category] += selectedOption.score[category];
        });
    });

    // Find top categories
    const sortedCategories = Object.entries(categoryScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);

    // Get recommended careers
    const recommendedCareers = careerDataset.careers
        .filter(career => sortedCategories.some(([category]) => career.category === category))
        .sort((a, b) => {
            const aScore = sortedCategories.find(([category]) => category === a.category)?.[1] || 0;
            const bScore = sortedCategories.find(([category]) => category === b.category)?.[1] || 0;
            return bScore - aScore;
        })
        .slice(0, 4);

    displayResults(recommendedCareers, sortedCategories);
}

function displayResults(recommendedCareers, topCategories) {
    quizQuestionsElement.style.display = 'none'; // Use the new variable name
    quizResults.style.display = 'block';

    const resultsHTML = `
        <div class="result-header">
            <h3>Your Career Recommendations</h3>
            <p>Based on your answers, here are the careers that best match your interests and skills.</p>
        </div>
        <div class="career-recommendations">
            ${recommendedCareers.map(career => `
                <div class="career-card">
                    <h4>${career.name}</h4>
                    <p>${career.description}</p>
                    <div class="career-details">
                        <p><strong>Category:</strong> ${career.category}</p>
                        <p><strong>Growth Potential:</strong> ${career.growth}</p>
                        <p><strong>Salary Range:</strong> ${career.salary}</p>
                    </div>
                    <div class="skills-list">
                        <strong>Key Skills:</strong>
                        ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="restart-btn">
            <button class="btn btn-primary" onclick="restartQuiz()">Take Quiz Again</button>
        </div>
    `;

    quizResults.innerHTML = resultsHTML;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    resetCategoryScores();
    quizResults.style.display = 'none';
    quizIntro.style.display = 'block';
    updateProgress();
}

function resetCategoryScores() {
    Object.keys(categoryScores).forEach(category => {
        categoryScores[category] = 0;
    });
}

// Add some interactive features
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading states and error handling
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function showError(element, message) {
    element.innerHTML = `<div class="error">${message}</div>`;
}

// Export functions for potential backend integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        careerDataset,
        quizQuestions,
        calculateResults
    };
}

