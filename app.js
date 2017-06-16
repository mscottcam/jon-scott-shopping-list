// 1 make state var
let appState = {
  items: []
};



// 2 make modification functions
  //add item
  let addItem = function(appState, item) {
    appState.items.push(item);
    //renderList()
  }

  //delete item
  let deleteItem = function(appState, item) {
    appState.items.pop(item);
  }

  // //check(line-through) item
  // let checkItem = function(appState, item) {
  //   $('.shopping-item').css('text-decoration', 'line-through');
  // }
  // console.log('hello');


// 3 make render functions
  //render for add
  let renderList = function (appState, element){
    let itemsHTML = appState.items.map(function(item){
      return `<li><span class="shopping-item"> ${item} </span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
    })
      element.html(itemsHTML);
  }

// 4 make event listener function

$(document).ready(function() {

  //el for add

// event handler for add function
// push Add Item button - Submit - starts the function
// on submit, the submitted text to be added to 'items' array
// once submited to items, render function should do what it's meant to d0

  //el for add
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItem(appState, $('#shopping-list-entry').val());
    renderList(appState, $('.shopping-list'));
  });

  //el for delete container's
  $('.container').on('click', '.shopping-item-delete', function(event){
    event.preventDefault();
    console.log("delete")
    var itemName = $(event.currentTarget)
      .parent()
      .siblings('.shopping-item')
      .text()
    deleteItem(appState, itemName);
    renderList(appState, $('.shopping-list'));
  });
// $(event.currentTarget).toggleClass('bulb-on')

  //el for check

  //call initial state
  //call event listener function
});
