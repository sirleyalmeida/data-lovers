
// let showElementsTab = (e) => {
//     let tabSelect = e.target.dataset.tabenable;
//     let jobBr = document.querySelector("#jobBr");
//     let unemployedBr = document.querySelector("#unemployedBr");
//     let educationBr = document.querySelector("#educationBr");
//     let jobMex = document.querySelector("#jobMex");
//     let unemployedMex = document.querySelector("#unemployedMex");
//     let educationMex = document.querySelector("#educationMex");
//     let jobCl = document.querySelector("#jobCl");
//     let unemployedCl = document.querySelector("#unemployedCl");
//     let educationCl = document.querySelector("#educationCl");
//     let jobPe = document.querySelector("#jobPe");
//     let unemployedPe = document.querySelector("#unemployedPe");
//     let educationPe = document.querySelector("#educationPe");

//     if (tabSelect === "tabJob") {
//         jobBr.style.display = "block";
//         jobMex.style.display = "block";
//         jobCl.style.display = "block";
//         jobPe.style.display = "block";
//         unemployedBr.style.display = "none";
//         unemployedMex.style.display = "none";
//         unemployedCl.style.display = "none";
//         unemployedPe.style.display = "none";
//         educationBr.style.display = "none";
//         educationMex.style.display = "none";
//         educationCl.style.display = "none";
//         educationPe.style.display = "none";
//     } else if (tabSelect === "tabUnemployed") {
//         jobBr.style.display = "none";
//         jobMex.style.display = "none";
//         jobCl.style.display = "none";
//         jobPe.style.display = "none";
//         unemployedBr.style.display = "block";
//         unemployedMex.style.display = "block";
//         unemployedCl.style.display = "block";
//         unemployedPe.style.display = "block";
//         educationBr.style.display = "none";
//         educationMex.style.display = "none";
//         educationCl.style.display = "none";
//         educationPe.style.display = "none";
//     } else if (tabSelect === "tabEducation") {
//         jobBr.style.display = "none";
//         jobMex.style.display = "none";
//         jobCl.style.display = "none";
//         jobPe.style.display = "none";
//         unemployedBr.style.display = "none";
//         unemployedMex.style.display = "none";
//         unemployedCl.style.display = "none";
//         unemployedPe.style.display = "none";
//         educationBr.style.display = "block";
//         educationMex.style.display = "block";
//         educationCl.style.display = "block";
//         educationPe.style.display = "block";
//     }
// }

let showElementsTab = (e) => {
    let tabSelect = e.target.dataset.tabenable;
    let jobBr = document.querySelector("#jobBr");
    let unemployedBr = document.querySelector("#unemployedBr");
    let educationBr = document.querySelector("#educationBr");

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

let tagsBr = () => {
    let jobBr = document.querySelector("#jobBr");
    let unemployedBr = document.querySelector("#unemployedBr");
    let educationBr = document.querySelector("#educationBr");

    jobBr.style.display = "none";
    unemployedBr.style.display = "none";
    educationBr.style.display = "none";

    let elementsTab = document.querySelectorAll(".tab");
    for (let i in elementsTab) {
        elementsTab[i].addEventListener("click", showElementsTab)
    }
};

tagsBr();

