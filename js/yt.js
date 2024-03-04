// https://codepen.io/scottshefler/pen/XdGbQZ
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

// $(document).ready(function() {
//   var videoId = $(".video-thumb.active").attr("data-video");
//   if (videoId) {
//     onYouTubeIframeAPIReady(videoId);
//   }
// });

// function onYouTubeIframeAPIReady(videoId) {
//   player = new YT.Player('player', {
//     height: '315',
//     width: '560',
//     autoplay: '0',
//     videoId: videoId,
//     // videoId: 'TBQhIP4kA38',
//     events: {
//       'onReady': function() {
//         $(".video-thumb").click(function() {
//           var $this = $(this);
//           if (!$this.hasClass("active")) {
//             // change cue<->load to autoplay or not
//             player.cueVideoById($this.attr("data-video"));
//                         $this.addClass("active").siblings().removeClass("active");
//           }
//         });
//       }
//     }
//   });
// }

// $(document).ready(function() {
//   var videoId = $(".video-thumb.active").attr("data-video");
//   if (videoId) {
//     onYouTubeIframeAPIReady(videoId);
//   }
// });

function onYouTubeIframeAPIReady() {
  var videoId = $(".video-thumb.active").attr("data-video");
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    autoplay: '0',
    videoId: videoId,
    events: {
      'onReady': function() {
        $(".video-thumb").click(function() {
          var $this = $(this);
          if (!$this.hasClass("active")) {
            var videoId = $this.attr("data-video");
            if (videoId) {
              player.cueVideoById(videoId);
              $this.addClass("active").siblings().removeClass("active");
            }
          }
        });
      }
    }
  });
}
