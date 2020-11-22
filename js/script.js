
let nameInput = document.querySelector("#name")
let email = document.getElementById('mail')

//puts cursor on name field upon page load
nameInput.focus()

//sets up other role input field to display if 'none' is selected
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

//displays real time warning if there is no text in name field
nameInput.addEventListener('keyup', (event) => {
  if (nameInput.value.length > 0) {
    nameInput.style.borderColor = 'white'
    nameErrorDisplay.innerHTML = ''
  } else {
    nameInput.style.borderColor = 'red'
    nameErrorDisplay.innerHTML = 'Name field cannot be left blank'
    nameErrorDisplay.style.color = 'red'
  }
})

//displays real time error messages for email field
let emailErrorDisplay = document.getElementById('email-error-display')
email.addEventListener('keyup', e => {
  if (email.value.length === 0) {
    console.log("hello from email listener")
    emailErrorDisplay.innerHTML = 'Email field cannot be left blank'
    emailErrorDisplay.style.color = 'red'
  } else if (/\./.test(email.value) !== true && /\@/.test(email.value) !== true)  {
    emailErrorDisplay.innerHTML = 'Email must include "." and "@"'
    emailErrorDisplay.style.color = 'red'
  } else if (/\./.test(email.value) === true && /\@/.test(email.value) !== true) {
    emailErrorDisplay.innerHTML = 'Email must include "@"'
    emailErrorDisplay.style.color = 'red'
  } else if (/\./.test(email.value) !== true && /\@/.test(email.value) === true) {
    emailErrorDisplay.innerHTML = 'Email must include "."'
    emailErrorDisplay.style.color = 'red'
  } else {
    emailErrorDisplay.innerHTML = ''
    email.style.borderColor = 'white'
  }
  console.log(/\./.test(email.value))
})

let colorSelector = document.getElementById('color')
let colorSelectorLabel = document.getElementById('color-label')


let designTheme = document.getElementById('design')
colorSelector.innerHTML = `
  <option value="select theme">Please select a T-shirt theme</option>
  `
  colorSelector.style.visibility = 'hidden'
  colorSelectorLabel.style.visibility = 'hidden'

//changes the shirt color options based on design choice
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
const checkboxes = document.querySelectorAll('.activities, input');
let totalCostDisplay = `
  <span id='total-cost'></span>
  `
checkboxArea.insertAdjacentHTML('beforeend', totalCostDisplay);

//listens to activites and disables same time options and displays total cost, also displays error message if no options are selected
document.querySelector('.activities').addEventListener('change', e => {
  let numberClicked = 0
  let clicked = e.target
  let clickedType = e.target.getAttribute('data-day-and-time')
  let totalCost = 0
  for ( let i = 0; i < checkboxes.length; i++ ) {
    if (checkboxes[i].checked === true) {
      numberClicked += 1
    }
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
  if (numberClicked === 0) {
    document.getElementById('error-display').innerHTML = 'Please choose at least one option'
    document.getElementById('error-display').style.color = 'red'
  } else {
    document.getElementById('error-display').innerHTML = ''
  }
  if (totalCost === 0) {
    document.getElementById('total-cost').innerHTML = ''
  } else {
    document.getElementById('total-cost').innerHTML = 'Total: $' + totalCost
  }
});

//sets up credit card as default payment on page load
let paypal = document.getElementById('paypal')
let bitcoin = document.getElementById('bitcoin')
let creditCard = document.getElementById('credit-card')
bitcoin.style.display = 'none'
paypal.style.display = 'none'

//listens to payment option and displays correct option
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

let nameErrorDisplay = document.getElementById('name-error-display')
const nameValidator = () => {
  let nameInputValue = nameInput.value
  if (nameInputValue.length > 0) {
    nameInput.style.borderColor = 'white'
    return true
  } else {
    nameInput.style.borderColor = 'red'
    nameErrorDisplay.innerHTML = 'Name field cannot be left blank'
    nameErrorDisplay.style.color = 'red'
    return false
  }
}

const emailValidator = () => {
  let emailValue = email.value
  let atSymbol = emailValue.indexOf('@')
  let periodSymbol = emailValue.lastIndexOf('.')
  if (atSymbol > 1 && periodSymbol > (atSymbol + 1)) {
    email.style.borderColor = 'white'
    return true
  } else {
    email.style.borderColor = 'red'
    emailErrorDisplay.innerHTML = 'Email field cannot be left blank'
    emailErrorDisplay.style.color = 'red'
    return false
  }
}

const activitiesCheckBoxValidator = () => {
  for (let i = 0; i < checkboxes; i++) {
    if (checkboxes[i].checked) {
      return true
    }
  }
  document.getElementById('error-display').innerHTML = 'Please select at least one activity'
  document.getElementById('error-display').style.color = 'red'
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
    zipCode.style.borderColor = 'white'
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

//event listener for validations
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  //TODO comment out after testing
  //e.preventDefault();

  if (!nameValidator()) {
    e.preventDefault();
    console.log('prevented by nameValidator')
  }

  if (!emailValidator()) {
    e.preventDefault();
    console.log('prevented by emailValidator')
  }

  if (!activitiesCheckBoxValidator()) {
    e.preventDefault();
    console.log('prevented by activitiesCheckBoxValidator')
  }

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
