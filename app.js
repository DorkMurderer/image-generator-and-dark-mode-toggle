const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn")
const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")
const clearImgBtnEl = document.querySelector(".btn-clear")
const btnContainerEl = document.querySelector(".btn-container")
const container = document.querySelector(".container")
const generateEl = document.querySelector('.generate')

inputEl.checked = true



updateBody()

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black"
    } else {
        bodyEl.style.background = "whitesmoke"
    }

}

inputEl.addEventListener("input", () => {
    updateBody()
})

let imageNum = 3

btnEl.addEventListener("click", () => {
       imageNum = 3
       addNewImages()
})

function addNewImages(){
     

    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img")
        newImgEl.src = `https://picsum.photos/200?random=${Math.floor(Math.random() * 2000)}`
        newImgEl.classList.add("generatedImage")
        imageContainerEl.appendChild(newImgEl)
    }
}




addNewImages()