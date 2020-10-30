// Your code goes here

const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo-heading');
const bus = document.querySelector('header img');
const img1 = document.querySelector('.img-content:nth-of-type(1)');
const img2 = document.querySelector('.img-content:nth-of-type(2)');
const h2 = document.querySelector('h2');
const boatImg = document.querySelector('.content-destination img');
const div1 = document.querySelector('.destination:nth-of-type(1)');
const div2 = document.querySelector('.destination:nth-of-type(2)');
const div3 = document.querySelector('.destination:nth-of-type(3)');
const section = document.querySelector('.content-pick');

// 1 - mouseover
nav.addEventListener('mouseover', e => {
    e.target.style.fontSize = '5rem';
    e.target.style.color = 'red';
})

// 2 - mouseout
nav.addEventListener('mouseout', e => {
    e.target.style.fontSize = '1.75rem';
    e.target.style.color = 'black';
})

// 3 - click
logo.addEventListener('click', e => {
    if(e.target.style.color === 'white') {
        e.target.style.color = 'black';
}   else {
    e.target.style.color = 'white';
}
})

// 4 - mouseenter
bus.addEventListener('mouseenter', e => {
    e.target.style.borderRadius = '50%';
})

// 5 - mouseleave
bus.addEventListener('mouseleave', e => {
    e.target.style.borderRadius = '0';
})

// 6 - wheel
img1.addEventListener('wheel', e => {
    e.target.style.transform = 'rotate('+window.pageYOffset+'deg)';
})

img2.addEventListener('wheel', e => {
    e.target.style.transform = 'rotate('+window.pageYOffset+'deg)';
})

// 7 - drag/drop
h2.addEventListener('mousedown', e => {
    e.target.style.position = 'absolute';
    e.target.style.zIndex = '1000';
    document.body.append(e.target);

    function moveAt(pageX, pageY) {
        e.target.style.left = pageX - e.target.offsetWidth / 2 + 'px';
        e.target.style.top = pageY - e.target.offsetHeight / 2 + 'px';
    };

    moveAt(e.pageX, e.pageY);

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    e.target.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        e.target.onmouseup = null;
    };

    e.target.ondragstart = function() {
        return false;
    };
})

// 8 - doubleclick
boatImg.addEventListener('dblclick', e => {
    if(e.target.style.transform === 'rotate(180deg)') {
        e.target.style.transform = 'rotate(360deg)';
    } else {
        e.target.style.transform = 'rotate(180deg)';
    };
})

// 9 copy
div1.addEventListener('copy', e => {
    e.target.style.backgroundColor = 'yellow';
    e.stopPropagation();
})

div2.addEventListener('copy', e => {
    e.target.style.backgroundColor = 'yellow';
    e.stopPropagation();
})

div3.addEventListener('copy', e => {
    e.target.style.backgroundColor = 'yellow';
    e.stopPropagation();
})

// 10 - beforeprint
window.addEventListener('beforeprint', e => {
    alert('Why would you want to print this?  For real, it\'s just a bus!  It\'s not even real!  It\'s a toy!  Why?');
})

// stop propagation - see section 9 above
section.addEventListener('copy', e => {
    e.target.style.backgroundColor = 'blue';
})