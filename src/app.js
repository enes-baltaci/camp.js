console.log("Merhaba Kodlama.io");

//JS type safe degildir
let dolarBugun = 9.30;
let dolarDun = 9.20;

let student = { id: 2019510103, name: "Enes" };

{
    let dolarDun = 9.10;
}

console.log(dolarDun);

const euroDun = 11.2;

console.log(euroDun);

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"];

console.log("<ul>");
for(let i = 0; i < konutKredileri.length; i++)
{
    console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");

function save(point = 10, ogrenci)
{
    console.log(ogrenci.name + ": " + point);
}

let adr = [{"id": 1, "name": "Enes B.", "username": "Vabregas",
            "E-Mail": "vabregasbaltaci@gmail.com",
            "Address": {"Street": "Necati Molder", "Suite": "Baltaci Apt.", "City": "Istanbul", "Geo": {"lat": "-37.5453", "lng": "81.324"}}}];

console.log(adr);

save(undefined, student);

console.log(konutKredileri);

// rest
let showProducts = function (id, ...products)
{
    console.log(id);
    console.log(products);
}

//console.log(typeof showProducts);
//showProducts(10, "Elma", "Armut", "Karpuz");

//spread ayristirmak
let points = [1, 2, 3, 4, 50, 4, 60, 14];

console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC", "D", ..."EFG", "H");

//Destructuring
let populations = [10000, 20000, 30000, [40000, 100000]];
let [small, medium, high, [veryHigh, max]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(max);

function someFunction([small1], number) {
    console.log(small1);
}

someFunction(populations, 5);

let category = {id:1, name: "İçecek"};
console.log(category.id);
console.log(category["name"]);

let {id, name} = category;

console.log(id);
console.log(name);

//Redux