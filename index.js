document.addEventListener('DOMContentLoaded', function() {
    console.log("Helo, World!");

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isThrottled = false;

    setTimeout(function(){
        isThrottled = false;
    }, 1000);

    console.log(sections);

    document.addEventListener('mousewheel', function(event) {
        if (isThrottled) return;
        isThrottled = true;
        const direction = event.wheelDelta < 0 ? 1 : -1;

        scroll();
        
        currentSectionIndex = currentSectionIndex + direction;

        scrollToCurrentSection();
    });

    function scroll(direction){
        if (direction === 1) {
            const isLastSection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }
    }

    function scrollToCurrentSection() {
        sections[currentSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: 'start',
        })
    }
});