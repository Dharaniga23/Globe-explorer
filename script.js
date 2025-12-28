// ===================================
// CONSTANTS & CONFIGURATION
// ===================================
const API_BASE_URL = 'https://restcountries.com/v3.1';
const RECENT_SEARCHES_KEY = 'countrySearchHistory';
const MAX_RECENT_SEARCHES = 5;

// ===================================
// DOM ELEMENTS
// ===================================
const countryInput = document.getElementById('countryInput');
const resultDiv = document.getElementById('result');
const loadingDiv = document.getElementById('loading');
const recentSearchesDiv = document.getElementById('recentSearches');

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    loadRecentSearches();
    
    // Add Enter key support
    countryInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getCountry();
        }
    });
});

// ===================================
// MAIN SEARCH FUNCTION
// ===================================
function getCountry() {
    const country = countryInput.value.trim();

    // Validate input
    if (country === "") {
        showMessage("⚠️ Please enter a country name", "warning");
        return;
    }

    // Show loading state
    showLoading(true);
    resultDiv.innerHTML = '';

    const url = `${API_BASE_URL}/name/${country}`;

    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Country not found');
            }
            return res.json();
        })
        .then(data => {
            showLoading(false);
            displayCountryInfo(data[0]);
            saveToRecentSearches(data[0].name.common);
            countryInput.value = ''; // Clear input after successful search
        })
        .catch(error => {
            showLoading(false);
            showMessage("❌ Country not found. Please check the spelling and try again.", "error");
            console.error('Error:', error);
        });
}

// ===================================
// DISPLAY COUNTRY INFORMATION
// ===================================
function displayCountryInfo(country) {
    // Extract and format data
    const currencies = country.currencies
        ? Object.values(country.currencies)
            .map(cur => `${cur.name} (${cur.symbol || 'N/A'})`)
            .join(", ")
        : "N/A";

    const languages = country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A";

    const nativeName = country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : country.name.common;

    const mapLink = country.latlng
        ? `https://www.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}`
        : "#";

    const borders = country.borders && country.borders.length > 0
        ? country.borders.join(", ")
        : "None";

    const area = country.area
        ? country.area.toLocaleString() + " km²"
        : "N/A";

    // Create country card HTML
    resultDiv.innerHTML = `
        <div class="country-card">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.svg || country.flags.png}" alt="Flag of ${country.name.common}">

            <div class="info-grid">
                <div class="info-card">
                    <h4>Official Name</h4>
                    <p>${country.name.official}</p>
                </div>

                <div class="info-card">
                    <h4>Native Name</h4>
                    <p>${nativeName}</p>
                </div>

                <div class="info-card">
                    <h4>Capital</h4>
                    <p>${country.capital ? country.capital[0] : "N/A"}</p>
                </div>

                <div class="info-card">
                    <h4>Region</h4>
                    <p>${country.region}</p>
                </div>

                <div class="info-card">
                    <h4>Subregion</h4>
                    <p>${country.subregion || "N/A"}</p>
                </div>

                <div class="info-card">
                    <h4>Population</h4>
                    <p>${country.population.toLocaleString()}</p>
                </div>

                <div class="info-card">
                    <h4>Area</h4>
                    <p>${area}</p>
                </div>

                <div class="info-card">
                    <h4>Currencies</h4>
                    <p>${currencies}</p>
                </div>

                <div class="info-card">
                    <h4>Languages</h4>
                    <p>${languages}</p>
                </div>

                <div class="info-card">
                    <h4>Timezones</h4>
                    <p>${country.timezones.join(", ")}</p>
                </div>

                <div class="info-card">
                    <h4>Bordering Countries</h4>
                    <p>${borders}</p>
                </div>

                <div class="info-card">
                    <h4>Driving Side</h4>
                    <p>${country.car?.side ? country.car.side.charAt(0).toUpperCase() + country.car.side.slice(1) : "N/A"}</p>
                </div>
            </div>

            <a class="map-btn" href="${mapLink}" target="_blank" rel="noopener noreferrer">
                📍 View on Google Maps
            </a>
        </div>
    `;
}

// ===================================
// LOADING STATE
// ===================================
function showLoading(show) {
    if (show) {
        loadingDiv.classList.remove('hidden');
    } else {
        loadingDiv.classList.add('hidden');
    }
}

// ===================================
// SHOW MESSAGE
// ===================================
function showMessage(message, type = "info") {
    resultDiv.innerHTML = `<p class="message-${type}">${message}</p>`;
}

// ===================================
// RECENT SEARCHES - LOCAL STORAGE
// ===================================
function saveToRecentSearches(countryName) {
    let searches = getRecentSearches();
    
    // Remove if already exists (to move to front)
    searches = searches.filter(name => name.toLowerCase() !== countryName.toLowerCase());
    
    // Add to beginning
    searches.unshift(countryName);
    
    // Keep only MAX_RECENT_SEARCHES
    searches = searches.slice(0, MAX_RECENT_SEARCHES);
    
    // Save to localStorage
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches));
    
    // Update UI
    loadRecentSearches();
}

function getRecentSearches() {
    const searches = localStorage.getItem(RECENT_SEARCHES_KEY);
    return searches ? JSON.parse(searches) : [];
}

function loadRecentSearches() {
    const searches = getRecentSearches();
    
    if (searches.length === 0) {
        recentSearchesDiv.classList.add('hidden');
        return;
    }
    
    recentSearchesDiv.classList.remove('hidden');
    
    const tagsHTML = searches.map(country => 
        `<span class="recent-tag" onclick="searchFromRecent('${country}')">
            🕐 ${country}
        </span>`
    ).join('');
    
    recentSearchesDiv.innerHTML = `
        <span class="recent-label">Recent:</span>
        ${tagsHTML}
    `;
}

function searchFromRecent(countryName) {
    countryInput.value = countryName;
    getCountry();
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function formatNumber(num) {
    return num.toLocaleString();
}

// Optional: Clear recent searches (can be called from console or add a button)
function clearRecentSearches() {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
    loadRecentSearches();
}
