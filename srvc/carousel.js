angular.module('CarouselExperiment').service('$carousel',
    [
    function(){
        this.data = [
  {
      "id": "abc",
    "title":"Hello World",
    "subtext":"These words revolutionalised Tech Industry.",
    "background":"https://geekosk.github.io/mdCarousel/public/img/carousel-static/4.jpg"
  },
  {
      "id": "abc1",
    "title":"1:45 AM",
    "subtext":"Its the time when I created this.",
    "background":"https://geekosk.github.io/mdCarousel/public/img/carousel-static/2.jpg"
  },
  {
      "id": "abc2",
    "title":"NG Carousel",
    "subtext":"This is made by AngularJS",
    "background":"https://geekosk.github.io/mdCarousel/public/img/carousel-static/1.jpg"
  },
  {
      "id": "abc3",
    "title":"Thats it!",
    "subtext":"I just don't know What to say next...",
    "background":"https://geekosk.github.io/mdCarousel/public/img/carousel-static/3.png"
  }
]

}]);
