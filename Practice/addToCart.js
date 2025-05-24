const all = document.querySelectorAll('.ALL')
const spans = document.querySelectorAll('.collection_navbar span')

spans.forEach((ele) => {
    ele.addEventListener('click', () => {
        removeClass()
        ele.classList.add('border-active')
    })
})

function removeClass() {
    spans.forEach((ele) => {
        ele.classList.remove('border-active')
    })
}

spans.forEach((ele) => {
    ele.addEventListener('click', () => {
        let text = ele.innerHTML
        removeAll()

        all.forEach((ele) => {
            if(ele.classList.contains(text)){
                ele.classList.add('collection-active')
                ele.classList.add('collection-animate')
            }
        })

    })
})

function removeAll() {
    all.forEach((ele) => {
        ele.classList.remove('collection-active')
        ele.classList.remove('collection-animate')
    })
}

const riteSideBar = document.querySelector('.right_sidebar')
const back = document.querySelector('.sidebar_back')
const overlay = document.querySelector('.overlay')
const bag = document.querySelector('.fa-shopping-bag')

bag.addEventListener('click', () => {
    riteSideBar.style.right = '-500px'
    overlay.style.display = 'block'
})

back.addEventListener('click', () => {
    riteSideBar.style.right = '0'
    overlay.style.display = 'none'
})

const cart = document.querySelectorAll('/ALL_btn_1')
const inner = document.querySelector('sidebar-inner-1')

cart.forEach((ele) => {
    ele.addEventListener('click', () => {
        let image = document.createElement('img')
        image.classList.add('cart-item')
        let img = ele.parentElement.firstElementChild
        let source = img.src
        image.setAttribute('src', source)
        inner.appendChild(image)
    })
})

