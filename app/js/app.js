var app = {
  init: function() {
    console.log('init');
    let buttons = document.querySelectorAll(".buttons__item");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", app.clickedOtherPage);
    }

    // let previousButton = document.querySelector(".previous");
    // previousButton.addEventListener('click', app.pressPrevious);
  },
  clickedOtherPage: function(evt) {
    evt.preventDefault();
    //console.log(evt.target);
    if (evt.target.classList.contains("next")) {
      //alert("je suis next");

      return app.nextPage(evt);
    } else if (evt.target.classList.contains("previous")) {
      //alert("jsuis avant");
      return app.previousPage(evt);
    }
  },
  nextPage: function(evt) {
    pageActive = document.querySelectorAll(".page");
    for (i= 0; i < pageActive.length; i++) {
      if (pageActive[i].classList.contains("page--active")) {
        if(pageActive[i].dataset.number != 4) {
          pageActive[i].classList.remove("page--active");
          //console.log(i);
          i++;
          //console.log(i);
          pageActive[i].classList.add("page--active");
        }
      }
    }
    //console.log(pageActive);
  },
  previousPage: function(evt) {
    pageActive = document.querySelectorAll(".page");
    for (i= 0; i < pageActive.length; i++) {
      console.log(pageActive[i].dataset.number);  
      if (pageActive[i].classList.contains("page--active")) {
        if(pageActive[i].dataset.number != 1) {
          pageActive[i].classList.remove("page--active");
          //console.log(i);
          i--;
          //console.log(i);
          pageActive[i].classList.add("page--active");
        }
      }
    }
    //console.log(pageActive);
  }
  // choosePage: function(evt) {
  //   console.log(evt.target);
  // }
  // pressPrevious: function(evt) {
  //   evt.preventDefault();
  //   let page = document.querySelectorAll(".page");
  //   for(let i = 0; i < page.length; i++) {
  //     console.log(page[i]);
  //   }
    //console.log(page[0]);
    //console.log(page);
    //console.log(page);
    //let data = page.dataset.number;
    // for(let i = 0; i < page.NodeList.length; i++){
    //   console.log(i);
    // }
    // while(data < 5) {
    //   data++;
    //   console.log(data);
    // }
    //alert("T'as cliqué");
    // let pageElement = document.querySelector(".page");
    // if(pageElement.classList.contains("page--active")) {
    //   alert("cette page existe");
    // }
    
  //}
};

$(app.init);
