let elems = document.querySelectorAll('.elem');


elems.forEach(elem=>{
    
    elem.addEventListener('mouseenter', ()=>{
        elem.children[1].style.opacity = 1;
    })
    elem.addEventListener('mouseleave', ()=>{
        elem.children[1].style.opacity = 0;
    })

    elem.addEventListener('mousemove', (dets)=>{
        elem.children[1].style.left = dets.x + 'px';
        elem.children[1].style.top = dets.y + 'px';
    })
})