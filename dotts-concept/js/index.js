function moveVieportToClickedCircle(circleElement) {
  var clickedCircleCoordinateX = $(circleElement).css('left').split('px')[0];
  var clickedCircleCoordinateY = $(circleElement).css('top').split('px')[0];
  
  var negativeX = -clickedCircleCoordinateX+'px';
  var negativeY = -clickedCircleCoordinateY+'px';

  var translate3dCssString = 'translate3d('+negativeX+','+negativeY+',0)';
  $('[js-viewport-moving]').css('transform', translate3dCssString);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function generateOneRandomCircle() {
  var circleHtml = '<div class="circle" js-clickable-circle></div>';
  var randomCoordinateX = getRandomNumber(-200, 200);
  var randomCoordinateY = getRandomNumber(-200, 200);
  var $circleToAppend = $(circleHtml);
  $circleToAppend.css({
    top: randomCoordinateX+"px",
    left: randomCoordinateY+"px",
  });
  $circleToAppend.appendTo('[js-game-layer]');
}

function destroyCircle(circleElement) {
  $(circleElement).addClass('is-destroyed');
  setTimeout(function() {
    $(circleElement).remove();
  }, 1000);
}

$(document).on('mousedown touchstart', '[js-clickable-circle]', function(event) {
  moveVieportToClickedCircle(event.target);
  destroyCircle(event.target);
  generateOneRandomCircle();
});

setInterval(function() {
  generateOneRandomCircle();
}, 1000)