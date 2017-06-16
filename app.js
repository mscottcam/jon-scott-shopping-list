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

  // //delete item
  // let deleteItem = function(appState, item) {
  //   appState.items.pop(item);
  // }

  // //check(line-through) item 
  // let checkItem = function(appState, item) {
  //   $('.shopping-item').css('text-decoration', 'line-through');
  // }
  // console.log('hello');


// 3 make render functions
  //render for add
  let renderList = function (appState, element){
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

// event handler for add function
// push Add Item button - Submit - starts the function
// on submit, the submitted text to be added to 'items' array
// once submited to items, render function should do what it's meant to do

  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItem(appState, $('#shopping-list-entry').val());
    renderList(appState, $('.shopping-list'));

  });

  //el for delete
  //el for check

  //call initial state
  //call event listener function
});
