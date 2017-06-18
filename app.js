// 1 make state var
let appState = {
  items: []
};



// 2 make modification functions
  //add item
  let addItem = function(appState, item) {
    appState.items.push(item);
  }

  //delete item
  let deleteItem = function(appState, item) {
    appState.items.pop(item);
  }

  // check(line-through) item
  let checkItem = function(event) {
    $(event.currentTarget)
      .parent()
      .siblings('.shopping-item')
      .toggleClass('shopping-item__checked');
    }

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
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItem(appState, $('#shopping-list-entry').val());
    renderList(appState, $('.shopping-list'));
  });

  //el for delete container's
  $('.container').on('click', '.shopping-item-delete', function(event){
    event.preventDefault();
    console.log("item got deleted")
    let itemName = $(event.currentTarget);
    console.log(event.currentTarget);
      // .parent()
      // .siblings('.shopping-item')
      // .text()

    deleteItem(appState, itemName);
    renderList(appState, $('.shopping-list'));
  });

  //el for check
$('.container').on('click', '.shopping-item-toggle', function(event){
    event.preventDefault();
    checkItem(event);
    // renderList(appState, $('.shopping-list'));

  });

});
