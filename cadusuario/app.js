const userDatabase = [];

function validateUser(name, age) {
  if (age < 18) {
    throw new Error("Idade deve ser maior que 18 anos.");
  }

  return { name, age };
}

function saveUser(user) {
  userDatabase.push(user);
}

function displayUsers() {
  const userList = document.getElementById('userList');
  userList.innerHTML = ''; 

  userDatabase.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. Nome: ${user.name}, Idade: ${user.age}`;
    userList.appendChild(listItem);
  });
}

document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);

  const errorMsg = document.getElementById('errorMsg');
  errorMsg.textContent = '';

  try {
    const user = validateUser(name, age);

    saveUser(user);

    displayUsers();

    document.getElementById('userForm').reset();
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});
