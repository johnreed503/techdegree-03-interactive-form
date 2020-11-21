//puts cursor on name field upon page load
//let nameInput = document.getElementById('name').focus()
let nameInput = document.querySelector("#name")
nameInput.focus()

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
let colorSelectorLabel = document.getElementById('color-label')

let designTheme = document.getElementById('design')
colorSelector.innerHTML = `
  <option value="select theme">Please select a T-shirt theme</option>
  `
  colorSelector.style.visibility = 'hidden'
  colorSelectorLabel.style.visibility = 'hidden'

designTheme.addEventListener('change', (event) => {
  designTheme[0].disabled = true
  if (designTheme.value === 'select theme') {
    colorSelector.innerHTML = `
      <option value="select theme">Please select a T-shirt theme</option>
      `
    colorSelector.style.display = 'none'
    colorSelectorLabel.style.display = 'none'
  } else if (designTheme.value === 'js puns') {
    colorSelector.innerHTML = `
      <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
      <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
      <option value="gold">Gold (JS Puns shirt only)</option>
      `
      colorSelector.style.visibility = 'visible'
      colorSelectorLabel.style.visibility = 'visible'
  } else {
    colorSelector.innerHTML = `
      <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
      <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
      <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
      `
      colorSelector.style.visibility = 'visible'
      colorSelectorLabel.style.visibility = 'visible'
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

let paypal = document.getElementById('paypal')
let bitcoin = document.getElementById('bitcoin')
let creditCard = document.getElementById('credit-card')
bitcoin.style.display = 'none'
paypal.style.display = 'none'


let paymentTypeInput = document.getElementById('payment')
paymentTypeInput.addEventListener('change', e => {
  if (paymentTypeInput.value === 'paypal') {
    paypal.style.display = 'block'
    creditCard.style.display = 'none'
    bitcoin.style.display = 'none'
  } else if (paymentTypeInput.value === 'bitcoin') {
    paypal.style.display = 'none'
    creditCard.style.display = 'none'
    bitcoin.style.display = 'block'
  } else {
    paypal.style.display = 'none'
    creditCard.style.display = 'block'
    bitcoin.style.display = 'none'
  }
})





const nameValidator = () => {
  let nameInputValue = nameInput.value
  if (nameInputValue.length > 0) {
    nameInput.style.borderColor = 'white'
    return true
  } else {
    nameInput.style.borderColor = 'red'
    return false
  }
}

let email = document.getElementById('mail')
const emailValidator = () => {
  let emailValue = email.value
  let atSymbol = emailValue.indexOf('@')
  let periodSymbol = emailValue.lastIndexOf('.')
  if (atSymbol > 1 && periodSymbol > (atSymbol + 1)) {
    email.style.borderColor = 'white'
    return true
  } else {
    email.style.borderColor = 'red'
    return false
  }
}

const activitiesCheckBoxValidator = () => {
  for (let i = 0; i < checkboxes; i++) {
    if (checkboxes[i].checked) {
      //checkboxArea.style.borderColor = 'white'
      return true
    }
  }
  //checkboxArea.style.borderColor = 'red'
  return false
}








let ccNumber = document.getElementById('cc-num')
let zipCode = document.getElementById('zip')
let cvv = document.getElementById('cvv')

const creditCardValidator = () => {
  if (/^\d{13,16}$/.test(ccNumber.value) === false) {
      ccNumber.style.borderColor = 'red'
      return false
    } else {
      ccNumber.style.borderColor = 'white'
      return true
    }
  }

const zipCodeValidator = () => {
  if (/^\d{5}$/.test(zipCode.value) === false) {
    zipCode.style.borderColor = 'red'
    return false
  } else {
    zipcode.style.borderColor = 'white'
    return true
  }
}

const cvvValidator = () => {
  if (/^\d{3}$/.test(cvv.value) === false) {
    cvv.style.borderColor = 'red'
    return false
  } else {
    cvv.style.borderColor = 'white'
    return true
  }
}











let form = document.querySelector('form');
form.addEventListener('submit', (e) => {

  // if (!nameValidator()) {
  //   e.preventDefault();
  //   console.log('prevented by nameValidator')
  // }
  //
  // if (!emailValidator()) {
  //   e.preventDefault();
  //   console.log('prevented by emailValidator')
  // }
  //
  // if (!activitiesCheckBoxValidator()) {
  //   e.preventDefault();
  //   console.log('prevented by activitiesCheckBoxValidator')
  // }

  if (paymentTypeInput.value === 'credit card') {
    console.log('Hello from inside the if statement for cc')
    if (!creditCardValidator()) {
      e.preventDefault();
      console.log('prevented by creditCardValidator')
    }
    if (!zipCodeValidator()) {
      e.preventDefault();
      console.log('prevented by zipCodeValidator')
    }
    if (!cvvValidator()) {
      e.preventDefault();
      console.log('prevented by cvvValidator')
    }
  }
})
