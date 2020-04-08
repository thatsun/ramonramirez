
window.onload=function(){
   
    let lastname = localStorage.getItem("darktheme");


    if(lastname=="true"){
        let dark = document.getElementById("darktheme");
        dark.checked =true;
        filterOn();
        



    }
    else{
        
        
        
        localStorage.removeItem('darktheme');
        localStorage.setItem('darktheme','false');

    }
    

}
function filterOn(){
    
    var dark = document.getElementById("darktheme");
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    var sliderbox = document.getElementById("sliderbox");
    

    // If the checkbox is checked, display the output text

    var _filter="";

    
    

    
    
    if (dark.checked == true){
       
        _filter="invert(100%)";
        
        localStorage.removeItem('darktheme');
        localStorage.setItem('darktheme','true');

    }
    else{
        
        localStorage.removeItem('darktheme');
        localStorage.setItem('darktheme','false');
    }    
    
    header.style.filter = _filter;
    footer.style.filter = _filter;
    sliderbox.style.filter = _filter;
    

}