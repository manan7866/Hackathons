var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Display resume
    document.getElementById('output-name').textContent = "Name: ".concat(name);
    document.getElementById('output-email').textContent = "Email: ".concat(email);
    document.getElementById('output-education').textContent = education;
    document.getElementById('output-experience').textContent = experience;
    var skillsList = document.getElementById('output-skills');
    skillsList.innerHTML = ''; // Clear previous skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    // Show the generated resume
    resumeOutput.style.display = 'block';
});
