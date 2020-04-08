
window.onload=function(){
    let x=document.cookie;
    if(x.includes("darktheme=true")){
        let dark = document.getElementById("darktheme");
        dark.checked =true;
        filterOn();


    }
    else{
        let d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "darktheme=false;"+expires;

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
        
        let d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "darktheme=true;"+expires;
    }
    else{
        
        let d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "darktheme=false;"+expires;
    }    
    
    header.style.filter = _filter;
    footer.style.filter = _filter;
    sliderbox.style.filter = _filter;
    

}