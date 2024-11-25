document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Stop form submission for validation

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Collect interests
    let interests = [];
    const interestElements = document.querySelectorAll('input[name="interest"]:checked');
    interestElements.forEach((element) => {
        interests.push(element.value);
    });

    const country = document.getElementById('country').value;

    // Validate name for non-empty and minimum length of 2 characters
    if (name.trim() === '' || name.length < 2) {
        alert("The name must contain at least 2 characters.");
        return;
    }

    // Regex to validate name (letters only)
    const namePattern = /^[A-Za-zÀ-ßà-ÿ¨¸]+$/;
    if (!namePattern.test(name)) {
        alert("The name can only contain letters.");
        return;
    }

    // Validate age for numeric format using RegEx
    const agePattern = /^\d+$/;
    if (!agePattern.test(age)) {
        alert("Age must be a number.");
        return;
    }

    // Validate country selection
    if (country === '') {
        alert("Please select a country.");
        return;
    }

    // Create result string for alert
    const resultText = `
        Name: ${name}\n
        Age: ${age}\n
        Gender: ${gender}\n
        Interests: ${interests.join(', ')}\n
        Country: ${country}
    `;

    // Display result in alert
    alert(resultText);

    // Display result on the HTML page
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Form Results:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Interests:</strong> ${interests.join(', ')}</p>
        <p><strong>Country:</strong> ${country}</p>
    `;
});

// Regular Expressions
document.getElementById('checkButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const regexResultDiv = document.getElementById('regexResult');
    regexResultDiv.innerHTML = ''; // Clear previous results

    // Example regex with flags
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i; // 'i' flag for case insensitivity

    // Using test()
    // Check if the input is a valid email address
    if (emailPattern.test(inputText)) {
        regexResultDiv.innerHTML += `<p>Email '${inputText}' is valid.</p>`;
    } else {
        regexResultDiv.innerHTML += `<p>Email '${inputText}' is invalid.</p>`;
    }

    // Using exec()
    // Find a phone number with an optional international code
    const phonePattern = /(\+?\d{1,3})?\s?-?(\d{10})/g;
    const phoneMatches = phonePattern.exec(inputText);
    if (phoneMatches) {
        regexResultDiv.innerHTML += `<p>Found phone: ${phoneMatches[0]}</p>`;
    } else {
        regexResultDiv.innerHTML += `<p>No phone number found.</p>`;
    }

    // Using String methods
    // split
    // Display all words separated by spaces
    const words = inputText.split(/\s+/);
    regexResultDiv.innerHTML += `<p>Words in the text: ${words.join(', ')}</p>`;

    // match
    // Display all words of length 5
    const foundWords = inputText.match(/\b\w{5}\b/g); // Find words of length 5
    regexResultDiv.innerHTML += `<p>Words with 5 characters: ${foundWords ? foundWords.join(', ') : 'None'}</p>`;

    // search
    // Find the index of the first occurrence of 'test'
    const searchIndex = inputText.search(/test/i); // Find index of 'test'
    regexResultDiv.innerHTML += `<p>Index of 'test': ${searchIndex !== -1 ? searchIndex : 'Not found'}</p>`;

    // replace
    const replacedText = inputText.replace(/bad/g, 'good'); // Replace 'bad' with 'good'
    regexResultDiv.innerHTML += `<p>Modified text: ${replacedText}</p>`;
});
