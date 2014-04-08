//Check the window width
var sWidth = $(window).width(),
    linrOrient,
    linrStyle;

if (sWidth >= 1024) {
    linrOrient = 'horizontal';
    linrStyle = 'css/vendor/Timelinr/horizontal.css';
} else {
    linrOrient = 'vertical';
    linrStyle = 'css/vendor/Timelinr/vertical.css';
}

//Changing Stylesheet according to device-width
function includeLinkStyle(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

includeLinkStyle(linrStyle);

//Customized Timelinr Setting   
$(function(){
    $().timelinr({
        orientation:    linrOrient,
        issuesSpeed:    300,
        datesSpeed:     100,
        arrowKeys:      'true',
        startAt:        1,
        autoPlayPause:  5000 
    })
});

