// //selecteurs

// // let box = document.querySelector('h4').style.background = 'green';
// // const balisehtml = document.querySelector('h4');
// // console.log(balisehtml);
// // balisehtml.style.background = 'blue';


// //-----------------------------------------------------------


// //Click

// // const questionContainer = document.querySelector(".click-event");

// //     questionContainer.addEventListener('click', ()=>{
// //     questionContainer.classList.toggle("question-Click")
// // })

// const questionContainer = document.querySelector(".click-event");
// const btn1              = document.querySelector("#btn-1");
// const btn2              = document.querySelector("#btn-2")
// const response          = document.querySelector('p');


// questionContainer.addEventListener('click', ()=>{
//     questionContainer.classList.toggle("question-Click")
// })

// btn1.addEventListener('click', ()=>{
//     response.classList.add("show-response");
//     response.style.background = 'green';
// })

// btn2.addEventListener('click', ()=>{
//     response.classList.add("show-response");
//     response.style.background = 'red';
    
// })

// //----------------------------------------------------------

// //Mouse Events


// const mousemove = document.querySelector('.mousemove');

// window.addEventListener('mousemove', (e)=>{
//     mousemove.style.left = e.pageX + "px";
//     mousemove.style.top  = e.pageY + "px";
    
// });

// window.addEventListener('mousedown', ()=>{
//     mousemove.style.transform = 'scale(2) translate(-25%, -25%)';

// });
// window.addEventListener('mouseup', ()=>{
//     mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
//     mousemove.style.border    ='2px solid teal';

// });
// questionContainer.addEventListener('mouseenter',() => {
//     questionContainer.style.background = 'blue';
// });

// questionContainer.addEventListener('mouseout',() => {
//     questionContainer.style.background = 'Black';
// });

// response.addEventListener("mouseover", ()=>{
//     response.style.transform = "rotate(2deg);";
// });

// //----------------------------------------------

// //Keypress event


// const keypressContainer = document.querySelector('.keypress');
// const key               = document.getElementById("key");

// // const ring = (key) => {
// //     const audio = new audio ();
// //     audio.src = key + ".mp3";
// //     audio.play();
// // }

// document.addEventListener('keypress', (e) =>{
//     key.textContent = e.key ;
//     if(e.key === "j"){
//         keypressContainer.style.background = "pink";
//     }else if (e.key === "h"){
//         keypressContainer.style.background = "teal";

//     }else{
//         keypressContainer.style.background = "red";
//     }; 

//     // if(e.key === "z"){
//     //     ring(e.key);
//     // }

// });    

// //--------------------------------------------------

// //scroll Event

// const nav = document.querySelector("nav");

// window.addEventListener("scroll", (e) =>{
//     if(window.scrollY > 120){
//         nav.style.top = "0";
//     }else{
//         nav.style.top = "-60px";
//     }
// });

// //----------------------------------------------------

// //Form Events
// let pseudo   = "";
// let language = "";

// let inputName = document.querySelector('input[type="text"]');
// let select    = document.querySelector('select');
// let form      = document.querySelector("form");

// inputName.addEventListener ("input", (e) => {
//     pseudo = e.target.value;

// });

// select.addEventListener("input", (e) => {
//     language = e.target.value; 
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (CGV.checked){

//         document.querySelector("form > div").innerHTML = '<h3>Pseudo : ${pseudo}</h3> <h4>Language : ${language} ';
        
//     }else{
//         alert('Veuillez accepter les CGV');
//     }
// });

// //-------------------------------------------------------------------

// //load Event

 
// window.addEventListener('load',() => {
//     console.log('Document Chargé');

// }); 

// //-----------------------------------------------------


// //ForEach

// let boxes = document.querySelectorAll(".box");

// boxes.forEach( (box) =>{
//     box.addEventListener("click", (e) =>{

//         e.target.style.transform = "scale(0.4)";

//     });

// });

// //-----------------------------------------



//-----------------------------------
// Iportant
//-----------------------------------


// let monTableau = [23, 45, 4, 10, 50];

// monTableau.push(21);

// function ajouter (number){
//      monTableau.push(number);
// };

// console.log(monTableau);
// 
// console.log(monTableau.filter((number) => number >= 10 ));
// console.log(monTableau..sort((a, b) => a-b ));


