document.querySelectorAll ( '.tag').forEach(box => { const tagname = box. tagName.toLowerCase ()
    box.style.bordercolor= '#616161'
    if (!box.classList.contains('nolabel')) {
        const label= document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML=tagName
        box.insertBefore(label, box.childnodes[0])
    }
}) 