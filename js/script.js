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





// designTheme.addEventListener('change', (event) => {
//
//   if (designTheme.value === 'js puns') {
//     colorSelector.innerHTML = `
//       <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
//       <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
//       <option value="gold">Gold (JS Puns shirt only)</option>
//       `
//   } else if (designTheme.value === 'heart js') {
//     colorSelector.innerHTML = `
//       option value="tomato">Tomato (I &#9829; JS shirt only)</option>
//       <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
//       <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
//       `
//   } else {
//     colorSelector.innerHTML = `
//       <option value="select theme">Please select a T-shirt theme</option>
//     `
//   }
//
//   // else (designTheme.value === 'Theme - JS Puns') {
//   //   colorSelector.innerHTML = `<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
//   //   <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
//   //   <option value="gold">Gold (JS Puns shirt only)</option>`
//   // }
//
//
// })
