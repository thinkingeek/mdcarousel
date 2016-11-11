angular.module('CarouselExperiment')
    .controller('mdCarouselCtrl',["$scope", "$element", "$carousel",
        function($scope, $element, $carousel){
            $scope.slideData = $carousel.data;
            setTimeout(function(){
                $scope.index = 0;
                $scope.slides = $element.children().children('.slides').children();
                $scope.slides.parent = $element.children().children('.slides');
                $scope.slides.parent.css({'width': ($scope.slides.length*100) + '%'});
            }, 1);

            $scope.changeToIndex = function(index){
                var translateFigure = (-(index*100)/$scope.slides.length) + '%,0,0';
                $scope.slides.parent.css({'transform':'translate3d(' + translateFigure + ')'});
                $scope.index = index;
            };
            $element.on('click', '.left', function(){
                if($scope.index > 0){
                    $scope.changeToIndex($scope.index - 1);
                }

            });
            $element.on('click', '.right', function(){
                if($scope.index < ($scope.slides.length - 1)){
                    $scope.changeToIndex($scope.index + 1);
                }
            });

        }]);

