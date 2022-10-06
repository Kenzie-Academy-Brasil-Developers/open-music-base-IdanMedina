const label = document.getElementById("label");
const inputPrice = document.createElement("p")
const priceFilter = document.getElementById("price");
const list = document.getElementsByName("li");
const filterBtn = document.querySelectorAll("[data-modal-control]")
const filteredItens = []
console.log(filteredItens)
label.appendChild(inputPrice);

priceFilter.addEventListener('mousemove', () => {
    inputPrice.innerText = `Até R$ ${priceFilter.value}`;
   /*   products.filter((i) => {
        let musicStyle = filterBtn[i].getAttribute("data-modal-control");
        if(i.category == musicStyle && i.price <= priceFilter.value || musicStyle == 0 && i.price <= priceFilter.value){
            return renderCard(i)
        } */
});



filterBtn.forEach((element) => {
    element.addEventListener("click", ()=>{
        ul.innerHTML = "";
        let musicStyle = element.getAttribute("data-modal-control");
        let filter = products.filter((i) => {
            if(i.category == musicStyle && i.price <= priceFilter.value || musicStyle == 0 && i.price <= priceFilter.value){
            
                return renderCard(i)
            }
        })
    })
})

const ul = document.getElementById("ul");

function renderCard(item){

    const li = document.createElement("li");
    const img = document.createElement("img");
    const divName = document.createElement("div");
    const name = document.createElement("p");
    const year = document.createElement("p");
    const title = document.createElement("h2");
    const prices = document.createElement("div");
    const price = document.createElement("p");
    const button = document.createElement("button");

    divName.classList.add("info");
    prices.classList.add("purchase");

    img.src = item.img;
    name.innerText = item.band;
    year.innerText = item.year;
    title.innerText = item.title;
    price.innerText = `R$ ${item.price.toFixed(2)}`;
    button.innerText = "Comprar";
    li.id = item.id;

    divName.append(name, year);
    prices.append(price, button);
    li.append(img, divName, title, prices);
    ul.appendChild(li)
}