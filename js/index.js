function javaedition(){
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/java-edition.jpg)';
    document.getElementById('game-header').src = './images/minecraft-header.png';
    document.getElementById('gameedition').innerHTML = 'MINECRAFT JAVA EDITION';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'none';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'block';
    document.getElementById('header6').style.display = 'block';

}
function bedrockedition(){
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/m-bg.jpg)';
    document.getElementById('game-header').src = './images/minecraft-header.png';
    document.getElementById('gameedition').innerHTML = 'MINECRAFT FOR WINDOWS';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'none';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
}
function minecraftdungeons(){
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/m-dungeons-bg.jpg)';
    document.getElementById('game-header').src = './images/minecraft-dungeons-header.png';
    document.getElementById('gameedition').innerHTML = 'MINECRAFT DEUNGEONS';
    document.getElementById('header2').style.display = 'block';
    document.getElementById('header3').style.display = 'block';
    document.getElementById('header4').style.display = 'block';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'block';
}
function minecraftlegends(){
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/m-legends-bg.jpg)';
    document.getElementById('game-header').src = './images/minecraft-legends-header.png';
    document.getElementById('gameedition').innerHTML = 'MINECRAFT LEGENDS';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'none';
    document.getElementById('header4').style.display = 'none';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'none';
}
function minecraftlive(){
    document.getElementById('game-bg').style.backgroundImage = 'url(./images/live-bg.jpg)';
    document.getElementById('game-header').src = './images/minecraft-live-header.png';
    document.getElementById('gameedition').innerHTML = 'MINECRAFT LIVE';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'none';
    document.getElementById('header4').style.display = 'none';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'none';
}

function dropdowntoggle(){
    if (document.getElementById('dropdn').style.visibility === 'hidden') {
        document.getElementById('dropdn').style.visibility = 'visible';
        document.getElementById('dropdownuparrow').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon text-white w-5 block" viewBox="0 0 512 512"><title>Chevron Up</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 328l144-144 144 144"/></svg>';
    } else {
        document.getElementById('dropdn').style.visibility = 'hidden'; 
        document.getElementById('dropdownuparrow').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  class="ionicon text-white w-5 block" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>';
    }

}
console.clear()