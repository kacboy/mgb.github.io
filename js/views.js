// https://codepen.io/xichen/pen/EbPLNg

var video_url = $('iframe').attr('src');

// video_id = new URL(video_url).pathname;
video_split = video_url.split('/');
video_id = video_split[video_split.length - 1].split('?')[0];

$.fn.digits = function(){ 
	return this.each(function(){ 
	$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
	})
}
// Reference: https://stackoverflow.com/questions/1990512/add-comma-to-numbers-every-three-digits

function getViews(videoID) {
	$.get(
		"https://www.googleapis.com/youtube/v3/videos", {
				part: 'statistics',
				id: videoID,
				key: 'AIzaSyAo4XV_Cf7vhiWC_6mQIyO6WhQeKKfeKs4'
		},
		function (data) {
				$.each(data.items, function (i, item) {
					$('.views').text(item.statistics.viewCount).digits();
				})
		}
	);
}
// Reference: https://stackoverflow.com/questions/30537560/getting-youtube-view-counts-for-several-videos-using-apiv3-jquery

// Reference: http://blog.elaine-iic.tw/2015/06/youtube-data-api-v3-key.html

getViews(video_id);