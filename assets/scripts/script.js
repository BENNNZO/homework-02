// $('#section-one').click(function() {
//     $(this).addClass("fill-onclick")
//     $("#section-two").removeClass("one-fill-onclick")
//     $("#section-three").removeClass("one-fill-onclick")
// })

// document.getElementById("myDIV").style.width = "500px"
const CursorAnimated = document.getElementById("cursor-animated")
const CursorStatic = document.getElementById("cursor-static")

window.addEventListener('mousemove', e => { // function for custom cursor
    CursorAnimated.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px")
    CursorStatic.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px")
})

function sectionSelection(sectionNumber) {
    const sectionsContainer = document.getElementById('section-container')
    if (sectionNumber == 1) {
        console.log("1")
        sectionsContainer.style.transform = "translateY(-100vh)"
    }
    if (sectionNumber == 2) {
        console.log("2")
        sectionsContainer.style.transform = "translateY(-200vh)"
    }
    if (sectionNumber == 3) {
        console.log("3")
        sectionsContainer.style.transform = "translateY(-300vh)"
    }
}


function SectionClick(sectionNumber) {
    const sections = document.getElementsByClassName('section-container')
    const titles = document.getElementsByClassName('section-title')
    const borderBoxes = document.getElementsByClassName('section-title-bounding-box')
    const sectionContents = document.getElementsByClassName('section-content')
    const sectionButtons = document.getElementsByClassName('section-button')

    for (let i = 0; i < sections.length; i++) { // Sizes all section up and shows text/sections
        const section = sections[i]
        const title = titles[i]
        const borderBox = borderBoxes[i]
        const sectionContent = sectionContents[i]
        const sectionButton = sectionButtons[i]

        section.style.height = "90vh"
        title.style.alignItems = "flex-start"
        borderBox.style.height = "90vh"
        borderBox.style.transition = "all 3s ease-in-out"
        sectionContent.style.display = "block"
        sectionContent.style.opacity = "1"

        sectionButton.classList.add("section-button-animation")
    }

    for (let i = 0; i < titles.length; i++) { // gives all sections a height of 90vh 
        const title = titles[i]
        title.style.alignItems = "flex-start"
    }

    const sectionsContainer = document.getElementById('section-container')
    sectionsContainer.style.height = "300vh"

    sectionSelection(sectionNumber)
}