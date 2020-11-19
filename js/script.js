let nameInput = document.getElementById('name').focus()



let otherRoleInput = document.getElementById('other-title')
otherRoleInput.style.display = 'none'
let titleSelection = document.getElementById('title')
titleSelection.addEventListener('change', (event) => {
  if (titleSelection.value === 'other') {
    otherRoleInput.style.display = 'block'
  } else {
    otherRoleInput.style.display = 'none'
  }
});






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
let totalCostDisplay = `
  <span id='total-cost'></span>
  `
checkboxArea.insertAdjacentHTML('beforeend', totalCostDisplay);

document.querySelector('.activities').addEventListener('change', e => {
  let clicked = e.target
  let clickedType = e.target.getAttribute('data-day-and-time')
  let totalCost = 0
  for ( let i = 0; i < checkboxes.length; i++ ) {
    let checkboxType = checkboxes[i].getAttribute('data-day-and-time')
    if (clickedType !== null) {
    if ( clickedType === checkboxType && clicked !== checkboxes[i]) {
       if (clicked.checked === true) {
         checkboxes[i].disabled = true
       } else{
         checkboxes[i].disabled = false
       }
     }
   }
   if (checkboxes[i].checked === true) {
     totalCost += parseInt(checkboxes[i].getAttribute('data-cost'), 10)
   }
  }
  if (totalCost === 0) {
    document.getElementById('total-cost').innerHTML = ''
  } else {
    document.getElementById('total-cost').innerHTML = 'Total: $' + totalCost
  }
});



//making 'select payment method unselectable after something has happened'
let paymentTypeInput = document.getElementById('payment')
let selectMethod = paymentTypeInput[0]
console.log(selectMethod)
paymentTypeInput.addEventListener('change', e => {
  selectMethod.disabled = true
})
