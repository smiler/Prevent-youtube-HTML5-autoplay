// ==UserScript==
// @name           Youtube HTML5 stop autoplay
// @namespace      http://smiler.se/
// @description    Prevent HTML5 videos on youtube from autoplaying
// @include        http://youtube.com/watch?*
// @include        http://*.youtube.com/watch?*
// @include        http://youtube.com/watch#*
// @include        http://*.youtube.com/watch#*
// @include        http://*.youtube.com/embed/*
// @include        http://youtube.com/embed/*
// ==/UserScript==

function onLoad() {
	setTimeout(function(){
    	video = document.getElementsByTagName('video')[0];
		if (video) {
		    video.pause();
		    video.currentTime = 0;
		}
	}, 300);
}

window.addEventListener('load', onLoad, false);
