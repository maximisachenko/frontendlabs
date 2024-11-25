// Function to save data to local storage
function saveToLocalStorage() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Save data to local storage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('dob', dob);
    localStorage.setItem('birthPlace', birthPlace);
    localStorage.setItem('hobbies', hobbies);

    displayOutput("Data saved!");
}

// Function to clear local storage
function clearLocalStorage() {
    localStorage.clear();
    displayOutput("All data has been cleared.");
}

// Function to display output
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <strong>${message}</strong><br>
        Full Name: ${localStorage.getItem('fullName')}<br>
        Email Address: ${localStorage.getItem('email')}<br>
        Date of Birth: ${localStorage.getItem('dob')}<br>
        Place of Birth: ${localStorage.getItem('birthPlace')}<br>
        Hobbies: ${localStorage.getItem('hobbies')}
    `;
}

// On form submission
document.getElementById('userForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission
    saveToLocalStorage(); // Save data to local storage
};

// On window load
window.onload = function () {
    if (localStorage.getItem('fullName')) {
        displayOutput("Previously saved data:");
    }
};
