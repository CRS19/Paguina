$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1585344637', //Es el id del usurio del cual se quiere que se muestren las fotos
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '1677ed0.3b30b815079642a58665bb34a9013356', // creado en intagram.pixelunion.net
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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