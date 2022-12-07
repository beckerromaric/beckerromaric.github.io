var panels = document.querySelectorAll('.panel');

var the_link;

function scroll_handler() {
    
        if(window.scrollY >= window.innerHeight) {
            document.body.classList.add('scrolled'); //Ajout de la classe scrolled -> body
        } 
        else {
            document.body.classList.remove('scrolled');
        }

        var panel_on_screen;

        panels.forEach(function(the_panel) {
            var link_panel = the_panel;

            if(window.scrollY >= the_panel.offsetTop){

                panel_on_screen = the_panel;
            }

            if(the_link){
                the_link.style.color = "";
            }
        })

        var panel_id = panel_on_screen.id;
        //console.log('panel id = ' + panel_id);

        var the_link = document.querySelector('a[href="#'+ panel_id +'"]')
        the_link.style.color = "red";
    }


    window.onscroll = scroll_handler;
    