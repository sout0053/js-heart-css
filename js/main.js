var $header = $('header');
var $h1 = $('h1');
var $main = $('main')
var $p1 = $('main p:first-child');
var $h2 = $('h2');
var $li = $('li');
var $img = $('img');
var $firstli = $('li:first-child');
var $lastli = $('li:last-child');
var $dl = $('dl');
var $dt = $('dt');
var $lastli2 = $('li:last-child');

$header.addClass('masthead');
$h1.removeClass('big-heading');
$main.addClass('wrapper');
$p1.addClass('intro');
$h2.addClass('slug-head');
$li.addClass('slug-list');
$img.addClass('slug-img');
$firstli.addClass('slug-list-first');
$lastli.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');
$lastli2.show();
