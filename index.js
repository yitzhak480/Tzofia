document.addEventListener('DOMContentLoaded', () => {
    // Select the main container where king cards will be displayed
    const mainDiv = document.querySelector(".main_style");
    // Select the button used to toggle languages
    const langBtn = document.getElementById('lang-toggle-btn');
    // Select all elements that have both English and Hebrew data attributes for translation
    const translatableElements = document.querySelectorAll('[data-en][data-he]');

    // Get saved language from localStorage, or default to 'en'
    let currentLang = localStorage.getItem('preferredLang') || 'en';
    let resizeTimer; // For debouncing the resize event

    // Function to render the cards for the kings based on the selected language
    function renderKingCards(lang) {
        // Only run this code on the main page (where mainDiv is visible)
        if (!mainDiv || mainDiv.style.display === 'none') {
            // Exit the function if we are not on the main page
            return;
        }
        // Retrieve the data specific to the selected language from the global kingsData object
        const langData = kingsData[lang];
        // Create an object containing UI strings (labels, button text) for the current language
        const uiStrings = {
            father_label: langData.father_label,
            prophet_label: langData.prophet_label,
            button_text: langData.button_text
        };
        // Clear the current content of the main container
        mainDiv.innerHTML = '';
        // Iterate over the array of kings in the language data
        langData.kings.forEach((king, index) => {
            // Create a new KingCard instance with the king's data and UI strings
            const kingCard = new KingCard(king, uiStrings);
            // Generate the HTML element for the card
            const cardElement = kingCard.createCardElement();
            
            // If it's the first card, wrap it and give it a special class
            if (index === 0) {
                // Add a specific class to the first card for styling
                cardElement.classList.add('first-king-card');
                // Create a wrapper div for the first card
                const wrapper = document.createElement('div');
                // Assign a class to the wrapper
                wrapper.className = 'first-king-wrapper';
                // Append the card element to the wrapper
                wrapper.append(cardElement);
                // Append the wrapper to the main container
                mainDiv.append(wrapper);
            } else {
                // For all other cards, append them directly to the main container
                mainDiv.append(cardElement);
            }
        });
    }

    // Function to switch the application language
    function setLanguage(lang) {
        // Set the new language and direction on the <html> tag
        document.documentElement.lang = lang;
        // Set the text direction (RTL for Hebrew, LTR for others) on the <html> tag
        document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

        // Update the text of all translatable elements
        translatableElements.forEach(element => {
            // Check if the element has a data attribute for the current language
            if (element.dataset[lang]) {
                // Update the text content of the element
                element.textContent = element.dataset[lang];
            }
        });

        // Update the page <title> from the data file
        // Only update title on the main page, not the tree page
        if (!document.body.classList.contains('page-tree')) {
            // Set the document title based on the language data
            document.title = kingsData[lang].title;
        }

        // Re-render the king cards in the new language
        renderKingCards(lang);
    }

    // Add a click event listener to the language toggle button
    langBtn.addEventListener('click', () => {
        // Toggle the current language between 'en' and 'he'
        currentLang = (currentLang === 'en') ? 'he' : 'en';
        // Save the new language choice to localStorage
        localStorage.setItem('preferredLang', currentLang);
        // Apply the new language settings
        setLanguage(currentLang);
    });

    // Initial render
    setLanguage(currentLang);

    // Re-render cards on window resize to handle responsive layout changes
    window.addEventListener('resize', () => {
        // Clear any existing timer to reset the debounce
        clearTimeout(resizeTimer);
        // Set a new timer to run the render function after 250ms
        resizeTimer = setTimeout(() => {
            // Re-render the cards with the current language
            renderKingCards(currentLang);
        }, 250); // Debounce to avoid excessive re-renders
    });
});