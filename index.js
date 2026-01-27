document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.querySelector(".main_style");
    const langBtn = document.getElementById('lang-toggle-btn');
    const translatableElements = document.querySelectorAll('[data-en][data-he]');

    let currentLang = localStorage.getItem('preferredLang') || 'en';
    let resizeTimer; 

    function renderKingCards(lang) {
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
        langData.kings.forEach((king, index) => {
            const kingCard = new KingCard(king, uiStrings);
            const cardElement = kingCard.createCardElement();
            
            if (index === 0) {
                cardElement.classList.add('first-king-card');
                const wrapper = document.createElement('div');
                wrapper.className = 'first-king-wrapper';
                wrapper.append(cardElement);
                mainDiv.append(wrapper);
            } else {
                mainDiv.append(cardElement);
            }
        });
    }

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

        translatableElements.forEach(element => {
            if (element.dataset[lang]) {
                element.textContent = element.dataset[lang];
            }
        });

        if (!document.body.classList.contains('page-tree')) {
            document.title = kingsData[lang].title;
        }

        renderKingCards(lang);
    }

    langBtn.addEventListener('click', () => {
        currentLang = (currentLang === 'en') ? 'he' : 'en';
        localStorage.setItem('preferredLang', currentLang);
        setLanguage(currentLang);
    });

    setLanguage(currentLang);

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderKingCards(currentLang);
        }, 250); 
    });
});