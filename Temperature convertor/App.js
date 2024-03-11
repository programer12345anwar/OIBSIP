
function convertTemperature() {

    var scale = document.getElementById('Degree').value;
    var temperature = parseFloat(scale);

    /*==================================================
    Converting the temperature based on the selected scale
    ======================================================*/

    const option= document.querySelector('#temp');
    console.log(option.value);
    if (option.value === "Fahrenheit") {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').innerHTML = "<label for='result'>Result:</label> " + result + "°F";
    } else if (option.value === "Kelvin") {
        result = temperature + 273.15;
        document.getElementById('result').innerHTML = "<label for='result'>Result:</label> " + result + "K";
    }

}
 

 
 