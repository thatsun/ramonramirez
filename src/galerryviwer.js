let viwer;
let viwer_image;

let imageslinks=[
    "dw/d1.jpg",
    "dw/d2.jpg",
    "dw/d3.jpg",
    "dw/d6.jpg",
    "dw/d7.jpg",
    "dw/d8.jpg",
    "dw/d9.jpg",
    "dw/d10.jpg",
    "dw/d11.jpg",
    "dw/d12.jpg",
    "dw/d13.jpg",
    "dw/d14.jpg",
    "dw/d15.jpg",
    "dw/d16.jpg",
    "dw/d17.jpg",
    "dw/d18.jpg",
    "dw/d19.jpg",
    "dw/d20.jpg",
    "dw/d21.jpg",
    "dw/d22.jpg",
    "dw/d23.jpg",
    "dw/d24.jpg",
    "dw/d25.jpg",
    "dw/d26.jpg",
    "dw/d27.jpg",
    "dw/d28.jpg",
    "dw/d29.jpg"
];
let min_imageslinks=[
    "dw/min/m1.png",
    "dw/min/m2.png",
    "dw/min/m3.png",
    "dw/min/m6.png",
    "dw/min/m7.png",
    "dw/min/m8.png",
    "dw/min/m9.png",
    "dw/min/m10.png",
    "dw/min/m11.png",
    "dw/min/m12.png",
    "dw/min/m13.png",
    "dw/min/m14.png",
    "dw/min/m15.png",
    "dw/min/m16.png",
    "dw/min/m17.png",
    "dw/min/m18.png",
    "dw/min/m19.png",
    "dw/min/m20.png",
    "dw/min/m21.png",
    "dw/min/m22.png",
    "dw/min/m23.png",
    "dw/min/m24.png",
    "dw/min/m25.png",
    "dw/min/m26.png",
    "dw/min/m27.png",
    "dw/min/m28.png",
    "dw/min/m29.png"
];
let imagesTitles=[
    "Dangerous Toys",
    "Blackrose",
    "Fistole",
    "Witches",
    "DarkKnigth",
    "Royal guard",
    "Spirit",
    "Backened Angels",
    "Nginx",
    "Engel",
    "Katherine",
    "Kurdack",
    "Zint",
    "Eliza",
    "Lina",
    "Zeth",
    "Nova",
    "Elizabeth",
    "Testament",
    "Efreet",
    "Gladiolous",
    "Nexus",
    "Blackened Mio",
    "Blackened Azura",
    "Paranormal Portrait",
    "Lilith",
    "Posesed Mio"
];
let imagescontents=[
    "Dangerous Toys",
    "Blackrose",
    "Fistole",
    "Witches",
    "DarkKnigth",
    "Royal guard",
    "Spirit",
    "Backened Angels",
    "Nginx",
    "Engel",
    "Katherine",
    "Kurdack",
    "Zint",
    "Eliza",
    "Lina",
    "Zeth",
    "Nova",
    "Elizabeth",
    "Testament",
    "Efreet",
    "Gladiolous",
    "Nexus",
    "Blackened Mio",
    "Blackened Azura",
    "Paranormal Portrait",
    "Lilith",
    "Posesed Mio"
];

let current=0;
window.onload=function(){
viwer=document.getElementById("viwer");
viwer_image=document.getElementById("viwer_image");
gallerycontainer=document.getElementById("gal");

close_button=document.getElementById("boton_close");
next_button=document.getElementById("boton_next");
prev_button=document.getElementById("boton_prev");




let cards=[];


for(let j=0;j<imageslinks.length;j++){
    
    _newcard=newcard(min_imageslinks[j],imagesTitles[j],"mainlogos/rouge2.svg",imagescontents[j],j);    
    _newcard.id="card_"+j.toString();
    cards.push(_newcard);    
    gallerycontainer.appendChild(_newcard);
    
    
}
cards.forEach(function(button, index) {
    button.addEventListener('click', function() {
        showviwerindex(index);
    });
});
next_button.addEventListener('click', function() {
    my_next();
});
prev_button.addEventListener('click', function() {
    my_prev();
});
close_button.addEventListener('click', function() {
    hideviwer();
});

}

function  newcard(imageUrl,title_text_value,iconUrl,content_text_value,_index){
    
    
    newdiv = document.createElement('div'); 
    newdiv.classList.add("card");


    
    title = document.createElement('div'); 
    title.classList.add("card_title");
    title.classList.add("blue");
    logo = document.createElement('img');
    logo.classList.add("card_icon");
    logo.src=iconUrl;
    title.appendChild(logo);    
    titletext = document.createElement('h3'); 
    titletext.innerHTML = title_text_value;
    title.appendChild(titletext);
    
    
    newdiv.appendChild(title);
    
    imageholder = document.createElement('div');
    imageholder.classList.add("cardimage_holder"); 
    cardimage = document.createElement('img');
    cardimage.classList.add("cardimage");
    cardimage.src=imageUrl;
    imageholder.appendChild(cardimage);
    newdiv.appendChild(imageholder);

    cardcontent = document.createElement('div');
    cardcontent.classList.add("card_content");
    cardcontent_text= document.createElement('p');
    cardcontent_text.innerHTML = content_text_value;
    cardcontent.appendChild(cardcontent_text);
    

    newdiv.appendChild(cardcontent);
    


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


