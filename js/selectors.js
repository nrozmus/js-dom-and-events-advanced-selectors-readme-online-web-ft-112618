// use an element selector to select the
// p tags in index.html and return those elements
function paragraphSelector() {
  let elements = $('p')
  return elements
}

// use the last jQuery selector to return
// the last image in index.html
function lastImageSelector() {
  let image = $('img').last()
  return image
}

// use an ID selector to return the ninja
// baby image.
function ninjaBabySelector() {
  let imageBaby = $('#baby-ninja')
  return imageBaby
}

// use a class selector to return the
// two divs with the class pics
function divSelector() {
  let picsDivs = $('.pics')
  return picsDivs
}

// use a first-child selector to return
// the first list item in the ul with the ID pic-list
function firstListItem() {
  let listItem = $('ul li:first-child')
  return listItem
}