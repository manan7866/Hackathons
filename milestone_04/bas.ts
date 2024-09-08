document.querySelectorAll('[contenteditable]').forEach(section => {
    section.addEventListener('input', (event) => {
        const sectionId = event.target.id;
        const updatedContent = event.target.innerHTML;
        // Save changes ki call karo
        saveChanges(sectionId, updatedContent);
    });
});

// Changes save karne ka function
function saveChanges(sectionId, content) {
    // Example: Fake saving using localStorage (server pe bhejne ki jagah)
    localStorage.setItem(sectionId, content);

    // Show success message
    const saveMessage = document.getElementById('saveMessage');
    saveMessage.style.display = 'block';
    setTimeout(() => {
        saveMessage.style.display = 'none';
    }, 2000);

    console.log(`Changes saved for section: ${sectionId}`);
}

// Load saved content from localStorage on page load
window.onload = function() {
    document.querySelectorAll('[contenteditable]').forEach(section => {
        const savedContent = localStorage.getItem(section.id);
        if (savedContent) {
            section.innerHTML = savedContent;
        }
    });
}