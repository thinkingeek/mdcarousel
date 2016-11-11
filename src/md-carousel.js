$(document).on('click', '.carousel-control-box a.left', function(e){
    var $this = $(this);
    $(this).addClass('clicked');
    var arrowElement = $(this).children('i');
    ripple($this.parent(), e, 600, 'rgba(255, 255, 255, 0.15)', undefined, undefined, undefined, undefined, false);

    setTimeout(function(){
        $this.removeClass('clicked');
    }, 900);

});
$(document).on('click', '.carousel-control-box a.right', function(e){
    var $this = $(this);
    $(this).addClass('clicked');
    var arrowElement = $(this).children('i');
    ripple($this.parent(), e, 600, 'rgba(255, 255, 255, 0.15)', undefined, undefined, $this.offset().left/2, undefined, false);
    setTimeout(function(){
        $this.removeClass('clicked');
    }, 900);

});
