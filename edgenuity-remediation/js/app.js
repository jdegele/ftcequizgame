// Edgenuity Remediation Hub - Main Application Logic

// State management
let currentSubject = null;
let currentCourse = null;
let currentUnit = null;

// DOM Elements
const subjectSelection = document.getElementById('subject-selection');
const courseSelection = document.getElementById('course-selection');
const unitSelection = document.getElementById('unit-selection');
const remediationActivities = document.getElementById('remediation-activities');
const activityView = document.getElementById('activity-view');

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
                    resultsDiv.style.display = 'block';
                    resultsText.textContent = `You got ${correct} out of ${questions.length} correct (${Math.round(correct/questions.length * 100)}%)`;

                    if (correct === questions.length) {
                        resultsDiv.style.background = '#d4edda';
                        resultsText.textContent += ' - Excellent work!';
                    } else if (correct >= questions.length * 0.7) {
                        resultsDiv.style.background = '#fff3cd';
                        resultsText.textContent += ' - Good job! Review the explanations for missed questions.';
                    } else {
                        resultsDiv.style.background = '#f8d7da';
                        resultsText.textContent += ' - Consider reviewing the material and trying again.';
                    }
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Edgenuity Remediation Hub loaded successfully!');
    console.log(`Available subjects: ${Object.keys(courseData).join(', ')}`);
});
