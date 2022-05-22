const mainImage = document.getElementById("mainImage");        
    const imagesArr = Array.prototype.slice.call(document.getElementsByClassName("image"));
    const images = document.getElementsByClassName("images");
    const imagess = document.getElementById("images");

    let count = 2;
    let currentImg = imagesArr[0];
    let widthNow = 0;

    mainImage.innerHTML = imagesArr[0].innerHTML;
    imagesArr[0].querySelector("img").classList.add("active");

    function addImage(image) {
        currentImg.querySelector("img").classList.remove("active");
        image.querySelector("img").classList.add("active");
        mainImage.innerHTML = image.innerHTML;
        currentImg = image;
    
        let left = 0;
    
        for(let i = 0; i < image.parentNode.children.length; i++) {
            if(image.parentNode.children[i].querySelector("img").classList.contains("active"))
                break;
    
            left += image.parentNode.children[i].offsetWidth;
        }
    
        image.parentNode.scrollBy({
            left: left - image.parentNode.scrollLeft,
            top: 0,
            behavior: "smooth"
        });
    }

    for (const img of imagesArr) {
        img.addEventListener("click", function(event) {
            if (img != currentImg) {
                addImage(img);
                count = imagesArr.indexOf(img) + 1;
            }
        })
    }

    function change() {
        if (count >= imagesArr.length) {
            count = 1;
        }
        else {
            addImage(imagesArr[count-1]);
            ++count;
        }
    }
    
    window.onload = function () {
        setInterval(change, 5000);
    };