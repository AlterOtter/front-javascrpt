var imageViewer = {
    init: function() {
        var Interval = null;
        var SlideShow = false;
        $(function() {

            //=====================================

            var index = Math.floor(Math.random() * this.images.length);
            $(".image-viewer img").attr({
                alt: this.images[index].name,
                src: "images/" + this.images[index].file
            });


            //=====================================

            $("#btn-change").click(function() {

                var index = Math.floor(Math.random() * this.images.length);
                $(".image-viewer img").attr({
                    alt: this.images[index].name,
                    src: "images/" + this.images[index].file
                });
            }.bind(this));

            //===================


            $("#btn-slideshow").click(function() {
                if (SlideShow) {
                    SlideShow = false;
                    console.log(Interval);
                    $("#btn-slideshow").text("슬라이드 시작");
                    clearInterval(Interval);
                } else {
                    SlideShow = true;
                    $("#btn-slideshow").text("슬라이드 정지");
                    Interval = setInterval(() => {
                        var index = Math.floor(Math.random() * this.images.length);
                        $(".image-viewer img").attr({
                            alt: this.images[index].name,
                            src: "images/" + this.images[index].file
                        });
                    }, 3000);
                }

            }.bind(this));



            //======================


        }.bind(this));
    },
    images: [{
            name: "국화",
            file: "Chrysanthemum.jpg"
        },
        {
            name: "사막",
            file: "Desert.jpg"
        },
        {
            name: "수국",
            file: "Hydrangeas.jpg"
        },
        {
            name: "해파리",
            file: "Jellyfish.jpg"
        },
        {
            name: "코알라",
            file: "Koala.jpg"
        },
        {
            name: "등대",
            file: "Lighthouse.jpg"
        },
        {
            name: "펭귄",
            file: "Penguins.jpg"
        },
        {
            name: "툴립",
            file: "Tulips.jpg"
        }
    ]
}