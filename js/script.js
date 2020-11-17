let nameInput = document.getElementById('name').focus()

let otherRoleInput = document.getElementById('other-title')
otherRoleInput.style.display = 'none'


let colorSelector = document.getElementById('color')
let designTheme = document.getElementById('design')
colorSelector.innerHTML = `
  <option value="select theme">Please select a T-shirt theme</option>
  `


designTheme.addEventListener('change', (event) => {
  if (designTheme.value === 'select theme') {
    colorSelector.innerHTML = `
      <option value="select theme">Please select a T-shirt theme</option>
      `
  } else if (designTheme.value === 'js puns') {
    colorSelector.innerHTML = `
      <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
      <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
      <option value="gold">Gold (JS Puns shirt only)</option>
      `
  } else {
    colorSelector.innerHTML = `
      <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
      <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
      <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
      `
  }
})

const checkboxArea = document.querySelector('.activities')
//enable and disable checkboxes
const checkboxes = document.querySelectorAll('.activities, input');

document.querySelector('.activities').addEventListener('change', e => {
  let clicked = e.target
  let clickedType = e.target.getAttribute('data-day-and-time')
  console.log(clicked, clickedType)
  for ( let i = 0; i < checkboxes.length; i++ ) {
    let checkboxType = checkboxes[i].getAttribute('data-day-and-time')
    console.log(clickedType)
    if (clickedType !== null) {
    if ( clickedType === checkboxType && clicked !== checkboxes[i]) {
       if (clicked.checked === true) {
         checkboxes[i].disabled = true
       } else{
         checkboxes[i].disabled = false
       }
     }

   }

  }
  let totalCost = 0
  for ( let i = 0; i < checkboxes.length; i++ ) {
    if (checkboxes[i].checked === true) {
    let value = parseInt(e.target.getAttribute('data-cost'), 10)
    totalCost += value

    html = `
      <span>$${totalCost}</span>
      `
    checkboxArea.insertAdjacentHTML('beforeend', html);
  }
  }
  // html = `
  //   <span>$${totalCost}</span>
  //   `
  // checkboxArea.insertAdjacentHTML('beforeend', html);
});
