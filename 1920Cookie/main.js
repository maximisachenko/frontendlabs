// Save data to cookies
function saveToCookies() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Set cookies
    document.cookie = `fullName=${fullName}; path=/`;
    document.cookie = `email=${email}; path=/`;
    document.cookie = `dob=${dob}; path=/`;
    document.cookie = `birthPlace=${birthPlace}; path=/`;
    document.cookie = `hobbies=${hobbies}; path=/`;

    displayOutput("Data has been saved!");
}

// Clear cookies
function clearCookies() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    });
    displayOutput("All data has been cleared.");
}

// Display output
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <strong>${message}</strong><br>
        Full Name: ${getCookieValue('fullName')}<br>
        Email Address: ${getCookieValue('email')}<br>
        Date of Birth: ${getCookieValue('dob')}<br>
        Place of Birth: ${getCookieValue('birthPlace')}<br>
        Hobbies: ${getCookieValue('hobbies')}
    `;
}

// Get cookie value by name
function getCookieValue(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// On form submission
document.getElementById('userForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission
    saveToCookies(); // Save data to cookies
};

// On window load
window.onload = function () {
    if (getCookieValue('fullName')) {
        displayOutput("Previously saved data:");
    }
};
