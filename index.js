const Project = [
                {Title: "Game of war",
                    URl: "https://github.com/ConnorStewart359/btech-software-dev-25-classroom-computer-programming-game-of-war-game-of-war-starter-csharp",
                    Desc: "command prompt version of the card game war"},
                {Title: "project2",
                    URl: "https://generic.site",
                    Desc: "very cool project"},
                {Title: "project3",
                    URl: "https://reallycool.site",
                    Desc: "even cooler project"}
]
Project.forEach(Project => {
    const projTitle = Project.Title
    const projUrl = Project.URl
    const projDesc = Project.Desc
    const projhead = document.createElement("h2")
    projhead.classList.add("titlediv")
    projhead.textContent = projTitle
    const projlink = document.createElement("a")
    projlink.classList.add("urldiv")
    projlink.textContent = "link"
    projlink.href = projlink
    const projtext = document.createElement("p")
    projtext.classList.add("descdiv")
    projtext.textContent = projDesc
    projlist.appendChild(projhead)
    projlist.appendChild(projlink)
    projlist.appendChild(projtext)
});