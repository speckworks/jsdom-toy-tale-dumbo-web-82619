let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  let toyDiv = document.querySelector('#toy-collection')


  fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then((toysObj) => { 
    toysObj.forEach(turnJSONIntoDiv)
  
  })
  
  function turnJSONIntoDiv(toy) {
    // let divCard = document.createElement("div");

    let toyHeader = document.createElement("h2");
    toyDiv.append(toyHeader)
    let toyImg = document.createElement("img");
    toyImg.src = toy.image
    toyImg.class = "toy-avatar"
    toyDiv.append(toyImg)
    let toyP = document.createElement("p");
    toyDiv.append(toyP.innerText = "5 Likes")
    // string interpolation `${toy.likes}`
    let toyButton = document.createElement("BUTTON");
    toyButton.className = "like-btn";
    toyButton.innerText = "Like <3 "
    toyDiv.append(toyButton)
    toyImg.alt = "buzz LIIIIIGHTyear"
    toyHeader.append(toy.name)
    
    
    toyButton.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(e)
    } )
    
  }



    addBtn.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(e.target)
    // hide & seek with the form
    fetch("http://localhost:3000/toys")

  .then(res => res.json())

    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'




    } else {
      toyForm.style.display = 'none'
    }
  })
  


  
})

