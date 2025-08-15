const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
}));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.static(path.join(__dirname, './')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for career data (optional)
app.get('/api/careers', (req, res) => {
    // This would typically fetch from a database
    // For now, returning sample data
    const careers = [
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
        }
        // Add more careers as needed
    ];
    
    res.json(careers);
});

// API endpoint for quiz questions
app.get('/api/quiz-questions', (req, res) => {
    const questions = [
        {
            id: 1,
            question: "What type of work environment do you prefer?",
            options: [
                { text: "Collaborative team environment", score: { "Technology": 2, "Business": 3, "Healthcare": 3, "Science": 2, "Design": 2, "Engineering": 2 } },
                { text: "Independent work with minimal supervision", score: { "Technology": 3, "Business": 2, "Healthcare": 1, "Science": 3, "Design": 3, "Engineering": 2 } },
                { text: "Fast-paced, dynamic environment", score: { "Technology": 3, "Business": 3, "Healthcare": 2, "Science": 2, "Design": 3, "Engineering": 2 } },
                { text: "Structured, organized environment", score: { "Technology": 2, "Business": 2, "Healthcare": 3, "Science": 2, "Design": 1, "Engineering": 3 } }
            ]
        }
        // Add more questions as needed
    ];
    
    res.json(questions);
});

// API endpoint for quiz results (POST)
app.post('/api/quiz-results', (req, res) => {
    const { answers } = req.body;
    
    if (!answers || !Array.isArray(answers)) {
        return res.status(400).json({ error: 'Invalid answers format' });
    }
    
    // Calculate results (same logic as frontend)
    const categoryScores = {
        "Technology": 0,
        "Business": 0,
        "Healthcare": 0,
        "Science": 0,
        "Design": 0,
        "Engineering": 0
    };
    
    // Process answers and calculate scores
    // This would implement the same scoring algorithm as the frontend
    
    const results = {
        message: "Results calculated successfully",
        categoryScores,
        timestamp: new Date().toISOString()
    };
    
    res.json(results);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Career Guidance Website server running on port ${PORT}`);
    console.log(`📱 Open http://localhost:${PORT} in your browser`);
    console.log(`🔧 Development mode: npm run dev`);
});

module.exports = app;
