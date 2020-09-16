AFRAME.registerComponent('videohandler', {
    init: function() {
        this.toggle = false;
        this.vidNodes = document.querySelectorAll("#video01, #video02");
        for (let i = 0; i < this.vidNodes.length; i++) {
              this.vidNodes[i].pause();
        }
    },
    tick: function() {
        if (this.el.object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                for (let i = 0; i < this.vidNodes.length; i++) {
                  this.vidNodes[i].play();
                }
            }
        } else {
            this.toggle = false;
            for (let i = 0; i < this.vidNodes.length; i++) {
              this.vidNodes[i].pause();
            }
        }
    }
});
