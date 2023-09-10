let index = 0;

export function showImage(i) {
    index += i;

    const images = document.querySelectorAll('.carousel__image');

    images.forEach((image, index) => {
        if(index < 4){
            image.style.display = 'none';
        }
    })

    if(index > images.length - 1){
        index = 0;
    }
    if(index < 0){
        index = images.length - 1;
    }

    for (let i = index; i < 3; i++){
        images[i].style.display = 'block';
    }

    images[index].style.display = 'block';

    changeDots(images, index);

    const allDots = document.querySelectorAll('.carousel__dot');
    allDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            if(window.innerWidth > 980) {
                const newIndex = (index - 1 < 0) ? images.length - 3 : index - 1;

                const clickedIndex = Array.from(allDots).indexOf(dot);
                allDots.forEach((dot, i) => {
                    if (i === clickedIndex) {
                        dot.classList.add('active-dot');
                    } else {
                        dot.classList.remove('active-dot');
                    }
                });
                index = newIndex;
                
                images.forEach((image, i) => {
                    if (i < newIndex || i >= newIndex + 3) {
                        image.style.display = 'none';
                    } else {
                        image.style.display = 'block';
                    }
                });


            } else{
                images.forEach((image, index) => {
                    if(index < 4){
                        image.style.display = 'none';
                    }
                })
                allDots.forEach((dot) => {
                    dot.classList.remove('active-dot');
                })
                images[i].style.display = 'block';
                dot.classList.add('active-dot');
            }
        })
    })
}

export const changeDots = (images, index) => {
    const allDots = document.querySelectorAll('.carousel__dot');

    allDots.forEach((dot, i) => {
        dot.classList.remove('active-dot');
    })
    allDots[index].classList.add('active-dot');
}


showImage(index);


