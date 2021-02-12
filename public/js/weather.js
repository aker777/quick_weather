/*
* Fonction qui va appeler l'API de openweathermap et changer le code HTMl de la page
* */
function fetchWeather() {

    //nom de la ville entrer par l'utilisateur
    let input = document.getElementById("weather_form_city").value;
    //Variable pour la modification du code HTML
    let name =  document.getElementById("name");
    let desc =  document.getElementById("desc");
    let temp =  document.getElementById("temp");

    //suppression des espaces dans l'entrer de l'user
    input = input.replace(/\s+/g, '');

    //Appeler l'API avec l'input de l'user
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=215c92aa2e136fb81b0cc8eaaab09a4c&units=metric')
    .then(response => response.json())//recuperer le contenu en JSON
        .then(data => {
            //Recuperer les infos qui nous interesse
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let descValue = data['weather'][0]['description'];

            //Modification du code HTML
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue +"°c";
            desc.innerHTML = descValue;
        })

        //Recupere le code d'erreur envoie une alerte a l'user
        .catch(err => alert("Enter a valid city name"))

}