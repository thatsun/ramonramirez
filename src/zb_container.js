let imagescontents=[
    "Fantasy Creatures",
    "Complex Artistic pieces",
    "Alien creatures for videogames or film",
    "Renacentist sculptures",
    "Original desing",
    "Color composition Rendering",
    "silhouette Composition Shots",
    "Powerful Facial Expresions",
    "Motion Expresion",
    "Cloth",
    "Caharacter contex desing",
    "Color composition for characters",
    "Narrative desing characters techniques",
    "Just get it"
];
let textos=[
    "Fantasy creatures for rpg or film, enhance the qualty of your creature assets",
    "higly complex composition, add artistic value to your proyects",
    "Gross alien creatures for sci-fi productions",
    "Renacentis look a like scuptures for ornament or film, baked detailed textures for videogames",
    "Desing from scratch",
    "Color composition, Rendering and atmosphere solutions",
    "Powerful silhouette Composition Shots for comercial pourpouses",
    "Pieces with Powerful Facial Expresions to ensure the feeling of the piece",
    "Higly expresive motion using multiples animation teciniques to enfatize movement",
    "Higly complex clothing desing for ensure balance and expresion",
    "Character Contex Based desing",
    "Make your charaters outstand based on color and personality",
    "Increase the impact of the charaters with personality and narrative context techniques",
    "The limit is your imagination"
];

let zb_logos=[
    "toro",
    "hastelady",
    "golem",
    "catbuho",
    "twinfairies",
    "knifelady",
    "cisne",
    "fairy",
    "hastelady",
    "hada",
    "zero",
    "knifelady",
    "cisne",
    "fairy"
];
let currentcolor=0;
let side_k=0;

let colors=[    
    "gradient_orange",
    "gradient_blue",
    "gradient_pink"
];

window.onload=function(){

let zbcontainer=document.getElementById('zbcontainer');
for(let j=0;j<imagescontents.length;j++){
    
    _newcard=new_zb("/zb/zb"+j.toString()+".png",imagescontents[j],colors[currentcolor],textos[j],"/zb/logos/"+zb_logos[j]+".svg" ,side_k);        
    zbcontainer.appendChild(_newcard);
    
    currentcolor++;
    if(currentcolor==colors.length){
        currentcolor=0;

    }
    if(side_k==0){
        side_k=1;

    }else{
        side_k=0;

    }
}
}

function  new_zb(imageUrl,content_text_value,color,texto_p,logoUrl,side_kick){
    
    
    let newdiv = document.createElement('div'); 
    newdiv.classList.add("zbcard");
    

    let side1 = document.createElement('div'); 
    
    
    newdiv.appendChild(side1);

    let side2 = document.createElement('div'); 
    
    
    newdiv.appendChild(side2);    
    


    let new_image = document.createElement('img');
    new_image.classList.add("zb_image");
    new_image.src=imageUrl;
    
    let zb_text = document.createElement('h2'); 
    zb_text.innerHTML = content_text_value;

    let zb_p_text = document.createElement('p'); 
    zb_p_text.innerHTML = texto_p;
    
    let zb_logo = document.createElement('img');
    zb_logo.classList.add("zb_logo");
    zb_logo.src=logoUrl;

    



    if(side_kick==1){
        side1.classList.add("midle");
        side2.classList.add("midle_img");
        side1.classList.add(color);
        side1.appendChild(zb_logo);        
        side1.appendChild(zb_text);
        side1.appendChild(zb_p_text);
        side2.appendChild(new_image);  
        

    }else{
        side2.classList.add("midle");
        side1.classList.add("midle_img");        
        side2.classList.add(color);
        side2.appendChild(zb_logo);    
        side2.appendChild(zb_text);
        side2.appendChild(zb_p_text);
        side1.appendChild(new_image);
       

    }
    
    

    return newdiv;
}

function my_next(){
    if(current== imageslinks.length-1){
        current=0;

    }
    else{
        current++;
    }
    viwer_image.classList.add("img_hide");
    setTimeout(func, 500);
    

}
function my_prev(){
    if(current== 0){
        current=imageslinks.length-1;

    }
    else{
        current--;
    }

    
    viwer_image.classList.add("img_hide");
    setTimeout(func, 500);
    
}

function showviwerindex(ind){
    current=ind;
    viwer.style="left: 0; opacity:1";
    viwer_image.src=imageslinks[current];
    console.log("click");

}
function hideviwer(){
    
    viwer.style="left: 100%; opacity:0";

}

function func() {
    viwer_image.src=imageslinks[current];
    viwer_image.classList.remove("img_hide");
}


