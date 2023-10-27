(function () {
    // JavaScript to handle menu item clicks and change the content in the viewport
    const sidebarList = document.getElementById('menu');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach((section) => {
            section.style.display = 'none';
        });

        const selectedSection = document.getElementById(sectionId);
        selectedSection.style.display = 'block';
    }

    sidebarList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);
        }
    });

    // Show the initial section
    showSection('home');
})();
