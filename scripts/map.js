document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    var plateInput = document.getElementById('plate');
    var brandInput = document.getElementById('brand');
    var createCarButton = document.querySelector('#container-new-car button');
    var containerInfo = document.getElementById('container-info');

    // Event listener for the button click
    createCarButton.addEventListener('click', function () {
        // Get input values
        var plateValue = plateInput.value;
        var brandValue = brandInput.value;

        // Create a new div element
        var newCarDiv = document.createElement('div');
        newCarDiv.className = 'container-car';
        newCarDiv.textContent = 'Placa: ' + plateValue + ', Marca: ' + brandValue;

        // Append the new div to container-info
        containerInfo.appendChild(newCarDiv);

        // Clear input fields after creating the new car
        plateInput.value = '';
        brandInput.value = '';
    });
});