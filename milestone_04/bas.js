document.querySelectorAll('[contenteditable]').forEach(function (section) {
    section.addEventListener('input', function (event) {
        var sectionId = event.target.id;
        var updatedContent = event.target.innerHTML;
        // Save changes ki call karo
        saveChanges(sectionId, updatedContent);
    });
});
// Changes save karne ka function
function saveChanges(sectionId, content) {
    // Example: Fake saving using localStorage (server pe bhejne ki jagah)
    localStorage.setItem(sectionId, content);
    // Show success message
    var saveMessage = document.getElementById('saveMessage');
    saveMessage.style.display = 'block';
    setTimeout(function () {
        saveMessage.style.display = 'none';
    }, 2000);
    console.log("Changes saved for section: ".concat(sectionId));
}
// Load saved content from localStorage on page load
window.onload = function () {
    document.querySelectorAll('[contenteditable]').forEach(function (section) {
        var savedContent = localStorage.getItem(section.id);
        if (savedContent) {
            section.innerHTML = savedContent;
        }
    });
};
