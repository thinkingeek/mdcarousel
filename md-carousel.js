angular.module('CarouselExperiment')
    .directive('mdCarousel',[function(){
       return {
           restrict: 'E',
           templateUrl:'tpl/md_carousel.html',
           controller: "mdCarouselCtrl"
       }
    }]);
