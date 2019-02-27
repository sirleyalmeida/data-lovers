
let showElementsTab = function(e) {
    let tabSelect = e.target.dataset.tabEnable;
    console.log(tabSelect);
    let jobBr = document.querySelector("#jobBr");
    console.log(jobBr);
    let unemployedBr = document.querySelector("#unemployedBr");
    console.log(unemployedBr);
    let educationBr = document.querySelector("#educationBr");
    console.log(educationBr);

    if (tabSelect === "tabJob") {
        jobBr.style.display = "block";
        unemployedBr.style.display = "none";
        educationBr.style.display = "none";
    } else if (tabSelect === "tabUnemployed") {
        jobBr.style.display = "none";
        unemployedBr.style.display = "block";
        educationBr.style.display = "none";
    } else if (tabSelect === "tabEducation") {
        jobBr.style.display = "none";
        unemployedBr.style.display = "none";
        educationBr.style.display = "block";
    }
}
showElementsTab()
let tagsBr = function() {
    let jobBr = document.querySelector("#jobBr");
    console.log(jobBr);
    let unemployedBr = document.querySelector("#unemployedBr");
    console.log(unemployedBr);
    let educationBr = document.querySelector("#educationBr");
    console.log(educationBr);

    jobBr.style.display = "none";
    unemployedBr.style.display = "none";
    educationBr.style.display = "none";

    let elementsTab = document.querySelectorAll(".tab");
    for (let i in elementsTab) {
        console.log(i);
        console.log( elementsTab[i]);
        elementsTab[i].addEventListener("click", showElementsTab);
    }
}

tagsBr()
