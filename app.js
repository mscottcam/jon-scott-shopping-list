// 1 make state var
let appState = {
  items: []
};


// const dummyItem = {
//   name: "",
//   checked: boolean
// }


// 2 make modification functions
  //add item
  let addItem = function(appState, text) {
    appState.items.push({
      name: text,
      checked: false
    });
  }

  //delete item
  let deleteItem = function(appState, index) {
    appState.items.splice(index, 1);
  }

  // check(line-through) item
  let checkItem = function(appState, index) {
    appState.items[index].checked = !appState.items[index].checked;

  }

// 3 make render functions
  //render for add
  let renderList = function (appState, element){
    let itemsHTML = appState.items.map(function(item, i){

        return (`
          <li data-item-index="${i}">
            <span class="shopping-item ${item.checked ? 'shopping-item__checked': ''}"> ${item.name} </span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>
          `);

  })
      element.html(itemsHTML);
      };


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
    console.log("item got deleted")
    const itemIndex = $(event.currentTarget).find('li').data('item-index');
    console.log(event.currentTarget);
      // .parent()
      // .siblings('.shopping-item')
      // .text()

    deleteItem(appState, itemIndex);
    renderList(appState, $('.shopping-list'));
  });

  //el for check
$('.container').on('click', '.shopping-item-toggle', function(event){
    console.log($(event.currentTarget).find('li').data('item-index'));
    const itemIndex = $(event.currentTarget).find('li').data('item-index');
    console.log(itemIndex);
    checkItem(appState, itemIndex);
    renderList(appState, $('.shopping-list'));

  });

});
