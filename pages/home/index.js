const label = document.getElementById("label");
const inputPrice = document.createElement("p")
const priceFilter = document.getElementById("price");
label.appendChild(inputPrice)
inputPrice.innerText = `Até R$ ${priceFilter.value}`;

const filterBtn = document.querySelectorAll("[data-modal-control]")

for(let i = 0; i < filterBtn.length; i++){
    filterBtn[i].addEventListener("click", ()=>{
        ul.innerHTML = "";
        let musicStyle = filterBtn[i].getAttribute("data-modal-control");
        products.filter((i) => {
            if(i.category == musicStyle || musicStyle == 0){
                return renderCard(i)
            }
        })
    })
}

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

    divName.append(name, year);
    prices.append(price, button);
    li.append(img, divName, title, prices);
    ul.appendChild(li)
}