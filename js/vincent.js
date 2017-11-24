function draw(ev) {
    var ctx = document.getElementById('canvas').getContext('2d'),
        img = new Image(),
        f = document.getElementById("uploadimage").files[0],
        url = window.URL || window.webkitURL,
        src = url.createObjectURL(f);

    img.src = src;
    img.onload = function () {
        ctx.width = 500;
        ctx.height = 500;
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, ctx.width, ctx.height);
        url.revokeObjectURL(src);
    }
}

document.getElementById("uploadimage").addEventListener("change", draw, false)


