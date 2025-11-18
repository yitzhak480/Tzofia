document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.querySelector(".main_style");
    const langBtn = document.getElementById('lang-toggle-btn');
    const translatableElements = document.querySelectorAll('[data-en][data-he]');

    // Get saved language from localStorage, or default to 'en'
    let currentLang = localStorage.getItem('preferredLang') || 'en';

    function renderKingCards(lang) {
        // Only run this code on the main page (where mainDiv is visible)
        if (!mainDiv || mainDiv.style.display === 'none') {
            return;
        }
        const langData = kingsData[lang];
        const uiStrings = {
            father_label: langData.father_label,
            prophet_label: langData.prophet_label,
            button_text: langData.button_text
        };
        mainDiv.innerHTML = '';
        langData.kings.forEach(king => {
            const kingCard = new KingCard(king, uiStrings);
            kingCard.render();
        });
    }

    function setLanguage(lang) {
        // Set the new language and direction on the <html> tag
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

        // Update the text of all translatable elements
        translatableElements.forEach(element => {
            if (element.dataset[lang]) {
                element.textContent = element.dataset[lang];
            }
        });

        // Update the page <title> from the data file
        // Only update title on the main page, not the tree page
        if (!document.body.classList.contains('page-tree')) {
            document.title = kingsData[lang].title;
        }

        // Re-render the king cards in the new language
        renderKingCards(lang);
    }

    langBtn.addEventListener('click', () => {
        currentLang = (currentLang === 'en') ? 'he' : 'en';
        // Save the new language choice to localStorage
        localStorage.setItem('preferredLang', currentLang);
        setLanguage(currentLang);
    });

    // Initial render
    setLanguage(currentLang);
});