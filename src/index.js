import './less/index.less'

// Your code goes here!

// 1-load 
    window.onload = function(evt){
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector("h1")
    heading.textContent = "Ready to go!!"

// 2-copy
        window.addEventListener("copy", ()=>{
        navigator.clipboard.readText()
        .then(text=>{
        heading.textContent += text
        })
    })

// 3-click
       document.body.addEventListener("click", evt =>{
       evt.target.classList.toggle('mirror')
    })

// 4- doubleclick
        document.body.addEventListener("dblclick", evt =>{
        evt.target.innerHTML = "its gone"
    })
// 5 keydown
// 6 keyup

    window.addEventListener("keydown", evt =>{
if (evt.key == 6){
    document.body.innerHTML = "<h1> you ran order 66</h1>"
}    })
    window.addEventListener("keyup", evt =>{
    if (evt.key == 6){
    document.body.innerHTML = "<h1>you lost</h1>"
    }   
 })

// 7-mousemove
    document.addEventListener("mousemove", evt=>{
    const {clientX,clientY} = evt
    console.log(`mouse is at ${clientX} ${clientY}`)
})

// 8-mouseenter
// 9-mouselaeve
     const destinations = document.querySelectorAll(".destination")
    for(let destination of destinations){
    destination.addEventListener("mouseenter", () =>{
    destination.style.fontWeight = 'bold' 
   })
    destination.addEventListener("mouseleave",() =>{
    setTimeout(()=>{
    destination.style.fontWeight = 'initial' 
    },500)
       })
}

 // 10-mouseover
 // 11-mouseout
    const button = document.querySelectorAll(".btn")
 
    for(let i of button){
    i.addEventListener("mouseover", evt =>{
    i.style.backgroundColor = "red"
        })

        i.addEventListener("mouseout", evt =>{
            i.style.backgroundColor = "blue"
                    })
    }
}