console.log("scripts loaded")

function remove(element){
    element.parentElement.remove()
}

function hide(element){
    element.parentElement.style.display = 'none'
}

//Changes Current City below NavBar depending on user's click
function changeCity(element){
    var currentCity = document.getElementById("currentCity")

    currentCity.innerHTML = element.innerHTML
    
    var actives = document.getElementsByClassName("active")
    for(var i = 0; i < actives.length; i++){
        actives[i].classList.remove("active")
    }

    //Adds text shadow to active element
    element.classList.add("active")

    showAlert()

}

//Adds a custom Alert box to the screen
function showAlert(){
    document.getElementById("alert").style.display = 'flex'
}

//Converts All weather temperatures to Celcius or Farhrenheit
function changeTemperature(element){
    var tempList = document.querySelectorAll(".high, .low")
    console.log("temp list " + tempList)

    if(element.value == "f"){
        for(var i = 0; i<tempList.length; i++){
            var currentTemp = tempList[i].innerHTML
            console.log("currentTemp :" +currentTemp)

            //Completes the conversion
            var newTemp = Math.round(currentTemp * (9/5))+32

            //sets new temperature value
            tempList[i].innerHTML = newTemp
        }
    }else if(element.value == "c"){
        for(var i = 0; i<tempList.length; i++){
            var currentTemp = tempList[i].innerHTML
            console.log("currentTemp :" +currentTemp)

            //Completes the conversion
            var newTemp = Math.round((currentTemp - 32) * (5/9))

            //sets new temperature value
            tempList[i].innerHTML = newTemp
        }
    }
}

