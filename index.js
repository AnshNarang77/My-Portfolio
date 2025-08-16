let nav=document.getElementById("nav");
let btn=document.getElementById("hambtn");
let header=document.getElementById("header");
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
btn.addEventListener('click', () => {
    header.style.display="none";
    nav.style.display="block";
    document.body.style.overflow='hidden';
})


let close=document.getElementById("close")
close.addEventListener('click', () => {
    header.style.display="flex";
    nav.style.display="none";
    document.body.style.overflow='auto';
})

 b1.addEventListener('click',() => {
    nav.style.display="none";
    document.body.style.overflow='auto';
    header.style.display="flex";

 })

 b2.addEventListener('click',() => {
    nav.style.display="none";
    document.body.style.overflow='auto';
    header.style.display="flex";

 })

 b3.addEventListener('click',() => {
    nav.style.display="none";
    document.body.style.overflow='auto';
    header.style.display="flex";

 })

 b4.addEventListener('click',() => {
    nav.style.display="none";
    document.body.style.overflow='auto';
    header.style.display="flex";

 })
 
 b5.addEventListener('click',() => {
    nav.style.display="none";
    document.body.style.overflow='auto';
    header.style.display="flex";

 })
