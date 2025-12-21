let filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast:{
         value:100,
        min:0,
        max:200,
        unit:"%"
    },
    saturation:{
         value:100,
        min:0,
        max:200,
        unit:"%"
    },
    hueRotation:{
         value:0,
        min:0,
        max:360,
        unit:"deg"
    },
    blur:{
         value:0,
        min:0,
        max:20,
        unit:"px"
    },
    grayscale:{
         value:0,
        min:0,
        max:100,
        unit:"%"
    },
    sepia:{
         value:0,
        min:0,
        max:100,
        unit:"%"
    },
    opacity:{
         value:100,
        min:0,
        max:100,
        unit:"%"
    },
    invert:{
         value:0,
        min:0,
        max:100,
        unit:"%"
    },
}
const filtercontainer=document.querySelector(".filters")
const imagecanvas=document.querySelector("#image-canvas")
const imageinput=document.querySelector("#image-input")
const canvasCtx=imagecanvas.getContext("2d")
let file=null
let image=null
const reset=document.querySelector("#reset-btn")
const download=document.querySelector("#download-btn")
const presetcontainer=document.querySelector(".presets")

function createfilterElement(name,unit="%",value,min,max){
    const div=document.createElement("div");
    div.classList.add("filter")
    const input=document.createElement("input")
    input.type="range"
    input.min=min
    input.max=max
    input.value=value
    input.id=name
    const p=document.createElement("p")
    p.innerText=name
    div.appendChild(p)
    div.appendChild(input)
    input.addEventListener("input",(event)=>{
       filters[name].value=input.value
       applyfilters()
    })
    return div
}
function createfilters(){
    Object.keys(filters).forEach(key=>{
    const filterElement=createfilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
    filtercontainer.appendChild(filterElement)
})
}
createfilters()
imageinput.addEventListener("change",(event)=>{
    file=event.target.files[0]
    const imageplaceholder=document.querySelector(".placeholder-img")
    imagecanvas.style.display="block"
    imageplaceholder.style.display="none"
    const img=new Image();
    img.src=URL.createObjectURL(file)
    img.onload=()=>{
        image=img
        imagecanvas.width=img.width
        imagecanvas.height=img.height
        applyfilters()
    }
})
function applyfilters(){
    canvasCtx.clearRect(0,0, imagecanvas.width,imagecanvas.height)
    canvasCtx.filter=`
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    `
    canvasCtx.drawImage(image,0,0)
}
reset.addEventListener("click",()=>{
filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast:{
         value:100,
        min:0,
        max:200,
        unit:"%"
    },
    saturation:{
         value:100,
        min:0,
        max:200,
        unit:"%"
    },
    hueRotation:{
         value:0,
        min:0,
        max:360,
        unit:"deg"
    },
    blur:{
         value:0,
        min:0,
        max:20,
        unit:"px"
    },
    grayscale:{
         value:0,
        min:0,
        max:100,
        unit:"%"
    },
    sepia:{
         value:0,
        min:0,
        max:100,
        unit:"%"
    },
    opacity:{
         value:100,
        min:0,
        max:100,
        unit:"%"
    },
    invert:{
         value:0,
        min:0,
        max:100,
        unit:"%"
    },
}
applyfilters()
filtercontainer.innerHTML=""
createfilters()
})
download.addEventListener("click",()=>{
    const link =document.createElement("a")
    link.download="edited-image.png"
    link.href=imagecanvas.toDataURL()
    link.click()
})
const presets = {
    normal: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    drama: {
        brightness: 95,
        contrast: 140,
        saturation: 130,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 105,
        contrast: 90,
        saturation: 80,
        hueRotation: -10,
        blur: 1,
        grayscale: 20,
        sepia: 35,
        opacity: 100,
        invert: 0
    },

    cinematic: {
        brightness: 95,
        contrast: 125,
        saturation: 90,
        hueRotation: 10,
        blur: 0,
        grayscale: 10,
        sepia: 15,
        opacity: 100,
        invert: 0
    },

    bw: {
        brightness: 100,
        contrast: 120,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    warm: {
        brightness: 105,
        contrast: 110,
        saturation: 120,
        hueRotation: -15,
        blur: 0,
        grayscale: 0,
        sepia: 20,
        opacity: 100,
        invert: 0
    },

    cool: {
        brightness: 100,
        contrast: 105,
        saturation: 90,
        hueRotation: 20,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
     fade: {
        brightness: 110,
        contrast: 85,
        saturation: 90,
        hueRotation: 0,
        blur: 0,
        grayscale: 10,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    moody: {
        brightness: 90,
        contrast: 130,
        saturation: 85,
        hueRotation: -5,
        blur: 0,
        grayscale: 15,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    retro: {
        brightness: 108,
        contrast: 92,
        saturation: 85,
        hueRotation: -20,
        blur: 1,
        grayscale: 15,
        sepia: 30,
        opacity: 100,
        invert: 0
    },

    soft: {
        brightness: 110,
        contrast: 90,
        saturation: 95,
        hueRotation: 0,
        blur: 2,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    highContrast: {
        brightness: 100,
        contrast: 160,
        saturation: 110,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    washed: {
        brightness: 115,
        contrast: 80,
        saturation: 70,
        hueRotation: 0,
        blur: 0,
        grayscale: 10,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    night: {
        brightness: 85,
        contrast: 120,
        saturation: 80,
        hueRotation: 15,
        blur: 0,
        grayscale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    invertColors: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 100
    }
};
Object.keys(presets).forEach(presetName=>{
    const presetButton=document.createElement("button")
    presetButton.classList.add("btn")
    presetButton.innerText=presetName
    presetcontainer.appendChild(presetButton)

    presetButton.addEventListener("click",()=>{
        const preset=presets[presetName]
       Object.keys(preset).forEach(filterName=>{
        filters[filterName].value=preset[filterName]
       })
       applyfilters()
       filtercontainer.innerHTML=""
       createfilters()
    })
})
