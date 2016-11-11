angular.module('CarouselExperiment')
    .directive('mdCarousel',[function(){
       return {
           restrict: 'E',
           templateUrl:'http://geekosk.github.io/tpl/md_carousel.html',
           controller: "mdCarouselCtrl"
       }
    }]);
