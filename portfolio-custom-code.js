/* Filtering elements */
$(document).on('click', '[action-toggle-filter]', function() {
	var filterToToggle = $(this).attr('action-toggle-filter');
	QueryStringRouter.setParam('filter', filterToToggle);
});

$(document).on('click', '[action-clear-filters]', function() {
	QueryStringRouter.removeParam('filter');
});

QueryStringRouter.onParamChange('filter', function(value) {
	if (typeof value !== 'undefined') {
		//$('[is-filterable]').addClass('hidden');
		setTimeout(function() {
			$('[is-filterable]').filter('[category-'+value+']').removeClass('hidden');
			$('[is-filterable]').not('[category-'+value+']').addClass('hidden');
		}, 0);
		$('[action-toggle-filter]').removeClass('is-active');
		$('[action-clear-filters]').removeClass('is-active');
		$('[action-toggle-filter='+value+']').addClass('is-active');
	} else {
		$('[is-filterable]').removeClass('hidden');
		$('[action-toggle-filter]').removeClass('is-active');
		$('[action-clear-filters]').addClass('is-active');
	}
});


//on scroll effects and playing videos when not in scroll view
$(document).ready(function() {
    var media = $('video');
    var tolerancePixel = 80;
    var elementsWithIsometricEffect =  $('[has-isometric-effect]');
    
    //pause all videos except first
    media.each(function(index, el) {
        if (index > 0) {
        	  $(this).get(0).pause();
        } else {
            $(this).get(0).play();
        }
    });
    
    //add playsinline attribute for all vidoes
    media.each(function(index, el) {
        $(this).attr('playsinline', '');
    });
    
    //fix webflow placement of video poster
    $('.screencast-video .w-background-video-poster').css('background-position', '50% 0%');

    function checkOnScrollEffects() {
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) {
                $(this).get(0).play();
                $(this).closest('.screencast-video').removeClass('is-hidden');
            } else {
                $(this).get(0).pause();
                $(this).closest('.screencast-video').addClass('is-hidden');
            }
        });
        
        elementsWithIsometricEffect.each(function(index, el) {
            var yTop = $(this).offset().top;
            var yBottom = $(this).height() + yTop;

            if (scrollTop < yBottom && scrollBottom > yTop) {
                $(this).removeClass('is-3d-isometric');
            } else {
                $(this).addClass('is-3d-isometric');
            }
        });

    }
    
    $(document).on('scroll', checkOnScrollEffects);
});
