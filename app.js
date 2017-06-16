// 1 make state var
let appState = {
  items: []
};



// 2 make modification functions
  //add item
  let addItem = function(appState, item) {
    appState.items.push(item);

  }
addItem(appState, 'test');
console.log(appState);


  //delete item
  let deleteItem = function(appState, item) {
    appState.items.pop(item);
  }

  //check(line-through) item
  let checkItem = function(appState, item) {
    $('.shopping-item').css('text-decoration', 'line-through');
  }
  console.log('hello');


// 3 make render functions
  //render for add
  let renderAdd = function (appState, element){
    let itemsHTML = appState.items.map(function(item){
      return `<li><span> ${item} </span></li>`;
    })
      element.html(itemsHTML);
  }

  //render for delete
  //render for check



// 4 make event listener function


$(document).ready(function() {

  //el for add

  $('.shopping-list').submit(function(event){
    event.preventDefault();
    addItem(appState, $('#shopping-list-entry').val());
    renderList(appState, $('.shopping-item'));

  });

  //el for delete
  //el for check

  //call initial state
  //call event listener function
});
