const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

// setting event listners
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('drag start')
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        console.log('drag start')
        draggable.classList.remove('dragging')
    })
})


// working on drag over

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDraggableAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        // console.log(afterElement)
        if (afterElement == null) {
            container.appendChild(draggable)
        }else {
            container.insertBefore(draggable, afterElement)
        }
    })
})

// all work fine but modifying
function getDraggableAfterElement(container, y) {
    const draggableElement = [...container.querySelectorAll('.draggable:not(.dragging')]

    return draggableElement.reduce((closest, child) => {
const box = child.getBoundingClientRect()
const offset = y - box.top - box.height / 2
// console.log(offset)
if (offset < 0 && offset > closest.offset) {
    return { offset: offset,  elemant: child }
}else {
    return closest
}
    },{ offset: Number.NEGATIVE_INFINITY }).elemant;
}



