var ripple = function($this, e, time, color, limit, classes, givenX, givenY, inkStick){
    var object = $this;
/*    limit = $this.data("wave-limit");
    time = $this.data('wave-time');*/
    var parent = $("<div class='ink-parent'></div>");
    var ink = $("<span class='ink'></span>");
/*    classes = $this.data("wave-class");
    color = $this.data('wave-color');*/
    if (color == undefined) {
        color = "rgba(0,0,0,0.2)";
    }
    if (time == undefined) {
        time = '500';
    }
    var transform = $this.css('transform');
    if(transform != undefined){

        parent.css({'transform':transform});

    }
    parent.css({
        width: $this.outerWidth() + 'px',
        height: $this.outerHeight() + 'px',
        'border-radius': $this.css('border-radius'),
        position: 'absolute',
        background: 'none',
        'z-index': '500000',
    });
    if (limit == undefined) {

        parent.css({
            width: $this.outerWidth() + 'px',
            height: $this.outerHeight() + 'px',
            'border-radius': $this.css('border-radius'),
            position: 'absolute',
            background: 'none',
            'z-index': '1',
            overflow: 'hidden'

        });
    }
    else if (limit.toLowerCase() == 'parent') {

        parent.css({
            width: $this.parent().outerWidth() + 'px',
            height: $this.parent().outerHeight() + 'px',
            'border-radius': $this.parent().css('border-radius'),
            position: 'absolute',
            background: 'none',
            'z-index': '1',
            overflow: 'hidden'

        });
        object = $this.parent();

    }
    else {
        parent.css({
            width: $this.outerWidth() + 'px',
            height: $this.outerHeight() + 'px',
            'border-radius': $this.css('border-radius'),
            position: 'absolute',
            background: 'none',
            'z-index': '1',
            overflow: 'hidden'

        });
    }

    switch
            (object.css('position')) {
        case 'absolute':
            parent.css({
                top: '0',
                left: '0'
            });
            break;
        case 'fixed':
            parent.css({
                top: '0',
                left: '0'
            });
            break;
        case 'relative':
            parent.css({
                top: '0',
                left: '0'
            });

            break;
        case 'static':
            parent.css({
                top: '0',
                left: '0'
            });

            break;
        default:
            parent.css({
                top: object.position().top + 'px',
                left: object.position().left + 'px'
            });
            break;

    }

    // set .ink diametr
    var d;
    var x, y;
    // get click coordinates
    if (limit == undefined) {
        d = Math.max($this.outerWidth(), $this.outerHeight());
        ink.css({ height: d, width: d, background:color });
        if(givenX == undefined){
            x = e.pageX - $this.offset().left - ink.width() / 2;
        }
        else{
            x = givenX;
        }
        if(givenY == undefined){
            y = e.pageY - $this.offset().top - ink.height() / 2;
        }
        else{
            y = givenY;
        }



    }
    else {
        d = Math.max($this.parent().outerWidth(), $this.parent().outerHeight());
        ink.css({ height: d, width: d, background:color });

        if(givenX == undefined){
            x = e.pageX - e.pageX - $this.parent().offset().left - ink.width() / 2;
        }
        else{
            x = givenX;
        }
        if(givenY == undefined){
            y = e.pageY - $this.parent().offset().top - ink.height() / 2;
        }
        else{
            y = givenY;
        }
    }



    // set .ink position and add class .animate
    ink.css({
        top: y + 'px',
        left: x + 'px'
    });
    if (classes != undefined) {
        ink.addClass(classes);
    }

    parent.append(ink);
    $this.prepend(parent);

    ink.css({
        '-webkit-animation': 'ripple-effect ' + time + 'ms cubic-bezier(.24,.47,.95,.53)',
        '-o-animation': 'ripple-effect ' + time + 'ms cubic-bezier(.24,.47,.95,.53)',
        'animation': 'ripple-effect ' + time + 'ms cubic-bezier(.24,.47,.95,.53)'
    });
    setTimeout(function(){
        ink.css({'transform':'scale(2.5)'});
    },time);
    if(inkStick == true || inkStick == undefined){
    $(document).on("mouseup", $this, function(e){
        e.preventDefault();
        ink.animate({'opacity':'0'}, time);
        setTimeout(function(){parent.remove()}, time*1.5)
    });
    $(document).on("mouseout", $this, function(e){
        e.preventDefault();
        ink.animate({'opacity':'0'}, time);
        setTimeout(function(){parent.remove()}, time*1.5)
    });
    }
    else if(inkStick == false){
        e.preventDefault();
        ink.animate({'opacity':'0'}, time);
        setTimeout(function(){parent.remove()}, time*1.5)
    }
};
