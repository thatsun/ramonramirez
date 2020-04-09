

let modalisshown=0;
function scrolltodesired(target){
    document.getElementById(target).scrollIntoView({ 
        behavior: 'smooth' 
    });
    document.getElementById("modal").classList.remove("modalshow");
    modalisshown=0;

}
function openmodal(){

    if(modalisshown==0){
        document.getElementById("modal").classList.add("modalshow");
        modalisshown=1;

    }
    else{
        document.getElementById("modal").classList.remove("modalshow");
        modalisshown=0;

    }
    
}