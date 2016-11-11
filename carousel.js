angular.module('CarouselExperiment').service('$carousel',
    [
    function(){
        this.data = [{
            "id": "abc",
            "title":"Hello World",
            "subtext":"Well we make the world better by fast prototyping facilities.",
            "background":"public/img/carousel-static/4.jpg"
        },
            {
                "id": "abc1",
                "title":"1:45",
                "subtext":"A range of products that would keep you awake and productive during day as well as night.",
                "background":"public/img/carousel-static/2.jpg"
            },
            {
                "id": "abc2",
                "title":"Firebase Realtime Database",
                "subtext":"A Database which you just don't need to take care of!",
                "background":"public/img/carousel-static/1.jpg"
            },
            {
                "id": "abc3",
                "title":"Microsoft Visual Studio",
                "subtext":"A debugger which loves your code...",
                "background":"public/img/carousel-static/3.png"
            }];
}]);
