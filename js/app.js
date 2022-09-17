const toggleButton = document.querySelector('#floating-toggle')
const activeMenu = () => {
    toggleButton.classList.toggle('active')
}

toggleButton.addEventListener('click', activeMenu)