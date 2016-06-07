// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'appContent': {
        templateUrl: 'templates/home.html'
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.wines', {
    url: '/wines',
    views: {
      'appContent': {
        templateUrl: 'templates/wines.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.varietals', {
    url: '/varietals',
    views: {
      'appContent': {
        templateUrl: 'templates/varietals.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.lago', {
    url: '/lago',
    views: {
      'appContent': {
        templateUrl: 'templates/lago.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.quinta', {
    url: '/quinta',
    views: {
      'appContent': {
        templateUrl: 'templates/quinta.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/quinta.html'
      }
    }
  })

  .state('app.portal', {
    url: '/portal',
    views: {
      'appContent': {
        templateUrl: 'templates/portal.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.history', {
    url: '/history',
    views: {
      'appContent': {
        templateUrl: 'templates/history.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.pos', {
    url: '/pos',
    views: {
      'appContent': {
        templateUrl: 'templates/pos.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.regions', {
    url: '/regions',
    views: {
      'appContent': {
        templateUrl: 'templates/regions.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })

  .state('app.vineyards', {
    url: '/vineyards',
    views: {
      'appContent': {
        templateUrl: 'templates/vineyards.html',
      },
      'menuLanguage': {
        templateUrl: 'templates/usa.html'
      }
    }
  })


  // Portuguese Pages


  .state('app.casa', {
    url: '/casa',
    views: {
      'appContent': {
        templateUrl: 'templates/casa.html'
      },
      'menuLanguage': {
        templateUrl: 'templates/prt.html'
      }
    }
  })

  .state('app.histRia', {
    url: '/histRia',
    views: {
      'appContent': {
        templateUrl: 'templates/histRia.html'
      },
      'menuLanguage': {
        templateUrl: 'templates/prt.html'
      }
    }
  })

  .state('app.vinhos', {
    url: '/vinhos',
    views: {
      'appContent': {
        templateUrl: 'templates/vinhos.html'
      },
      'menuLanguage': {
        templateUrl: 'templates/prt.html'
      }
    }
  })

  .state('app.regiEs', {
    url: '/regiEs',
    views: {
      'appContent': {
        templateUrl: 'templates/regiEs.html'
      },
      'menuLanguage': {
        templateUrl: 'templates/prt.html'
      }
    }
  })

  .state('app.vineyardsPortuguese', {
    url: '/vineyardsPortuguese',
    views: {
      'appContent': {
        templateUrl: 'templates/vineyardsPortuguese.html'
      },
      'menuLanguage': {
        templateUrl: 'templates/prt.html'
      }
    }
  })

  .state('app.piontDeVenda', {
    url: '/piontDeVenda',
    views: {
      'appContent': {
        templateUrl: 'templates/piontDeVenda.html'
      },
      'menuLanguage': {
        templateUrl: 'templates/prt.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

app.controller("MediaController", function($scope, $cordovaMedia, $ionicLoading) {

    $scope.play = function(src) {
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    }

    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }

});

app.controller('AppCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicModal) {

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

})

app.controller('ImageZoom', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/gallery-zoomview.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.imageURL = function() {

  }

  $scope.openModal = function() {
    $scope.modal.show()
    $scope.imgUrl = "img/region-story/press-kit-map.jpg"
  }


});
