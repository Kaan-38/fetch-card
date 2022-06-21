

fetch("fetch-proje.json").then(r =>{  
    return r.json();
}).then( rr => {  
    rr.forEach(item => {
        const div = document.querySelector('.container-kapsam');
        div.innerHTML += `
                 <li> <img class="photoUser" src=${item.photo}> 
                       <label> 
                             <h2>${item.name} ${item.surname}</h2>  
                             <span> <img class="photojop" src=${item.jopİmage}> <h3>${item.jop}</h3></span>
                             <span><ion-icon name="mail-unread-outline"> </ion-icon> <h4>${item.mail}</h4></span>
                       </label>
                  </li> `
    
  })
})


