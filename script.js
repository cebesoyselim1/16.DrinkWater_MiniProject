const totalEmpty = document.querySelector(".total-glass-empty");
const totalFilled = document.querySelector(".total-glass-fill");
const glasses = document.querySelectorAll(".glass");
const glassContainer = document.querySelector(".glass-container");
const tankEmpty = document.querySelector(".total-glass-empty");
const tankFill = document.querySelector(".total-glass-fill");

glasses.forEach((glass) => {
    glass.addEventListener("click", (e) => {
        let element;
        if(e.target.classList.contains("glass-liter")){
            element = e.target.parentElement;
        }else if(e.target.classList.contains("glass-filledPart")){
            element = e.target.parentElement;
        }else{
            element = e.target;
        }
        fillGlasses(element);
        fillTank(); 
    })
});

function fillGlasses(glass){
    clearGlasses();
    for(let i = 0; i < glassContainer.children.length; i++){
        glassContainer.children[i].classList.add("active");
        if(glassContainer.children[i] == glass){
            break;
        }
    }
}

function clearGlasses(){
    glassContainer.childNodes.forEach((glass) => {
        if(glass.nodeType == 1){
            glass.classList.remove("active");
        }
    });
}

function fillTank(){
    let activeCount = findActives();
    tankFill.style.height = (100 * (activeCount/8)) + "%";
    tankEmpty.style.height = (100 - 100 * (activeCount/8)) + "%";
    tankFill.innerHTML = `${(activeCount / 8) * 100}%`;
    tankEmpty.innerHTML = `${2 - (2 * (activeCount / 8))}L Remained`;
}

function findActives(){
    return glassContainer.querySelectorAll(".active").length;
}