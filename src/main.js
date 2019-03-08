window.onload = function () {

};

let getDataPeru = () => {
    return WORLDBANK.PER["indicators"];
}

getDataPeru();
// console.log(getDataPeru());

let getDataChile = () => {
    return WORLDBANK.CHL["indicators"];
}
getDataChile()

let getDataMexico = () => {
    return WORLDBANK.MEX["indicators"];
}
getDataMexico()

let getDataBrazil = () => {
    return WORLDBANK.BRA["indicators"];
};
getDataBrazil()
console.log(getDataBrazil());

let getBR = WORLDBANK.BRA["indicators"];
console.log(getBR)

let mapDataBrazil = getBR.filter(({
    countryCode, countryName, data, indicatorCode, indicatorName,
}) => [`${countryName} ${data} ${indicatorName} `, countryCode - indicatorCode]);
console.log(mapDataBrazil);



let arrBr = mapDataBrazil.map(({ data, }) => [`${data}`]);
console.log(arrBr)


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

