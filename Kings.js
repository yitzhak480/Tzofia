// Kings.js

class KingCard {
    constructor(kingData, uiStrings) {
        this.kingData = kingData;
        this.uiStrings = uiStrings;
    }
    
    createCardElement() {
        const kingDiv = document.createElement('div');
        kingDiv.className = 'king-card';

        // Display name without parenthesis for Hebrew
        const displayName = document.documentElement.lang === 'he' ? this.kingData.name.split(' (')[0] : this.kingData.name;

        kingDiv.innerHTML = `
            <div class="card-header">
                <h2 class="king-name">${displayName}</h2>
                <p class="king-years">${this.kingData.years_of_reign}</p>
            </div>
            
            <div class="image-container">
                <img src="${this.kingData.image_source}" alt="Image of ${displayName}" loading="lazy">
            </div>

            <div class="details-section">
                <p class="detail-item">
                    <span class="label">${this.uiStrings.father_label}</span>
                    <span class="value">${this.kingData.father}</span>
                </p>
                <p class="detail-item">
                    <span class="label">${this.uiStrings.prophet_label}</span>
                    <span class="value">${this.kingData.major_prophet}</span>
                </p>
            </div>
            
            <button class="card-button">${this.uiStrings.button_text}</button>
        `;

        // Find the button *after* it has been created
        const button = kingDiv.querySelector('.card-button');

        // Add the click event listener
        button.addEventListener('click', () => {
            const isHebrew = document.documentElement.lang === 'he';
            let wikiUrl;

            if (isHebrew) {
                // Use the Hebrew wiki name and URL encode it
                wikiUrl = `https://he.wikipedia.org/wiki/${encodeURIComponent(this.kingData.wiki_he)}`;
            } else {
                // Use the English wiki name
                wikiUrl = `https://en.wikipedia.org/wiki/${this.kingData.wiki_en}`;
            }
            
            window.open(wikiUrl, '_blank');
        });

        return kingDiv;
    }
}
