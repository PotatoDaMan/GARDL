var form = document.getElementById('myForm');

// Add an event listener for the form's submit event
form.addEventListener('submit', function(event) {
    console.log("Form submitted");
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the input fields
    var id = form.elements['button1'].value;
    var nameoflevel = form.elements['button2'].value;
    var verifier = form.elements['button3'].value;
    var link = form.elements['button4'].value;
    var author = form.elements['button5'].value;
    var creator_one = form.elements['button6'].value;

    // Create the formData object
    var formData = {
        id: id,
        name: nameoflevel,
        author: author,
        creators: [creator_one], // Change "creators" to "creator" with an array containing one element
        verifier: verifier,
        verification: link,
        percentToQualify: 60,
        password: "Free To Copy",
        records: []
    };  

    // Manually construct the JSON string with desired formatting
    var jsonData = '{\n';
    jsonData += '    "id": "' + formData.id + '",\n';
    jsonData += '    "name": "' + formData.name + '",\n';
    jsonData += '    "author": "' + formData.author + '",\n';
    jsonData += '    "creators": ["' + formData.creators[0] + '"],\n';
    jsonData += '    "verifier": "' + formData.verifier + '",\n';
    jsonData += '    "verification": "' + formData.verification + '",\n';
    jsonData += '    "percentToQualify": ' + formData.percentToQualify + ',\n';
    jsonData += '    "password": "' + formData.password + '",\n';
    jsonData += '    "records": []';
    jsonData += '\n}';

    // Create a Blob object from the JSON data
    var blob = new Blob([jsonData], { type: 'application/json' });

    // Create a download link for the Blob
    var downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = nameoflevel + '.json';
    downloadLink.click();
});
