var menuDOM = document.querySelector('#menufilter');
var contDOM = document.querySelector('#containerP');
var menu_t = ["All", "Korea", "Japan", "China"];

var menu_yazdir = () => {
      for (var i = 0; i < menu_t.length; i++) {
            menuDOM.innerHTML += `<button type="button" onclick="items(${i})" class="btn btn-outline-dark mx-1">${menu_t[i]}</button>`;
      }
}
menu_yazdir();

var items = (category) => {
      contDOM.innerHTML = "";
      var filtrelenmis = menu.map((x) => {
            if (category == 0) { return x; }
            else if (category == 1) { if (x.category == "Korea") { return x; } }
            else if (category == 2) { if (x.category == "Japan") { return x; } }
            else if (category == 3) { if (x.category == "China") { return x; } }
      });
      //console.log(filtrelenmis);
      filtrelenmis.forEach(element => {
            if (element !== undefined) {
                  contDOM.innerHTML += `
              <div class="menu-items col-lg-6 col-sm-12">
                <img src="${element.img}" alt="Chicken" ramen="" class="photo">
                <div class="menu-info">
                  <div class="menu-title">
                    <h4>${element.title}</h4>
                    <h4 class="price">${element.price}</h4>
                  </div>
                  <div class="menu-text">
                    ${element.desc}  <br>
                    ${element.category} 
                  </div>
                </div>
              </div>
              `;
            }
      });

      //console.log(menu.reduce)
}
items(0);