var player;
var player_source;
var video_gallery;
var main_title;
var main_des;
var videourls=[
    "video_00",
    "video_01",
    "video_02",
    "video_03",
    "video_04",
    "video_05",
    "video_06",
    "video_07",
    "video_08",
    "video_09",
    "video_010",
    "video_011",
    "video_012",
    "video_013",
    "video_014",
    "video_015",
    "video_016"
];
var tumbsurls=[
    "thumb_video00",
    "thumb_video01",
    "thumb_video02",
    "thumb_video03",
    "thumb_video04",
    "thumb_video05",
    "thumb_video06",
    "thumb_video07",
    "thumb_video08",
    "thumb_video09",
    "thumb_video10",
    "thumb_video11",
    "thumb_video12",
    "thumb_video13",
    "thumb_video14",
    "thumb_video15",
    "thumb_video16"
];
var titlevideos=[
    "OB2 3D gameplay",
    "Zion demo Boss test",
    "Hack and slash demo",
    "Abandoned district",
    "Orbital Slayer 2 boss Trailer",
    "Robot mech Animation & Rig",
    "Mantis mech Animation & Rig",
    "Azura vs Ghosts demo",
    "Cracken preview",
    "Acueducts preview",
    "OB2 cronoz boss preview",
    "Orbital slayer 2 clip",
    "Sand worm preview",
    "Spectre preview",
    "Zion clip",
    "Undregroud enviroment test",
    "Angelic Layers Clip"
];
var desvideos=[
    "OB2 3D gameplay misc features",
    "Zion demo Boss test demo",
    "Hack and slash demo & other features",
    "Abandoned district enviroment test",
    "Orbital Slayer 2 boss Trailer",
    "Robot mech Animation & Rig boss preview",
    "Mantis mech Animation & Rig boss preview",
    "Azura vs Ghosts demo gameplay",
    "Cracken Boss Setup preview ",
    "Acueducts enviroment test preview",
    "OB2 cronoz boss preview setup",
    "Orbital slayer 2 clip featuring gameplay and enviroments",
    "Sand worm preview and desert enviroment preview",
    "Spectre Boss batle preview",
    "Zion clip animation demo",
    "Undregroud navigation enviroment test",
    "Angelic layers video preview"
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

    player_source.setAttribute('src', "video/base/"+videourls[0]+".mp4");

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

    _imagetumb.src="img/videotumb/"+tumburl+".jpg";


    _titlevideo.innerHTML=title;
    _desvideo.innerHTML=description;

    newvideo.appendChild(_titlevideo);
    newvideo.appendChild(_imagetumb);
    newvideo.appendChild(_desvideo);
    


    video_gallery.appendChild(newvideo);

    return newvideo;

}
function changevideo(_index){
    player_source.setAttribute('src', "video/base/"+videourls[_index]+".mp4");
    main_title.innerHTML=titlevideos[_index];
    main_des.innerHTML=desvideos[_index];
    player.load();
    


}