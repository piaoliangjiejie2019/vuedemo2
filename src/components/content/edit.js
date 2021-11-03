export function toEdit(edit, params) {
  for (let i = 0; i < params.length; i++) {
    const element = document.querySelector("." + params[i]);
    // console.log(element);
    const value = element.textContent.trim();
    // console.log(value);
    element.innerText = "";
    const input = document.createElement("input");
    input.value = value;
    element.appendChild(input)
    // console.log(element);

  }
}

export function getChangeValues(params) {
  let values = [];
  for (let i = 0; i < params.length; i++) {
    const element = document.querySelector("." + params[i]).querySelector('input');
    // console.log(element);
    const value = element.value.trim();
    // console.log(value);
    values.push(value);
  }
  // console.log(this.$store.state.stu);
  // console.log($store.state.stu);
  // console.log(values);
  return values;
}

export function toSubmit(classnames, values) {
  console.log(values);
  for (let i = 0; i < classnames.length; i++) {
    const element = document.querySelector('.' + classnames[i]);
    element.removeChild(document.querySelector('.' + classnames[i]).querySelector('input'))
    // console.log(element);
    element.innerText = values[i];
    // console.log(element);
  }

}

export function toConfirmID(stuLen, classname) {
  const changeID = document.querySelector('.' + classname).value;
  if (stuLen < changeID) {
    return false;
  } else {
    return changeID;
  }
}