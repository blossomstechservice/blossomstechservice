// Centralized Navigation Component
function loadNavigation() {
    // Inject the HTML
    const navHTML = `
    <nav class="ttc-nav-container">
        <div class="ttc-nav-toggle" id="navToggle">
            <div class="ttc-nav-icon" id="navIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="ttc-nav-menu" id="navMenu">
            <a href="index.html">Home</a>
            <a href="https://blossomstechservice.github.io/blossomstechservice/index.html">BlossomTechService</a>
            <a href="embodiedcognition.html">Exploration of Embodied Cognition</a>
            <a href="mpt.html">Microplastics Analysis</a>
            <a href="hben.html">MODALITY TESTING [HBEN Analyzer]</a>
            <a href="BGremoval.html">MODALITY TESTING [BG Removal]</a>
        </div>
    </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Add the CSS styles
    const styles = `
    .ttc-nav-container {
        position: fixed; top: 20px; left: 20px; z-index: 1000;
    }
    .ttc-nav-toggle {
        width: 50px; height: 50px; background: rgba(14, 165, 233, 0.15);
        backdrop-filter: blur(10px); border-radius: 12px; display: flex;
        align-items: center; justify-content: center; cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3); transition: all 0.3s ease;
        border: 2px solid rgba(56, 189, 248, 0.3);
    }
    .ttc-nav-toggle:hover {
        background: rgba(14, 165, 233, 0.25); transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 191, 255, 0.5);
    }
    .ttc-nav-icon {
        width: 24px; height: 24px; position: relative; transition: all 0.3s ease;
    }
    .ttc-nav-icon span {
        display: block; position: absolute; height: 3px; width: 100%;
        background: #38bdf8; border-radius: 3px; opacity: 1; left: 0;
        transform: rotate(0deg); transition: all 0.3s ease;
    }
    .ttc-nav-icon span:nth-child(1) { top: 3px; }
    .ttc-nav-icon span:nth-child(2) { top: 10px; }
    .ttc-nav-icon span:nth-child(3) { top: 17px; }
    .ttc-nav-menu {
        position: absolute; top: 60px; left: 0; background: rgba(2, 0, 36, 0.95);
        backdrop-filter: blur(10px); border-radius: 12px; padding: 15px;
        min-width: 180px; box-shadow: 0 8px 30px rgba(0, 191, 255, 0.3);
        opacity: 0; visibility: hidden; transform: translateY(-10px);
        transition: all 0.3s ease; border: 2px solid rgba(56, 189, 248, 0.3);
    }
    .ttc-nav-menu.active {
        opacity: 1; visibility: visible; transform: translateY(0);
    }
    .ttc-nav-menu a {
        display: flex; align-items: center; padding: 12px 15px;
        color: #bae6fd; text-decoration: none; border-radius: 8px;
        transition: all 0.2s ease; font-weight: 500; font-size: 0.95rem;
    }
    .ttc-nav-menu a:hover {
        background: rgba(56, 189, 248, 0.2); color: #38bdf8;
        transform: translateX(5px); box-shadow: 0 2px 10px rgba(0, 191, 255, 0.2);
    }
    .ttc-nav-menu a:not(:last-child) { margin-bottom: 5px; }
    .ttc-nav-menu a::before {
        content: '▸'; margin-right: 10px; transition: all 0.2s ease; color: #38bdf8;
    }
    .ttc-nav-menu a:hover::before { margin-right: 15px; }
    .ttc-nav-icon.active span:nth-child(1) {
        top: 10px; transform: rotate(135deg);
    }
    .ttc-nav-icon.active span:nth-child(2) {
        opacity: 0; left: -60px;
    }
    .ttc-nav-icon.active span:nth-child(3) {
        top: 10px; transform: rotate(-135deg);
    }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Add the functionality
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navIcon = document.getElementById('navIcon');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navIcon.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            navIcon.classList.remove('active');
        }
    });
}

// Load when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
    loadNavigation();
}
