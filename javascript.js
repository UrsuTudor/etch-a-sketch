const container = document.querySelector('.container')
for (i = 1; i <= 256; i++) {
    const div = document.createElement('div')
    div.classList.add('squares')
    div.textContent = i
    container.appendChild(div)
}
