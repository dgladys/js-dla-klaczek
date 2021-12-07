
window.addEventListener('load', function(e) {

    this.document.querySelectorAll('.tabs .tabs-navigation-item').forEach(function(navigationLink) {
        navigationLink.addEventListener('click', function(e) {
            let currentNavlink = e.target;
            if (currentNavlink.classList.contains('js-active')) {
                return;
            }

            let activeNavlink = document.querySelector('.tabs .tabs-navigation-item.js-active');
            if (activeNavlink) {
                activeNavlink.classList.remove('js-active');
            }
            currentNavlink.classList.add('js-active');
            let currentActiveTabContent = document.querySelector('.tabs-content .tab.js-active');
            if (currentActiveTabContent) {
                currentActiveTabContent.classList.remove('js-active');
            }
            document.getElementById(currentNavlink.dataset.tabId).classList.add('js-active');
        });
    });
    
    document.querySelector('.tabs .tabs-navigation-item:nth-child(1)').click();

});