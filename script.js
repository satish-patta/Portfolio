    let isDarkMode = false;

    function toggleDarkMode() {
        const body = document.body;
        const homeBtn = document.querySelector('.home-btn');
        const span = document.querySelector('.logo > span');
        
        if (isDarkMode) {
            body.classList.remove('dark-mode');
            homeBtn.innerHTML = '<i class="fas fa-home size"></i>';
            span.innerHTML = 'press home icon to enable dark mode';
        } else {
            body.classList.add('dark-mode');
            homeBtn.innerHTML = '<i class="fas fa-sun size"></i>';
            span.innerHTML = 'press home icon to enable light mode';
        }
        
        isDarkMode = !isDarkMode;
    }
