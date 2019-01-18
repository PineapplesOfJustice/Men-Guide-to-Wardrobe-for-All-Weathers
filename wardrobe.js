
var shirtCold = ["Red Arrow.jpg", 
                 "Comfy Black.jpg", 
                 "Red Sweater.jpg", 
                 "Summer Shirt.jpg", 
                 "Evolution Shirt.jpg", 
                 "Red Flannel.jpg", 
                 "Rice Shirt.jpg", 
                 "Black Shirt.jpg",
                 "Christmas Shirt.jpg", ];
var shirtWarm = ["Goku Gi.jpg",
                 "Polo Shirt.png",
                 "Brown Shirt.jpg",
                 "Green Shirt.jpeg",    
                 "Star Trek.jpg", ];
var pantCold = ["Black Pant.gif", 
                "Khaki Pant.jpg", 
                "Sweat Pant.jpg",
                "Blue Jean.jpg",
                "Short Jean.jpg",
                "Ripped Jean.jpg", ];
var pantWarm = ["Yoga Pant.jpg",     
                "Beige Short.jpg",
                "Gray Short.jpg",
                "Swimming Trunk.jpg",
                "Camo Short.jpg",
                "Tuxedo Pant.jpg", ];
var shoeCold = ["Brown Boot.jpg",
                "Black Boot.jpg",
                "Brown Shoe.jpg", 
                "Blue Shoe.jpg", 
                "Snow Boot.jpg", ];
var shoeWarm = ["Brown Sandal.jpg",
                "Croc Shoe.jpeg",
                "Checkered Shoe.jpg",
                "Sport Shoe.jpg",
                "Cloth Shoe.jpg4",
                "Vans Shoe.jpg", ];
var shoeRain = ["Waterproof Shoe.jpg",
                "Yellow Plastic.jpg",
                "Brown Sport.jpg", 
                "Waterproof Boot.jpg", ];
var normalMiss = ["Red Fan.jpg",
                  "Paper Umbrella.jpg",
                  "Red Hat.jpg",
                  "Black Visor.jpg",
                  "Black Beanie.jpg",
                  "Black Sunglasses.jpg",
                  "Neon Sunglasses.jpg",
                  "Funny Disguise.jpg",
                  "Brown Mitten.jpg",                
                  "Blue Beat.jpg",
                  "Additional Sweater.jpg", 
                  "Life Vest.jpg",
                  "Striped Tie.jpg",
                  "Striped Scarves.jpg", ];
var rainMiss = ["Wearable Umbrella.jpg",
                "Portable Tent.jpg", 
                "Paper Umbrella.jpg",
                "Blue Umbrella.jpg", 
                "Dementor Cloak.jpg", ];
var snowMiss = ["Black Scarves.jpg", 
                "Black Gorro.jpg", 
                "Grey Mitten.jpg",
                "Portable Tent.jpg", ];
var windMiss = ["Helicopter Hat.jpg",
                "Gray Windbreaker.jpg",
                "Blue Beat.jpg", ];

var temperature = "";
var weather = "";
var wind = false;
var dataUpdated = false;

var shirt = "";
var pant = "";
var shoe = "";
var accesory = "";

function wardSuggester(data){
  dataUpdated = true;  
  document.getElementById("zipcode").setAttribute("placeholder", "City Name or Zipcode");
  document.getElementById("refresh").setAttribute("style", "display: block;");
  document.getElementById("outfit").innerHTML = "<br><span id='green'>City: </span>" + data.location.name + "<br>";
  document.getElementById("outfit").innerHTML += "<span id='green'>Region: </span>" + data.location.region + "<br>";
  document.getElementById("outfit").innerHTML += "<span id='green'>Country: </span>" + data.location.country + "<br>";
  document.getElementById("outfit").innerHTML +=  "<span id='green'>Temperature: </span>" + data.current.temp_f + "°F (" + data.current.temp_c + "°C)<br>";     
  document.getElementById("outfit").innerHTML += "<span id='green'>Weather: </span>" + data.current.condition.text + "<br>";  document.getElementById("outfit").innerHTML +=  "<span id='green'>Wind: </span>" + data.current.wind_mph + " mph (" + data.current.wind_kph + " kph)<br><br>";    
  updateData(data);  
  pickOutfit();
  pickBackground();  
}

function updateData(data){
    //Temperature
  if(data.current.temp_f < 70){ temperature="cold"; }
  else if(data.current.temp_f < 85){ temperature="warm"; }
  else{ temperature="hot"; } 
    //Weather
  if(data.current.condition.text.includes("Rain") || data.current.condition.text.includes("rain")){ weather="rain"; }
  else if(data.current.condition.text.includes("Snow") || data.current.condition.text.includes("snow")||data.current.condition.text.includes("Hail") || data.current.condition.text.includes("hail")){ weather="ice"; }
  else{ weather="fine"; }  
    //Wind
  if(data.current.wind_mph < 12){ wind=false; }
  else{ wind=true; } 
}

function pickBackground(){
  if(weather == "rain" && wind == true){ document.body.style.backgroundImage = "url('Images/Background/Classic Rain.jpg')"; }
  else if(weather == "ice" && wind == true){ document.body.style.backgroundImage = "url('Images/Background/Bearing Snow.jpg')"; }
  else if(weather == "rain"){ document.body.style.backgroundImage = "url('Images/Background/Slippery Rain.jpg')"; }
  else if(weather == "ice"){ document.body.style.backgroundImage = "url('Images/Background/Skiiable Snow.jpg')"; }
  else if(wind == true){ document.body.style.backgroundImage = "url('Images/Background/Hello Kansas.jpg')"; }
  else if(temperature == "cold"){ document.body.style.backgroundImage = "url('Images/Background/White Leaves.jpg')"; }
  else if(temperature == "warm"){ document.body.style.backgroundImage = "url('Images/Background/Blue Channel.jpg')"; }  
  else if(temperature == "hot"){ document.body.style.backgroundImage = "url('Images/Background/Sunnyside Beach.jpg')"; }  
  else{ document.body.style.backgroundImage = "url('Images/Background/Approaching Horizon.jpg')"; }  
}

function pickOutfit(){
  if(weather == "rain" && wind == true){
    if(Math.random() > 0.5){  accesory = windMiss[Math.floor(Math.random()*windMiss.length)]; }
    else{ accesory = rainMiss[Math.floor(Math.random()*rainMiss.length)]; }
    shoe = shoeRain[Math.floor(Math.random()*shoeRain.length)];  
  }
  else if(weather == "ice" && wind == true){
    if(Math.random() > 0.5){  accesory = windMiss[Math.floor(Math.random()*windMiss.length)]; }
    else{ accesory = snowMiss[Math.floor(Math.random()*snowMiss.length)]; }
  }
  else if(weather == "rain"){
    accesory = rainMiss[Math.floor(Math.random()*rainMiss.length)];  
    shoe = shoeRain[Math.floor(Math.random()*shoeRain.length)];
  }
  else if(weather == "ice"){
    accesory = snowMiss[Math.floor(Math.random()*snowMiss.length)];   
  }
  else if(wind == true){
    accesory = windMiss[Math.floor(Math.random()*windMiss.length)];  
  }
  if(temperature == "cold"){
    if(weather != "rain" && weather != "ice" && wind == false){ accesory = normalMiss[Math.floor(Math.random()*normalMiss.length)]; }
    shirt = shirtCold[Math.floor(Math.random()*shirtCold.length)];
    pant = pantCold[Math.floor(Math.random()*pantCold.length)];
    if(weather != "rain"){ shoe = shoeCold[Math.floor(Math.random()*shoeCold.length)]; }
  }
  else if(temperature == "warm"){
    if(weather != "rain" && weather != "ice" && wind == false){ accesory = normalMiss[Math.floor(Math.random()*normalMiss.length)]; }
    shirt = shirtWarm[Math.floor(Math.random()*shirtWarm.length)];
    pant = pantWarm[Math.floor(Math.random()*pantWarm.length)];
    if(weather != "rain"){ shoe = shoeWarm[Math.floor(Math.random()*shoeWarm.length)]; }      
  }  
  else if(temperature == "hot"){
    if(weather != "rain" && weather != "ice" && wind == false){ accesory = normalMiss[Math.floor(Math.random()*normalMiss.length)]; }
    shirt = shirtWarm[Math.floor(Math.random()*shirtWarm.length)];
    pant = pantWarm[Math.floor(Math.random()*pantWarm.length)];
    if(weather != "rain"){ shoe = shoeWarm[Math.floor(Math.random()*shoeWarm.length)]; }
  }  
  document.getElementById("dress").innerHTML = "<img src='Images/Clothing/Accessory/" + accesory + "'/>";
  document.getElementById("dress").innerHTML += "<img src='Images/Clothing/Shirt/" + shirt + "'/>";
  document.getElementById("dress").innerHTML += "<img src='Images/Clothing/Pant/" + pant + "'/>";
  document.getElementById("dress").innerHTML += "<img src='Images/Clothing/Shoe/" + shoe + "'/> <br>";   
}

function makeRequest() {
  if(Number(document.getElementById("zipcode").value) != 0){  
    var url = "https://api.apixu.com/v1/current.json?key=0ca8b464bb0e4433b9b200308182202&q=" + document.getElementById("zipcode").value;
    document.getElementById("zipcode").value = "";
    //console.log(url);    
    $.ajax({
      url: url,
      success: function(data) {
        wardSuggester(data);
      },
      error: function (){
        inputFailure();
      }
    })
  }
}

function inputFailure(){
  if(dataUpdated == false){ 
    document.getElementById("zipcode").setAttribute("placeholder", "Location not Found");
    document.getElementById("refresh").setAttribute("style", "display: none;");
    document.getElementById("outfit").innerHTML = "";
    document.getElementById("dress").innerHTML = ""; 
    temperature = "";
    weather = "";
    wind = false;
    pickBackground();  
  }  
  else{ dataUpdated = false; }   
}

document.addEventListener('keypress',hello)
function hello(event) {       
  if(event.key == "Enter"){
    makeRequest();  
  }
}

/*

var currentAddress = false;
getCurrentAddress();
checkForCurrentAddress();

function getCurrentAddress(){
  document.getElementById("zipcode").value = geoplugin_city() + " " + geoplugin_region();  
  makeRequest();  
  currentAddress = true;  
}

function checkForCurrentAddress(){
  if(currentAddress == false){
    document.getElementById("zipcode").value = "Pasadena, California";   
    makeRequest();  
  }  
}

*/
