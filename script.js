
//video player button

$(function(){
	videoPlayer();
	$('[data-play-video]').on('click', function(){
		playVideo($(this));
	});
});

//	there are 3 attributes you must use:
//		data-video-parent	- mutual parent for button and video
//		data-video-button	- button which triggers function
//		data-video			- video holder (overlay what holds iframe)
function playVideo(button) {
	var parent		= button.parents('[data-video-parent]'),
		video 		= parent.find('[data-video]'),
		iframe		= video.find('iframe'),
		videoP		= video.find('video'),
		src			= iframe.attr('src'),
		srcAutoplay	= src + '?autoplay=1',
		isEmbed		= false,
		isVideo		= false;

	if(iframe.length) {
		isEmbed = true;
	} else if(videoP.length) {
		isVideo = true;
	}

	video.fadeIn("", function(){
		if(isEmbed) {
			videoRatio(iframe);
			iframe.attr('src', srcAutoplay);
			setTimeout(function(){
				iframe.show();
			}, 200);
		} else if(isVideo) {
			videoRatio(videoP);
			videoP.attr('autoplay', '');
			videoP.clone().appendTo(videoP.parent());
			videoP.remove();
			setTimeout(function(){
				video.find('video').show();
			}, 200);
		}

	});

	$('[data-video]').click(function(){
		$(this).fadeOut("", function(){
			if(isEmbed) {
				iframe.attr('src', src);
			} else if(isVideo) {
				var videoP = video.find('video');
				videoP.clone().removeAttr('autoplay').appendTo(videoP.parent());
				videoP.remove();
			}
		});
	}).children(function(){
		return false;
	});
}



function videoRatio(video) {
	var width 	= video.parent().width() * 0.8,
		height 	= width / 1.77777;

	video.width(width);
	video.height(height);
}
// plyr video player function
function videoPlayer() {
	if($('.plyr').length) {
		plyr.setup('.plyr', {
			iconUrl: 'assets/img/plyr.svg'
		});
		// var player = plyr.setup('.plyr')[0];
	}
}




function videoRatio(video) {
	var width 	= video.parent().width() * 0.8,
		height 	= width / 1.77777;

	video.width(width);
	video.height(height);
}

// validation

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
