let starters = document.getElementById("starters")
let entrees = document.getElementById("entrees")
let desserts = document.getElementById("desserts")


let menuList = document.getElementById("menuList")



entrees.addEventListener("click",function(){
    while (menuList.hasChildNodes()) {
        menuList.removeChild(menuList.firstChild)}
    let title = `<h2><u>Entrees</u></h2>`
    menuList.insertAdjacentHTML('beforeend',title)


    for(let i = 0;i < dishes.length; i++) {
        let dish = dishes[i]
      
        let menuItem = `
        <li class="listItem">
        
          <img src="${dish.imageURL}" />
          <div>
            <h3><u>${dish.title}</u></h3>
            <p>${dish.description}</p>
          </div>
          <h4 id="price">${dish.price}</h4>
        </li>`
      
        if(dish.course == "Entrees") {
          menuList.insertAdjacentHTML('beforeend', menuItem)
        } 
      }
    })


    starters.addEventListener("click",function(){
        while (menuList.hasChildNodes()) {
            menuList.removeChild(menuList.firstChild)}
        let title = `<h2><u>Starters</u></h2>`
    menuList.insertAdjacentHTML('beforeend',title)


        for(let i = 0;i < dishes.length; i++) {
            let dish = dishes[i]
          
            let menuItem = `
            <li class="listItem">
              <img src="${dish.imageURL}" />
              <div>
                <h3><u>${dish.title}</u></h3>
                <p>${dish.description}</p>
              </div>
              <h4 id="price">${dish.price}</h4>
            </li>`
          
            if(dish.course == "Starters") {
              menuList.insertAdjacentHTML('beforeend', menuItem)
            } 
          }
        })

    desserts.addEventListener("click",function(){
        while (menuList.hasChildNodes()) {
            menuList.removeChild(menuList.firstChild)}
        let title = `<h2><u>Desserts</u></h2>`
    menuList.insertAdjacentHTML('beforeend',title)


        for(let i = 0;i < dishes.length; i++) {
            let dish = dishes[i]
          
            let menuItem = `
            <li class="listItem">
              <img src="${dish.imageURL}" />
              <div>
                <h3><u>${dish.title}</u></h3>
                <p>${dish.description}</p>
              </div>
              <h4 id="price">${dish.price}</h4>
            </li>`
          
            if(dish.course == "Desserts") {
              menuList.insertAdjacentHTML('beforeend', menuItem)
            } 
          }
        })

        