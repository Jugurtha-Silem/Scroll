
// window.addEventListener("mousemove", (e) => {
    
//     cursor.style.top = e.pageY + "px";
//     cursor.style.left = e.pageX + "px";

//     mouse1.style.top = e.pageY + "px";
//     mouse1.style.left = e.pageX + "px";

//     mouse2.style.top = e.pageY + "px";
//     mouse2.style.left = e.pageX + "px";

// });

let mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove",(e)=> {
    mouses.forEach((mouse) =>{
        mouse.style.top  = e.pageY + "px";
        mouse.style.left = e.pageX + "px";
        
    })
});


