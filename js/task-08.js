//todo Напиши скрипт управления формой логина

//TODO 1) Обработка отправки формы form.login-form должна быть по событию submit.

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onLoginFormSubmit);

//TODO 2) При отправке формы страница не должна перезагружаться.

//TODO 4) Если пользователь заполнил все поля и отправил форму,
//собери значения полей в обьект, где имя поля будет именем свойства,
//а значение поля - значением свойства.Для доступа к элементам формы
//используй свойство elements.

//TODO 3) Если в форме есть незаполненные поля, выводи alert с
// предупреждением о том, что все поля должны быть заполнены.

//TODO 5) Выведи обьект с введенными данными в консоль и очисти
//значения полей формы методом reset.

function onLoginFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
     alert(`all fields must be filled`);
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }

  event.currentTarget.reset();
}

