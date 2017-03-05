$(document).on('click', '[action-toggle-filter]', function() {
	var filterToToggle = $(this).attr('action-toggle-filter');
	QueryStringRouter.setParam('filter', filterToToggle);
});

$(document).on('click', '[action-clear-filters]', function() {
	QueryStringRouter.removeParam('filter');
});

QueryStringRouter.onParamChange('filter', function(value) {
	if (typeof value !== 'undefined') {
		$('[is-filterable]').find('[category-'+value+']').removeClass('hidden');
		$('[is-filterable]').not('[category-'+value+']').addClass('hidden');
		$('[action-toggle-filter]').removeClass('is-active');
		$('[action-clear-filters]').removeClass('is-active');
		$('[action-toggle-filter='+value+']').addClass('is-active');
	} else {
		$('[is-filterable]').removeClass('hidden');
		$('[action-toggle-filter]').removeClass('is-active');
		$('[action-clear-filters]').addClass('is-active');
	}
});

