// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .


var _run, makeVideoPlayer
$(function() {
  window.ytPlayerLoaded = false;
  makeVideoPlayer = function(video) {
    var player_wrapper;
    if (!window.ytPlayerLoaded) {
      player_wrapper = $('#player-wrapper');
      player_wrapper.append('<div id="ytPlayer"><p>Loading player...</p></div>');
      window.ytplayer = new YT.Player('ytPlayer', {
        width: '100%',
        height: player_wrapper.width() / 1.777777777,
        videoId: video,
        playerVars: {
          wmode: 'opaque',
          autoplay: 0,
          modestbranding: 1
        },
        events: {
          'onReady': function() {
            return window.ytPlayerLoaded = true;
          },
          'onError': function(errorCode) {
            return alert("We are sorry, but the following error occured: " + errorCode);
          }
        }
      });
    } else {
      window.ytplayer.loadVideoById(video);
      window.ytplayer.pauseVideo();
    }
  };
});

_run = function() {
  $('.preview').first().click();
};
google.setOnLoadCallback(_run);

$(document).ready(function(){
  $('.preview').click(function() {
    return makeVideoPlayer($(this).data('uid'));
  });
});

// $(window).bind('resize', function() {
//   var player;
//   player = $('#ytPlayer');
//   if (player.size() > 0) {
//     player.height(player.width() / 1.777777777);
//   }
// });