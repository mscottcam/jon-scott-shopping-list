// 1 make state var
let appState = {
  items: []
};


// 2 make modification functions
  //add item
  let addItem = function(appState, text) {
    appState.items.push({
      name: text,
      checked: false
    });
    renderList(appState, $('.shopping-list'));
  }

  //delete item
  let deleteItem = function(appState, index) {
    appState.items.splice(index, 1);
    renderList(appState, $('.shopping-list'));
  }

  // check(line-through) item
  let checkItem = function(appState, index) {
    appState.items[index].checked = !appState.items[index].checked;
    renderList(appState, $('.shopping-list'));
  }

// 3 make render functions
  //render for add
  let renderList = function (appState, element){
    let itemsHTML = appState.items.map(function(item, i){
      let checkedClass =  item.checked ? 'shopping-item__checked': '';
      return (
        `<li data-item-index="${i}">
          <span class="shopping-item ${checkedClass}">${item.name}
          </span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
        );
      })
    element.html(itemsHTML);
    };


// 4 make event listener function

$(document).ready(function() {

  //el for add
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    addItem(appState, $('#shopping-list-entry').val());
    // TODO: reset the input to empty
  });

  // listen for click of delete button
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    const itemIndex = $(event.currentTarget).closest('li').data('item-index');
    deleteItem(appState, itemIndex);  
  });

  // listen for click of check button
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    const itemIndex = $(event.currentTarget).closest('li').data('item-index');
    checkItem(appState, itemIndex);
  });
});