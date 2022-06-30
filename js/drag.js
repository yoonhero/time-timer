// //task sortable
// const sortable = new Draggable.Sortable(document.querySelectorAll('ul'), {
//   draggable: 'li',
// });

// //cat sortable
// const sortableCat = new Draggable.Sortable(document.querySelectorAll('.main-div'), {
//   draggable: '.category-swap',
// });

const sortable = new Draggable.Sortable(
  document.querySelector('#xxx'), {
  draggable: 'span',
}
)
sortable.on('sortable:start', () => {
  console.log('sortable:start')
})
sortable.on('sortable:sort', () => {
  console.log('sortable:sort')
})
sortable.on('sortable:sorted', () => {
  console.log('sortable:sorted')
})
sortable.on('sortable:stop', () => {
  console.log('sortable:stop')
})


const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}