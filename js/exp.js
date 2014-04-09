// Check the window width
var linrOrient,
    linrStyle;

if (screen.width >= 1000) {
    linrOrient = 'horizontal';
    linrStyle = 'css/vendor/Timelinr/horizontal.css';
} else {
    linrOrient = 'vertical';
    linrStyle = 'css/vendor/Timelinr/vertical.css';
}

//Customized Timelinr Setting   
$(function(){
    $().timelinr({        
        orientation:    linrOrient,
        issuesSpeed:    300,
        datesSpeed:     100,
        arrowKeys:      'true',
        startAt:        1,
        autoPlayPause:  5000 
    });
});

//Changing Stylesheet according to device-width    
function includeLinkStyle(url) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        document.getElementsByTagName('head')[0].appendChild(link);
}

includeLinkStyle(linrStyle);