const inputs = document.querySelectorAll("input");

const pattern = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}/
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

function getOneItem(input) {
  return input.forEach(element => {
    element.addEventListener("keyup", e => {
      validate(e.target, pattern[e.target.attributes.name.value]);
    });
  });
}

getOneItem(inputs);
