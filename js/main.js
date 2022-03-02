// Mandeep Sajjan
// A01237012
// MDIA 3293 Web Design Project 2

// Owl Carousel
var owl = $('.owl-carousel');
$('.owl-carousel').owlCarousel({
    autoPlay: 3000,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoHoverPause: true,
    margin: 50,
    navText: [
        '<- Prev',
        'Next ->'
    ],
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        900: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});

// Play or pause the carousal from moving sideways
$('.playButton').on('click', function() {
    owl.trigger('play.owl.autoplay', [3000]);
});
$('.stopButton').on('click', function() {
    owl.trigger('stop.owl.autoplay');
});

// pause all current music playing and then play the selected one
document.addEventListener('play', function(e) {
    var music = document.getElementsByClassName('music');
    for (var i = 0; i < music.length; i++) {
        if (music[i] != e.target) {
            music[i].pause();
        }
    }
}, true);

var music = document.getElementById("audio");
// Play and Pause Button
function playAudio() {

    if (music.paused) {
        music.play();
        audioPlayButton.className = "pauseMusic";
    } else {
        music.pause();
        audioPlayButton.className = "playMusic";
    }
}

var list = document.getElementById('songList');

// Track Selection
list.onclick = function(e) {
    e.preventDefault();

    var elm = e.target;

    var source = document.getElementById('audioSource');

    source.src = elm.getAttribute('data-track');

    music.load();

    playAudio();
}

// VOLUME

var volVal = document.getElementById("volume");

// Volume Adjustment
function setVolume(volume) {
    music.volume = volume;
}

// Volume Mute
function setVolumeNone() {
    if (music.volume > 0) {
        music.volume = 0;
        volVal.value = 0;
    } else {
        music.volume = 1;
        volVal.value = 1;
    }
}