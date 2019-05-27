$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1585344637',
        clientId: '2d758da2492d42eea132bf2d0f9000d3',
        accessToken: '1585344637.2d758da.d9754909aa17467d829aebaa761097ff',
        resolution: 'standard_resolution',
        template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
        sortBy: 'most-recent',
        limit: 4,
        links: false
    });


    userFeed.run();    
    // This will create a single gallery from all elements that have class "gallery-item"
 //   $('.gallery').magnificPopup({
 //       type: 'image',
 //       delegate: 'a',
 //       gallery: {
 //           enabled: true
 //       }
 //   });

});