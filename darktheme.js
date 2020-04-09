var dark ;
var header;
var footer;
var sliderbox;
var _filter="";
window.onload=function(){
    dark = document.getElementById("darktheme");
    header = document.getElementById("header");
    footer = document.getElementById("footer");
    sliderbox = document.getElementById("sliderbox");
   
    let lastname = localStorage.getItem("darktheme");


    if(lastname=="true"){
       
        dark.checked =true;
        _filter="invert(100%)";
        
        localStorage.removeItem('darktheme');
        localStorage.setItem('darktheme','true');
        header.style.filter = _filter;
        footer.style.filter = _filter;
        sliderbox.style.filter = _filter;
        



    }
    else{
        
        
        
        localStorage.removeItem('darktheme');
        localStorage.setItem('darktheme','false');

    }
    

}
function filterOn(){  
    

    // If the checkbox is checked, display the output text

    

    _filter="";
    

    
    
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