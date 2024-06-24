const courses = [
    { id: 1, name: "Basic Python Programming" },
    { id: 2, name: "Advanced Python Programming" },
    { id: 3, name: "SQL Queries" },
    { id: 4, name: "Data Structures" },
    { id: 5, name: "Machine Learning" },
    { id: 6, name: "Engineering Math" },
    { id: 7, name: "Cyber Security - Ethical Hacking" }
];

const courseListElement = document.getElementById('courses');
if (courseListElement) {
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course.name;
        courseListElement.appendChild(li);
    });
}

const courseSelectElement = document.getElementById('course');
if (courseSelectElement) {
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.name;
        option.textContent = course.name;
        courseSelectElement.appendChild(option);
    });
}

const enrollForm = document.getElementById('enroll-form');
if (enrollForm) {
    enrollForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(enrollForm);
        const selectedCourse = formData.get('course');
        alert(`You have enrolled in ${selectedCourse}!`);
        enrollForm.reset();
    });
}
