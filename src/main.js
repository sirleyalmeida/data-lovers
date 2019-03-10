window.onload = function () {

};

let getDataMexico = () => {
    return WORLDBANK.MEX["indicators"];
}
getDataMexico()

let getDataBrazil = () => {
    return WORLDBANK.BRA["indicators"];
};
getDataBrazil()
console.log("indicadores do Brasil", getDataBrazil());

let getDataPeru = () => {
    return WORLDBANK.PER["indicators"];
}
getDataPeru();
// console.log(getDataPeru());

let getDataChile = () => {
    return WORLDBANK.CHL["indicators"];
}
getDataChile()


// function showDataBrazil() {
//     let indicatorsBrazil = document.getElementById("products-div");

//     productDIv.innerHTML = `
//     ${getProducts().map((produto) => `
//      <div class="product-item">
//       <img src="${produto["product"]["images"][0]}" class="product-img" />
//       <div class="text-name">
//        <h3 class="product-name">${produto["product"]["name"]}</h3>
//       </div>
//       <div class="text-price">
//        <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString("pt-br", { minimumFractionDigits: 2, style: "currency", currency: "BRL" })}</p>
//       </div>
//      </div>
//     `).join("")}
//   `
// }

// let getBR = WORLDBANK.BRA["indicators"];
// console.log(getBR)


// let mapDataBrazil = getBR.filter(({
//     countryCode, countryName, data, indicatorCode, indicatorName,
// }) => [`${countryName} ${data} ${indicatorName} `, countryCode - indicatorCode]);
// console.log(mapDataBrazil);

// let objetoBrazil = JSON.stringify(mapDataBrazil);
// console.log(objetoBrazil)

// let teste = mapDataBrazil[109]["indicatorName"];
// console.log(teste)


// let arrBr = mapDataBrazil.map(({ data, }) => [`${data}`]);
// console.log(arrBr)

// let Brazil = JSON.parse(arrBr);
// console.log(objetoBrazil)

// let showElementsTab = (e) => {
//     let tabSelect = e.target.dataset.tabenable;
//     let jobBr = document.querySelector("#jobBr");
//     let unemployedBr = document.querySelector("#unemployedBr");
//     let educationBr = document.querySelector("#educationBr");

//     if (tabSelect === "tabJob") {
//         jobBr.style.display = "block";
//         unemployedBr.style.display = "none";
//         educationBr.style.display = "none";
//     } else if (tabSelect === "tabUnemployed") {
//         jobBr.style.display = "none";
//         unemployedBr.style.display = "block";
//         educationBr.style.display = "none";
//     } else if (tabSelect === "tabEducation") {
//         jobBr.style.display = "none";
//         unemployedBr.style.display = "none";
//         educationBr.style.display = "block";
//     }
// }

// let tagsBr = () => {
//     let jobBr = document.querySelector("#jobBr");
//     let unemployedBr = document.querySelector("#unemployedBr");
//     let educationBr = document.querySelector("#educationBr");

//     jobBr.style.display = "none";
//     unemployedBr.style.display = "none";
//     educationBr.style.display = "none";

//     let elementsTab = document.querySelectorAll(".tab");
//     for (let i in elementsTab) {
//         elementsTab[i].addEventListener("click", showElementsTab)
//     }
// };

// tagsBr();