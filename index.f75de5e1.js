"use strict";
const link = [
    ...document.querySelectorAll(".list-item__link")
];
link.forEach((item)=>{
    const imageLink = item.getAttribute("href");
    item.parentElement.style.boxSizing = "border-box";
    item.addEventListener("click", (e)=>{
        e.preventDefault();
        const galleryImage = document.getElementById("largeImg");
        if (imageLink) galleryImage.setAttribute("src", imageLink);
    });
    item.addEventListener("mouseover", ()=>{
        item.parentElement.style.borderBottom = "1px solid black";
    });
    item.addEventListener("mouseout", ()=>{
        item.parentElement.style.borderBottom = "none";
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
