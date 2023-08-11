const $tacImg = $('.ev1 > .info > ul + img');
$tacImg.on('mouseover', function () {
	$tacImg.attr('src', './images/tac-2.png');
});

const $btnImg = $('.button>img');
$btnImg.eq(0).on('mouseover', function () {
	$btnImg.eq(0).attr('src', './images/btn-1.png');
});
$btnImg.eq(0).on('mouseout', function () {
	$btnImg.eq(0).attr('src', './images/btn-2.png');
});

$btnImg.eq(1).on('mouseover', function () {
	$btnImg.eq(1).attr('src', './images/btn-1.png');
});
$btnImg.eq(1).on('mouseout', function () {
	$btnImg.eq(1).attr('src', './images/btn-2.png');
});
