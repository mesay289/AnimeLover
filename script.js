function openImage(img){
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display="flex";
    lightboxImg.src = img.src;
}

function closeImage(){
    document.getElementById("lightbox").style.display="none";
}

function searchAnime(){
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.getElementsByClassName("anime-item");

    for(let i=0;i<items.length;i++){
        let text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "block":"none";
    }
}