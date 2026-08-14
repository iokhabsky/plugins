window.onload = () => {

    const slider = document.querySelector(".slider");
    const wrapper = document.querySelector(".slides");
    const slides = [...document.querySelectorAll(".slide")];
    const activeNum = slides.indexOf(document.querySelector(".slide.active"));
    const buttons = document.querySelectorAll(".slide-arrow");

    const options = {
        mode: 'horizontal',
        effect: 'sideMove',
        w: slider.offsetWidth,
        h: slider.offsetHeight,
        i: activeNum
    };

    // console.log(options.w + " " + options.h);

    setSlider();
    setUI();

    function setSlider() {
        slides.forEach(slide => {
            slide.style.width = options.w + "px";
            slide.style.height = options.h + "px";
        });
    }

    function moveSlider(move) {
        switch (move) {
            case 'prev':
                if(options.i > 0) options.i--
                break;
            case 'next':
                if(options.i < slides.length - 1) options.i++            
                break;
        }
        console.log(options.i)
        wrapper.style.transform = `translateX(-${options.i * options.w}px)`;    
    }

    function setUI() {
        buttons.forEach(button => {
            button.onclick = (event) => {
                const next = event.target.classList.contains("next-slide")
                if(next) {
                    moveSlider('next')
                } else {
                    moveSlider('prev')
                }
            }
        });
    }

}