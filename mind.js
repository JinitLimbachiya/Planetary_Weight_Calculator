// TO CALCULATE THE WEIGHT ON DIFFERENT PLANETS
// WE WILL USE THIS FORMULA...
// WEIGHT ON PLANET = WEIGHT ON EARTH * GRAVITY RATIO OF THAT PLANET
// GRAVIITY RATIO OF THAT PLANET = GRAVITY ON THAT PLANET / GRAVITY ON EARTH

const calculateWeight = (event) => {
    event.preventDefault();

    const userName = document.getElementById("name").value;
    const userWeightOnEarth = document.getElementById("weight").value;

    if(!userName || !userWeightOnEarth) {
        alert("Please enter your name and weight");
    }

    const gravityRatio = {
        Mercury : 0.38,
        Venus : 0.91,
        Earth : 1,
        Moon : 0.16,       
        Mars : 0.38,
        Jupiter : 2.34,
        Saturn : 1.06,
        Uranus : 0.92,
        Neptune : 1.19,
        Pluto : 0.06        
    }


    let title = `<div>Weight of ${userName} on different planets:</div>`;    
    document.getElementById("title").innerHTML = title;

    let weights = "";
    for(let planet in gravityRatio) {
        let planetWeight = (userWeightOnEarth * gravityRatio[planet]) . toFixed(2);  
        weights += `<div class="weightOnPlanets">Weight on ${planet}: ${planetWeight} kg</div>`;
    }

    document.getElementById("results").innerHTML = weights;
}