const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

const main = document.getElementById("main");

const colors = {
    "food"  : "blue",
    "animal" : "green",
    "beverage" : "red",
};  

// COLORIAMO LE ICONE PER TIPO
const iconsColored = icons.map(
    (elm) => {
        return {
            ...elm,
            color : colors[elm.category]
        };
    } 
    );
  
// FUNZIONE PRINT-ICONS
const printIcons = (arr, id) => {
    for(let i = 0; i < arr.length; i++){

        const {name, family, prefix, color} = arr[i];
    
        id.innerHTML += 
        `<div id="card-id" class="card">
            <i class="${family} ${prefix}${name}" style="color:${color}"></i>
            <h3>${name}</h3>
        </div>`;
    }
}





// PROGRAMMA PRINCIPALE
printIcons(iconsColored, main);

console.log(iconsColored, icons);

const categories = [];
iconsColored.forEach(
    (element) => {
        // se non è presente pushalo dentro
        if (!categories.includes(element.category)) {
            categories.push(element.category);
            document.getElementById("categories").innerHTML += `
            <option value="${element.category}">${element.category}</option>`
        } 
    }
);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone