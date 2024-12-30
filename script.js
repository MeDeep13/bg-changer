const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];

const bgHexCodeSpanElement=document.querySelector('#bg-hex-code');
const body=document.querySelector('body');
const btn= document.querySelector('#btn');

function randInd(){
    return Math.floor(darkColorsArr.length * Math.random());
}
btn.onclick= changeBackgroundColor;

function changeBackgroundColor(){
    const color= darkColorsArr[randInd()];

    bgHexCodeSpanElement.innerText=color;
    body.style.backgroundColor=color;
}