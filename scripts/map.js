document.addEventListener('DOMContentLoaded', function () {

    var plateInput = document.getElementById('plate');
    var brandInput = document.getElementById('brand');
    var createCarButton = document.querySelector('#container-new-car button');
    var containerInfo = document.getElementById('container-info');

    createCarButton.addEventListener('click', function () {

        var plateValue = plateInput.value;
        var brandValue = brandInput.value;

        var newCarDiv = document.createElement('div');
        newCarDiv.className = 'container-car';
        newCarDiv.textContent = 'Placa: ' + plateValue + ', Marca: ' + brandValue;

        containerInfo.appendChild(newCarDiv);

        plateInput.value = '';
        brandInput.value = '';
    });
});