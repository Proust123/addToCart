const spans = document.querySelectorAll('span')
const all = document.querySelectorAll('.ALL')

spans.forEach((ele) => {
    ele.addEventListener('click', () => {
        removeBorder()
        ele.classList.add('border-active')
    })
})

function removeBorder() {
    spans.forEach((ele) => {
        ele.classList.remove('border-active')
    })
}

spans.forEach((ele) => {
    ele.addEventListener('click', () => {
        let text = ele.innerHTML

        removeClass()
        all.forEach((ele) => {
            if(ele.classList.contains(text)){
                ele.classList.add('collection-active')
                ele.classList.add('collection-animate')
            }
        })

    })
})

function removeClass() {
    all.forEach((ele) => {
        ele.classList.remove('collection-active')
        ele.classList.remove('collection-animate')
    })
}

const inner = document.querySelector('.sidebar-inner-1')
const cart = document.querySelectorAll('.ALL_btn_1')

cart.forEach((ele) => {
    ele.addEventListener('click', () => {
        let image = document.createElement('img')
        image.classList.add('cart_item')
        let img = ele.parentNode.firstElementChild
        let source = img.src
        image.setAttribute('src', source)
        inner.appendChild(image)
    })
})