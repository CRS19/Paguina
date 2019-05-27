$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8987997106',
        clientId: '924f677fa3854436947ab4372ffa688d',
        accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',
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