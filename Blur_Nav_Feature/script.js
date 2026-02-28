var nav = document.querySelector('nav')

document.body.addEventListener('wheel', function (dets) {
    // console.log(dets.deltaY);
    if (dets.deltaY < 0){
        nav.style.transform = "translateY(-100%)"
    }else{
        nav.style.transform = "translateY(0%)"

    }

})