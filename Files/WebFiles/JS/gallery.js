var i = 0; //Counter vars
var j = 0;
var k = 0;




let gallerys = document.getElementsByClassName('gallery');
for (i = 0; i < gallerys.length; i++) {
    gallerys[i].onmouseover = function () {
        clearInterval(imageGalleryTimer);//INDEX THE GALLERY
        console.log('in!');
    };

    gallerys[i].onmouseout = function () {
        imageGalleryTimer = setInterval(cycleGalleryImages, 4500);
        console.log('out!');
    };
};

document.body.onclick = function (clicked) {
    if (window.event) {
        e = clicked.srcElement.parentElement;
    }
    else {
        e = clicked.target.parentElement;
    }


    if (e.id && e.id.indexOf('gallery_1') == 0) {
        cycle(1, -2);
    }
    if (e.id && e.id.indexOf('gallery_2') == 0) {
        cycle(1, -1);
    }
    if (e.id && e.id.indexOf('gallery_3') == 0) {
        console.log('middleClicked!');
    }
    if (e.id && e.id.indexOf('gallery_4') == 0) {
        cycle(1, 1);
    }
    if (e.id && e.id.indexOf('gallery_5') == 0) {
        cycle(1, 2);
    }

}

function cycleGalleryImages() {
    cycle(1, 1);
}

function cycle(gallery, direction) {

    let numImages = [-1, 12];

    let galleryContainers = document.getElementsByClassName('gallery' + gallery + 'Container');

    let  count=Math.abs(direction);
    direction=direction/count;

    for (k = 0; k < count; k++) {

        for (i = 0; i < galleryContainers.length; i++) {

            if (parseInt(galleryContainers[i].id.split("_")[1]) - direction < 0
                || parseInt(galleryContainers[i].id.split("_")[1]) - direction > 6) {
                    console.log(galleryContainers[i].innerHTML)
                    galleryContainers[i].innerHTML=galleryContainers[i].innerHTML.split("_")[0] + "_" + ((parseInt(galleryContainers[(i-direction+7)%7].innerHTML.split("_")[1]) + direction + numImages[gallery]) % numImages[gallery]) + "_" + galleryContainers[i].innerHTML.split("_")[2];
                    console.log(galleryContainers[i].innerHTML)
                }

            galleryContainers[i].id = galleryContainers[i].id.split('_')[0] + '_' + ((parseInt(galleryContainers[i].id.split('_')[1]) + (7 - direction) % 7) % 7);
            //console.log(galleryContainers[i].id.split('_')[0] + '_' + ((parseInt(galleryContainers[i].id.split('_')[1]) + (7 - direction) % 7) % 7));


        }
    }
}
