let slideIndex=0;
slideShow();

function slideShow () {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    if ( slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(slideShow, 4000); 

}


let menulist = document.getElementById("menuList")
/*menulist.style.maxHeight="0px"*/

function mudar(x){  
    x.classList.toggle("btn");

    /*
    if(menulist.style.maxHeight="0px")
    {
        menulist.style.maxHeight="300px";
    }
    else 
    {
        menulist.style.maxHeight="0px";
    }*/
}


function myFunction(x) {
    x.classList.toggle("change");
    
}
