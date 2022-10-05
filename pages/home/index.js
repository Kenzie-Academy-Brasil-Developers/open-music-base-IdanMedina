const label = document.getElementById("label");
const inputPrice = document.createElement("p")
const priceFilter = document.getElementById("price");
/* const list = document.getElementsByTagName("li"); */
label.appendChild(inputPrice);
/* console.log(list) */
priceFilter.addEventListener('mousemove', () => {
    inputPrice.innerText = `Até R$ ${priceFilter.value}`;
    
    
/*     list.filter((i) => {
        if(i.price > priceFilter.value){
            i.classList.add("none")
        } else {i.classList.remove("none")}
    }) */
    
});

const filterBtn = document.querySelectorAll("[data-modal-control]")

for(let i = 0; i < filterBtn.length; i++){
    filterBtn[i].addEventListener("click", ()=>{
        ul.innerHTML = "";
        let musicStyle = filterBtn[i].getAttribute("data-modal-control");
        products.filter((i) => {
            if(i.category == musicStyle && i.price <= priceFilter.value || musicStyle == 0 && i.price <= priceFilter.value){
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