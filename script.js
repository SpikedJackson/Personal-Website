// mobile navigation
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const button = document.querySelector(".fixed");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}

// typing effect
function consoleText() {
    words = ['Developer', 'Student', 'Musician'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById('console-text');
    target.setAttribute('style', 'color:var(--secondary-color)')
    window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:var(--secondary-color)')
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
        } else {
            con.className = 'console-underscore'
            visible = true;
        }
    }, 400)
}

consoleText();

// scrolling effect
function handleScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= window.innerHeight) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();