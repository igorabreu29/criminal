const openFolder = document.querySelector(".folder-1")
const otherFolder = document.querySelector(".folder-2")
const folderContainer = document.querySelector('.folder-container')
const header = document.querySelector('header')

function handleOpenFolder() {
    openFolder.style.cssText = `
        max-width: 50rem;
        padding: 2rem 2rem 0 7rem;
    `
    folderContainer.style.opacity = '0.2'
    header.style.opacity = '0.2'
}

function handleCloseFolder() {
    openFolder.style.cssText = `
    max-width: 0;
    padding: 0;
`

    folderContainer.style.opacity = '1'
    header.style.opacity = '1'

    const caracter = openFolder.querySelector('.caracter')
    caracter.style.display = 'flex'
} 

const buttons = document.querySelectorAll('.buttons button')
const resumeContainer = document.querySelector(".resums-container")

function toggleMenuBlock(item, i) {
    buttons.forEach(button => {
        button.classList.remove('active')
    })

    item.classList.toggle('active')
    resumeContainer.style.translate = ` calc(0px - 33.333333% * ${i}) 0px`
}