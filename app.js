var button=document.getElementById('btn');
var City=document.querySelector('.City');
var temp = document.querySelector('.temp');
var desp = document.querySelector('.desp');
var image = document.querySelector('.small');
var inputValue=document.querySelector('.inputValue');

button.addEventListener('click',function(){
    fetch('https://api.weatherbit.io/v2.0/current?city='+inputValue.value+'&key=977e14550df24f8f8043652a481c08ba')
    .then(response => response.json())
    .then(data => {
        document.querySelector(".after").style.display="block";
        var CityName=data["data"][0]["city_name"];
        var temprature=data["data"][0]["temp"];
        var icon=data["data"][0]["weather"]["icon"];
        var despdata=data["data"][0]["weather"]["description"];
    
        City.innerHTML=CityName;
        temp.innerHTML="The Temperature here is "+temprature;
        desp.innerHTML="The Weather here is "+despdata;
        image.setAttribute("src","https://www.weatherbit.io/static/img/icons/"+icon+".png");
    })
.catch(Error=>{ 
    alert("Error");
    location.reload();
});
})