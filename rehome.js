function validateForm(event) {
    event.preventDefault();

    console.log('Validation started...');

    const animalType = document.getElementById('input_select').value;
    console.log('Animal Type:', animalType);

    const breed = document.getElementById('input-breed').value;
    console.log('Breed:', breed);

    const size = document.getElementById('input-size').value;
    console.log('Size:', size);

    const marking = document.getElementById('input-marking').value;
    console.log('Marking:', marking);

    const features = document.getElementById('input-features').value;
    console.log('Features:', features);

    const location = document.getElementById('input-location').value;
    console.log('Location:', location);

    const address = document.getElementById('input-address').value;
    console.log('Address:', address);

    const fullName = document.getElementById('input-name').value;
    console.log('Full Name:', fullName);

    const email = document.getElementById('input-email').value;
    console.log('Email:', email);

    const phoneNumber = document.getElementById('input-number').value;
    console.log('Phone Number:', phoneNumber);

    const image = document.getElementById('customFile').value;
    console.log('Image:', image);

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (animalType === '') {
        alert('Please select the type of animal.');
        return;
    }

    if (breed === '') {
        alert('Please enter the breed of the animal.');
        return;
    }

    if (isNaN(size) || size <= 0) {
        alert('Please enter a valid size/approximate weight.');
        return;
    }

    if (marking === '') {
        alert('Please enter the color/markings of the animal.');
        return;
    }

    if (features === '') {
        alert('Please provide distinctive features and characteristics of the animal.');
        return;
    }

    if (location === '') {
        alert('Please enter the location where the animal was spotted.');
        return;
    }

    if (address === '') {
        alert('Please enter specific location details.');
        return;
    }

    if (fullName === '') {
        alert('Please enter your full name.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (image === '') {
        alert('Please upload an image of the pet.');
        return;
    }

    document.getElementById('myForm').submit();
}

console.log('Script loaded.');

document.getElementById('myForm').addEventListener('submit', validateForm);
