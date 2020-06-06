function HoverImage(){
    const AllItems = document.querySelectorAll('.portfolioItem')

    AllItems.forEach(Item=>{
        Item.addEventListener('mouseover', () => {
            Item.childNodes[1].classList.add('Darken');
        })
    })

    AllItems.forEach(Item=>{
        Item.addEventListener('mouseout', () => {
            Item.childNodes[1].classList.remove('Darken');
        })
    })
}

function ColorChange(){
    const NameChanger = document.getElementById("NameChange")
}