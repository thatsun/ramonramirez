var player;
var player_source;
var video_gallery;
var main_title;
var main_des;
var videourls=[
    "video_0",
    "video_1",
    "video_2",
    "video_3",
    "video_4",
    "video_5",
    "video_6",
    "video_7",
    "video_8",
    "video_9",
    "video_10",
    "video_11",
    "video_12",
    "video_13",
    "video_14"
];
var tumbsurls=[
    "tumb_0",
    "tumb_1",
    "tumb_2",
    "tumb_3",
    "tumb_4",
    "tumb_5",
    "tumb_6",
    "tumb_7",
    "tumb_8",
    "tumb_9",
    "tumb_10",
    "tumb_11",
    "tumb_12",
    "tumb_13",
    "tumb_14"
];
var titlevideos=[
    "OB2 3D gameplay",
    "Angelic Layers  2D gameplay",
    "Mantis mech Animation & Rig",
    "Robot mech Animation & Rig",
    "OB2 Boss Trailer",
    "Angelic layers teaser clip",
    "Engel videogame animation & rig",
    "Hover board prototype",
    "SCI-FI Robot mecha rig",
    "Hover Board videogame",
    "Wings Rig & animation",
    "OB2 Sand worm Rig",
    "Shot to trunk prototype",
    "Witch Glaive prototype",
    "OB2 motorcicle cinematic gameplay"
];
var desvideos=[
    "Hack and slash, multiple weapons & other features",
    "2D videogame gameplay, navigation, narrative features",
    "No bipedal riging solutions, videogame compatible",
    "Rig and animation features for mech robots",
    "SCI-FI boss exhibition featuring multiple behaviours",
    "Teaser clip video featuring riging, animation & VFX solutions",
    "Full move set for Engel, featuring single rig for videogames",
    "Hover board prototipe demo and board character custom rig",
    "Robotic model featuring rig for mech from OB2",
    "Hover Borad template featuring various racing game solutions",
    "Wings model, rig & animation for videogames",
    "Featuring Sand worm model, animation and rig solutions",
    "Prototype shot to trunk featuring IA navigation and FPS shoting solutions",
    "prototype of multiplayer hack and slash solutions",
    "featuring cinematic motorcicle realtime combat mechanic"
];
var _videos=[];

window.onload= function(){

    main_title=document.getElementById("videoplayertitle");
    main_des=document.getElementById("videoplayerdes");

    video_gallery=document.getElementById("galleryvideos");
    player=document.getElementById("videoplayer");

    player_source=document.getElementById("source");

    main_title.innerHTML=titlevideos[0];
    main_des.innerHTML=desvideos[0];

    player_source.setAttribute('src', "video/"+videourls[0]+".mp4");

    player.load();

    loadvideos();

    

}
function loadvideos(){

    for( let i=0; i<videourls.length; i++){
        _newvideo= createvideo(titlevideos[i],desvideos[i],tumbsurls[i]);
        _videos.push(_newvideo); 


    }
    _videos.forEach(function(button, index) {
        button.addEventListener('click', function() {
            changevideo(index);
        });
    });


}
function createvideo(title,description,tumburl){
    let newvideo=document.createElement('a');
    newvideo.classList.add("videoitem");

    let _titlevideo=document.createElement('h3');

    let _imagetumb=document.createElement('img');
    _imagetumb.classList.add("videoicon");

    let _desvideo=document.createElement('p');

    _imagetumb.src="img/videotumb/"+tumburl+".png";


    _titlevideo.innerHTML=title;
    _desvideo.innerHTML=description;

    newvideo.appendChild(_titlevideo);
    newvideo.appendChild(_imagetumb);
    newvideo.appendChild(_desvideo);
    


    video_gallery.appendChild(newvideo);

    return newvideo;

}
function changevideo(_index){
    player_source.setAttribute('src', "video/"+videourls[_index]+".mp4");
    main_title.innerHTML=titlevideos[_index];
    main_des.innerHTML=desvideos[_index];
    player.load();
    


}