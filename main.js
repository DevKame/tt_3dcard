"use strict";

const card = document.getElementById("card");

card.addEventListener("mousemove", set_rotation);
card.addEventListener("mouseleave", reset_rotation);

function set_rotation(e) {
    let rotation_max = 20;

    let rot_x = 0;
    let rot_y = 0;

    let c_width = card.clientWidth;
    let h_width = c_width / 2;

    let c_height = card.clientHeight;
    let h_height = c_height / 2;

    let mouse_x = e.offsetX;
    let mouse_y = e.offsetY;
    let percent_x = 0;
    let percent_y = 0;

    if(mouse_x <= c_width / 2)
    {
        percent_x = (mouse_x * 100) / h_width;
        percent_x = 100 - percent_x;
        rot_y = -(rotation_max / 100) * percent_x;
    }
    else if(mouse_x > c_width / 2)
    {
        percent_x = ((mouse_x - h_width) * 100) / h_width;
        rot_y = (rotation_max / 100) * percent_x;
    }

    if(mouse_y <= c_height / 2)
    {
        percent_y = (mouse_y * 100) / h_height;
        percent_y = 100 - percent_y;
        rot_x = (rotation_max / 100) * percent_y;
    }
    else if(mouse_y > c_height / 2)
    {
        percent_y = ((mouse_y - h_height) * 100) / h_height;
        rot_x = -(rotation_max / 100) * percent_y;
    }

    card.style.transform = `rotateY(${rot_y}deg) rotateX(${rot_x}deg)`;
}

function reset_rotation() {
    card.style.transition = "transform .5s";
    card.style.transform = "rotateY(0) rotateX(0)";
    setTimeout(() => {
        card.style.transition = "";
    }, 500);
}

