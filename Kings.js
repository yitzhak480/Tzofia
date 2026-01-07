class KingCard {
    // Constructor initializes the class with specific king data and UI strings
    constructor(kingData, uiStrings) {
        // Store the king's data (name, years, etc.)
        this.kingData = kingData;
        // Store the UI strings (labels for father, prophet, etc.)
        this.uiStrings = uiStrings;
    }
    
    // Method to create the HTML element for the card
    createCardElement() {
        // Create a new div element for the card
        const kingDiv = document.createElement('div');
        // Assign the class 'king-card' to the div
        kingDiv.className = 'king-card';

        // Display name without parenthesis for Hebrew
        // Check if the current language is Hebrew
        // If Hebrew, split the name at ' (' and take the first part to remove English translation in parens
        // Otherwise, use the full name
        const displayName = document.documentElement.lang === 'he' ? this.kingData.name.split(' (')[0] : this.kingData.name;

        // Set the inner HTML of the card using a template literal
        kingDiv.innerHTML = `
            <div class="card-header">
                <!-- Display the king's name -->
                <h2 class="king-name">${displayName}</h2>
                <!-- Display the years of reign -->
                <p class="king-years">${this.kingData.years_of_reign}</p>
            </div>
            
            <div class="image-container">
                <!-- Display the king's image with lazy loading -->
                <img src="${this.kingData.image_source}" alt="Image of ${displayName}" loading="lazy">
            </div>

            <div class="details-section">
                <p class="detail-item">
                    <!-- Display the label for 'Father' -->
                    <span class="label">${this.uiStrings.father_label}</span>
                    <!-- Display the father's name -->
                    <span class="value">${this.kingData.father}</span>
                </p>
                <p class="detail-item">
                    <!-- Display the label for 'Prophet' -->
                    <span class="label">${this.uiStrings.prophet_label}</span>
                    <!-- Display the major prophet's name -->
                    <span class="value">${this.kingData.major_prophet}</span>
                </p>
            </div>
            
            <!-- Button for more info -->
            <button class="card-button">${this.uiStrings.button_text}</button>
        `;

        // Find the button *after* it has been created
        const button = kingDiv.querySelector('.card-button');

        // Add the click event listener
        button.addEventListener('click', () => {
            // Check if the current language is Hebrew
            const isHebrew = document.documentElement.lang === 'he';
            // Variable to hold the Wikipedia URL
            let wikiUrl;

            if (isHebrew) {
                // Use the Hebrew wiki name and URL encode it
                wikiUrl = `https://he.wikipedia.org/wiki/${encodeURIComponent(this.kingData.wiki_he)}`;
            } else {
                // Use the English wiki name
                wikiUrl = `https://en.wikipedia.org/wiki/${this.kingData.wiki_en}`;
            }
            
            // Open the Wikipedia URL in a new tab
            window.open(wikiUrl, '_blank');
        });

        // Return the fully constructed card element
        return kingDiv;
    }
}