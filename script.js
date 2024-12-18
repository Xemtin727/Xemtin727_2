document.getElementById('forma').addEventListener('submit', function(event) {
    const Name = document.getElementById('Name');
    const Number = document.getElementById("Number");
    const errorSound = document.getElementById('errorSound');
    const errorMessage = document.getElementById('errorMessage');

    errorSound.volume = 0.1;

    
    if (Name.value.trim() === '' || Name.validity.valid === false) {
        event.preventDefault(); 
        errorSound.currentTime = 0;
        errorSound.play(); 
        Name.style.border = '2px solid red'; 
        errorMessage.style.display = 'block';
    } 
    else {
        Name.style.border = ''; 
    }
    if (Number.value.trim() === '' || Number.validity.valid === false) {
        event.preventDefault(); 
        errorSound.currentTime = 0;
        errorSound.play(); 
        Number.style.border = '2px solid red'; 
        errorMessage.style.display = 'block';
    } 
    else {
        Number.style.border = ''; 
    }
});

document.getElementById('button2').addEventListener('click', function() {
    const formElement = document.getElementById('forma');
    
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
