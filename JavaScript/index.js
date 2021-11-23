const API_URL = 'https://randomuser.me/api/?results=12';
const main = document.querySelector('#content');

const getInformation = async () => {
    try{
        const respuesta = await  fetch(API_URL)
        const datos = await respuesta.json();

        for(let i = 0; i<datos.results.length; i++){
            main.innerHTML += `<div class="div_users"> <img class="images" id="image" src="${datos.results[i].picture.large}" alt="">
            <p class="names" id="name"> ${datos.results[i].name.title} ${datos.results[i].name.first} ${datos.results[i].name.last}</p>
            <p class="cells" id="cell"> ${datos.results[i].cell}</p>
            <p id="email"> ${datos.results[i].email}</p> </div>`;

        };
        
    } catch(error){
        console.log(error);
    };
};

getInformation();