// Edgenuity Remediation Hub - Main Application Logic

// Student data
let studentData = {
    name: '',
    id: '',
    period: '',
    loginTime: null
};

// Score tracking
let quizScores = [];

// State management
let currentSubject = null;
let currentCourse = null;
let currentUnit = null;

// DOM Elements
const studentLoginModal = document.getElementById('student-login-modal');
const scoreReportModal = document.getElementById('score-report-modal');
const app = document.getElementById('app');
const subjectSelection = document.getElementById('subject-selection');
const courseSelection = document.getElementById('course-selection');
const unitSelection = document.getElementById('unit-selection');
const remediationActivities = document.getElementById('remediation-activities');
const activityView = document.getElementById('activity-view');

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for existing session
    const savedSession = localStorage.getItem('edgenuitySession');
    if (savedSession) {
        const session = JSON.parse(savedSession);
        // Check if session is from today
        const sessionDate = new Date(session.loginTime).toDateString();
        const today = new Date().toDateString();
        if (sessionDate === today) {
            studentData = session.studentData;
            quizScores = session.quizScores || [];
            showApp();
            return;
        }
    }

    // Show login modal
    setupLoginForm();
});

// Setup login form
function setupLoginForm() {
    const form = document.getElementById('student-login-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        studentData.name = document.getElementById('student-name').value.trim();
        studentData.id = document.getElementById('student-id').value.trim();
        studentData.period = document.getElementById('class-period').value;
        studentData.loginTime = new Date().toISOString();

        // Save session
        saveSession();

        // Show the app
        showApp();
    });
}

// Show the main app
function showApp() {
    studentLoginModal.classList.add('hidden');
    app.classList.remove('hidden');

    // Update student info bar
    document.getElementById('display-student-name').textContent = studentData.name;
    document.getElementById('display-student-id').textContent = `ID: ${studentData.id}`;
    document.getElementById('display-class-period').textContent = `Period ${studentData.period}`;
}

// Save session to localStorage
function saveSession() {
    const session = {
        studentData: studentData,
        quizScores: quizScores,
        loginTime: studentData.loginTime
    };
    localStorage.setItem('edgenuitySession', JSON.stringify(session));
}

// Record a quiz score
function recordQuizScore(courseName, unitName, quizTitle, score, totalQuestions, passed) {
    const scoreEntry = {
        course: courseName,
        unit: unitName,
        quiz: quizTitle,
        score: score,
        total: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        passed: passed,
        timestamp: new Date().toISOString()
    };

    quizScores.push(scoreEntry);
    saveSession();
}

// Generate verification code
function generateVerificationCode() {
    const data = studentData.id + studentData.name + new Date().toDateString();
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36).toUpperCase().substring(0, 8);
}

// Show score report
function showScoreReport() {
    const reportContent = document.getElementById('score-report-content');
    const now = new Date();

    let html = `
        <div class="student-details">
            <h3>Student Information</h3>
            <div class="detail-row">
                <span class="detail-label">Student Name:</span>
                <span class="detail-value">${studentData.name}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Student ID:</span>
                <span class="detail-value">${studentData.id}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Class Period:</span>
                <span class="detail-value">Period ${studentData.period}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Report Date:</span>
                <span class="detail-value">${now.toLocaleDateString()} ${now.toLocaleTimeString()}</span>
            </div>
        </div>
    `;

    if (quizScores.length > 0) {
        // Calculate summary stats
        const totalQuizzes = quizScores.length;
        const passedQuizzes = quizScores.filter(s => s.passed).length;
        const avgScore = Math.round(quizScores.reduce((sum, s) => sum + s.percentage, 0) / totalQuizzes);

        html += `
            <div class="report-summary">
                <h3>Summary</h3>
                <div class="summary-stats">
                    <div class="stat-item">
                        <div class="stat-value">${totalQuizzes}</div>
                        <div class="stat-label">Quizzes Completed</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${passedQuizzes}/${totalQuizzes}</div>
                        <div class="stat-label">Quizzes Passed</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${avgScore}%</div>
                        <div class="stat-label">Average Score</div>
                    </div>
                </div>
            </div>

            <div class="quiz-scores">
                <h3>Quiz Score Details</h3>
                <table class="score-table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Unit/Quiz</th>
                            <th>Score</th>
                            <th>Status</th>
                            <th>Date/Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${quizScores.map(s => `
                            <tr>
                                <td>${s.course}</td>
                                <td>${s.quiz}</td>
                                <td class="${s.passed ? 'score-pass' : 'score-fail'}">${s.score}/${s.total} (${s.percentage}%)</td>
                                <td class="${s.passed ? 'score-pass' : 'score-fail'}">${s.passed ? 'PASSED' : 'NEEDS REVIEW'}</td>
                                <td>${new Date(s.timestamp).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        html += `
            <div class="no-scores">
                <p>No quiz scores recorded yet.</p>
                <p>Complete practice quizzes to see your scores here.</p>
            </div>
        `;
    }

    // Add verification code
    html += `
        <div class="verification-code">
            <p>Teacher Verification Code:</p>
            <span class="code">${generateVerificationCode()}</span>
            <p style="margin-top: 10px; font-size: 0.8rem; opacity: 0.8;">This code verifies the authenticity of this report</p>
        </div>
    `;

    reportContent.innerHTML = html;
    scoreReportModal.classList.remove('hidden');
}

// Close score report
function closeScoreReport() {
    scoreReportModal.classList.add('hidden');
}

// Print score report
function printScoreReport() {
    window.print();
}

// Show courses for selected subject
function showCourses(subject) {
    currentSubject = subject;
    const subjectData = courseData[subject];

    // Update heading
    document.getElementById('course-heading').textContent = `${subjectData.name} Courses`;

    // Generate course cards
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = subjectData.courses.map(course => `
        <div class="course-card" onclick="showUnits('${course.id}')">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <span class="grade-badge">${course.grade}</span>
        </div>
    `).join('');

    // Toggle visibility
    subjectSelection.classList.add('hidden');
    courseSelection.classList.remove('hidden');
}

// Show units for selected course
function showUnits(courseId) {
    const subjectData = courseData[currentSubject];
    currentCourse = subjectData.courses.find(c => c.id === courseId);

    // Update heading
    document.getElementById('unit-heading').textContent = `${currentCourse.name} - Select Unit`;

    // Generate unit cards
    const unitList = document.getElementById('unit-list');
    unitList.innerHTML = currentCourse.units.map(unit => `
        <div class="unit-card" onclick="showActivities('${unit.id}')">
            <h4>${unit.name}</h4>
            <p class="quiz-count">Quiz topics: ${unit.quizTopics.join(', ')}</p>
        </div>
    `).join('');

    // Toggle visibility
    courseSelection.classList.add('hidden');
    unitSelection.classList.remove('hidden');
}

// Show activities for selected unit
function showActivities(unitId) {
    currentUnit = currentCourse.units.find(u => u.id === unitId);

    // Update heading and description
    document.getElementById('activity-heading').textContent = currentUnit.name;
    document.getElementById('activity-description').textContent =
        `Remediation activities for: ${currentUnit.quizTopics.join(', ')}`;

    // Generate activity cards
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = currentUnit.activities.map((activity, index) => `
        <div class="activity-card">
            <h4>
                <span class="activity-type">${activity.icon}</span>
                ${activity.title}
            </h4>
            <p>${activity.description}</p>
            <button class="btn-start" onclick="startActivity(${index})">Start Activity</button>
        </div>
    `).join('');

    // Toggle visibility
    unitSelection.classList.add('hidden');
    remediationActivities.classList.remove('hidden');
}

// Start selected activity
function startActivity(activityIndex) {
    const activity = currentUnit.activities[activityIndex];
    const contentDiv = document.getElementById('activity-content');

    let html = `<h3>${activity.title}</h3>`;

    switch(activity.type) {
        case 'video':
            html += renderVideoActivity(activity);
            break;
        case 'practice':
            html += renderPracticeQuiz(activity);
            break;
        case 'worksheet':
            html += renderWorksheet(activity);
            break;
        default:
            html += '<p>Activity content not available.</p>';
    }

    contentDiv.innerHTML = html;

    // Toggle visibility
    remediationActivities.classList.add('hidden');
    activityView.classList.remove('hidden');

    // Initialize quiz if it's a practice quiz
    if (activity.type === 'practice') {
        initializePracticeQuiz(activity);
    }
}

// Render video activity
function renderVideoActivity(activity) {
    return `
        <div class="video-container">
            <iframe src="${activity.content.videoUrl}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
            </iframe>
        </div>
        <div class="activity-info">
            <strong>Key Notes:</strong>
            <p>${activity.content.notes}</p>
        </div>
    `;
}

// Render practice quiz
function renderPracticeQuiz(activity) {
    const questions = activity.content.questions;
    return `
        <div class="practice-quiz">
            ${questions.map((q, qIndex) => `
                <div class="quiz-question" id="question-${qIndex}">
                    <h4>Question ${qIndex + 1}: ${q.question}</h4>
                    <ul class="quiz-choices" data-question="${qIndex}" data-answer="${q.answer}">
                        ${q.choices.map(choice => `
                            <li data-choice="${choice}">${choice}</li>
                        `).join('')}
                    </ul>
                    <div class="explanation" id="explanation-${qIndex}" style="display: none;">
                        <strong>Explanation:</strong> ${q.explanation}
                    </div>
                </div>
            `).join('')}
        </div>
        <div id="quiz-results" style="display: none; margin-top: 20px; padding: 20px; background: #e8f4fc; border-radius: 8px;">
            <h4>Quiz Complete!</h4>
            <p id="results-text"></p>
            <p id="score-recorded" style="margin-top: 10px; font-style: italic; color: #27ae60;"></p>
        </div>
    `;
}

// Initialize practice quiz interactivity
function initializePracticeQuiz(activity) {
    const questions = activity.content.questions;
    let answered = 0;
    let correct = 0;

    document.querySelectorAll('.quiz-choices').forEach(choiceList => {
        const questionIndex = parseInt(choiceList.dataset.question);
        const correctAnswer = choiceList.dataset.answer;

        choiceList.querySelectorAll('li').forEach(choice => {
            choice.addEventListener('click', function() {
                // Prevent re-answering
                if (choiceList.classList.contains('answered')) return;

                choiceList.classList.add('answered');
                const selectedAnswer = this.dataset.choice;

                if (selectedAnswer === correctAnswer) {
                    this.classList.add('correct');
                    correct++;
                } else {
                    this.classList.add('incorrect');
                    // Highlight correct answer
                    choiceList.querySelector(`li[data-choice="${correctAnswer}"]`).classList.add('correct');
                }

                // Show explanation
                document.getElementById(`explanation-${questionIndex}`).style.display = 'block';

                answered++;

                // Show results when all questions answered
                if (answered === questions.length) {
                    const resultsDiv = document.getElementById('quiz-results');
                    const resultsText = document.getElementById('results-text');
                    const scoreRecorded = document.getElementById('score-recorded');
                    resultsDiv.style.display = 'block';

                    const percentage = Math.round(correct/questions.length * 100);
                    const passed = percentage >= 70;

                    resultsText.textContent = `You got ${correct} out of ${questions.length} correct (${percentage}%)`;

                    if (passed) {
                        resultsDiv.style.background = '#d4edda';
                        resultsText.textContent += ' - PASSED!';
                    } else if (percentage >= 50) {
                        resultsDiv.style.background = '#fff3cd';
                        resultsText.textContent += ' - Review the explanations and try again.';
                    } else {
                        resultsDiv.style.background = '#f8d7da';
                        resultsText.textContent += ' - Please review the material before retrying.';
                    }

                    // Record the score
                    recordQuizScore(
                        currentCourse.name,
                        currentUnit.name,
                        activity.title,
                        correct,
                        questions.length,
                        passed
                    );

                    scoreRecorded.textContent = 'Score has been recorded to your report.';
                }
            });
        });
    });
}

// Render worksheet
function renderWorksheet(activity) {
    const content = activity.content;
    return `
        <div class="worksheet">
            <div class="activity-info">
                <strong>Instructions:</strong>
                <p>${content.instructions}</p>
            </div>
            <div class="problems">
                <h4>Problems:</h4>
                <ol>
                    ${content.problems.map(problem => `<li>${problem}</li>`).join('')}
                </ol>
            </div>
            <button class="btn-primary" onclick="toggleAnswers()" style="margin-top: 20px;">Show Answers</button>
            <div id="worksheet-answers" style="display: none; margin-top: 20px;">
                <h4>Answers:</h4>
                <ol>
                    ${content.answers.map(answer => `<li><strong>${answer}</strong></li>`).join('')}
                </ol>
            </div>
        </div>
    `;
}

// Toggle worksheet answers
function toggleAnswers() {
    const answersDiv = document.getElementById('worksheet-answers');
    const btn = event.target;

    if (answersDiv.style.display === 'none') {
        answersDiv.style.display = 'block';
        btn.textContent = 'Hide Answers';
    } else {
        answersDiv.style.display = 'none';
        btn.textContent = 'Show Answers';
    }
}

// Navigation: Go back to previous section
function goBack(to) {
    // Hide all sections first
    subjectSelection.classList.add('hidden');
    courseSelection.classList.add('hidden');
    unitSelection.classList.add('hidden');
    remediationActivities.classList.add('hidden');
    activityView.classList.add('hidden');

    // Show the requested section
    switch(to) {
        case 'subjects':
            subjectSelection.classList.remove('hidden');
            currentSubject = null;
            currentCourse = null;
            currentUnit = null;
            break;
        case 'courses':
            courseSelection.classList.remove('hidden');
            currentCourse = null;
            currentUnit = null;
            break;
        case 'units':
            unitSelection.classList.remove('hidden');
            currentUnit = null;
            break;
        case 'activities':
            remediationActivities.classList.remove('hidden');
            break;
    }
}
