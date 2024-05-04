const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if(height == '' || height<0 || isNaN(height))
    {
        results.innerHTML = `Please give a valid Height ${height}`;
    }
    else if(weight == '' || weight<0 || isNaN(weight))
    {
        results.innerHTML = `Please give a valid Weight ${weight}`;
    }
    else{

        const bmi = (weight/((height*height)/10000)).toFixed(2);
        let message = `<b>Your BMI is ${bmi}</b>`;

        if (bmi < 18.6) {
            message += `<br>You are Underweight!!`;
        } else if (bmi <= 24.9) {
            message += `<br>You are in Normal Range!!`;
        } else {
            message += `<br>You are Overweight!!`;
        }
        
        results.innerHTML = message;

    }

})

