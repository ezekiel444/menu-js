
let container  = document.querySelector(".container")

let buttons = document.querySelectorAll(".btn")


window.addEventListener("DOMContentLoaded", ()=>{

    buttons.forEach(eachBtn=>{
            eachBtn.addEventListener("click", (btn)=>{
              
            let eachCategory =  menuItems.filter(item=>{
                   if( item.category == btn.currentTarget.dataset.id){
                        return item
                   }
                })
                if (btn.currentTarget.dataset.id == "all"){
                        displayItems(menuItems)
                }else{
                    displayItems(eachCategory)
                }
            })
    })

    displayItems(menuItems)
})



function displayItems (allItems){
 
 let display = allItems.map(item => {
    
       return `<div class="itemContainer">
            <div class="imgitem">
            <img src="${item.image}" alt="Pancakes">
            </div>
            <div class="itemcontent">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>
    
        </div>`
    
        })
     
     return container.innerHTML = display
}