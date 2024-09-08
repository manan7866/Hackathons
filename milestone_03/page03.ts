const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form data
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLTextAreaElement).value;
      const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

      // Display resume
      (document.getElementById('output-name') as HTMLElement).textContent = `Name: ${name}`;
      (document.getElementById('output-email') as HTMLElement).textContent = `Email: ${email}`;
      (document.getElementById('output-education') as HTMLElement).textContent = education;
      (document.getElementById('output-experience') as HTMLElement).textContent = experience;

      const skillsList = document.getElementById('output-skills') as HTMLElement;
      skillsList.innerHTML = ''; // Clear previous skills

      skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
      });

      // Show the generated resume
      resumeOutput.style.display = 'block';
    });