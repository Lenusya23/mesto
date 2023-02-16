// Кнопка открытия попапа 
const buttonEditProfile = document.querySelector(".profile__edit-button");

// Вводим элемент popup и присваиваем ей значение по классу 
const popup = document.querySelector(".popup");

// Вводим элемент profileTitle и присваиваем ей значение по классу 
const profileTitle = document.querySelector(".profile__title");

// Вводим элемент profileSubtitle и присваиваем ей значение по классу
const profileSubtitle = document.querySelector(".profile__subtitle");

// Вводим элемент popupInputName и присваиваем ей значение по классу
const popupInputName = document.querySelector(".popup__input_type_name");

// Вводим элемент popupInputJob и присваиваем ей значение по классу
const popupInputJob = document.querySelector(".popup__input_type_job");

// Кнопка закрытия попапа
const buttonCloseProfile = document.querySelector(".popup__close");

// Задаем функцию открытия попапа
// Присваиваем элементу новый класс popup_opened
// Присваиваем значение полям ввода 

function openPopup() {
    popup.classList.add("popup_opened")
    popupInputName.value = profileTitle.textContent
    popupInputJob.value = profileSubtitle.textContent
}

// Задаем функцию закрытия попапа (удаление класса popup_opened)

function closePopup() {
    popup.classList.remove("popup_opened")
}

// Отслеживаем событие по клику на кнопку buttonEditProfile и задаем функцию-обработчик события,то есть функцию открытия попапа

buttonEditProfile.addEventListener("click", openPopup);

// Отслеживаем событие по клику на кнопку buttonCloseProfile и задаем функцию-обработчик события,то есть функцию закрытия попапа
buttonCloseProfile.addEventListener("click", closePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup__form");
console.log(formElement);


// Задаем функцию - обработчик «отправки» формы
// Получаем значения полей  popupInputName и popupInputJob через свойство value
// Присваиваем значения полей элементам profileTitle и profileSubtitle с помощью textContent
// Вызываем функцию закрытия попапа


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value
    profileSubtitle.textContent = popupInputJob.value
    closePopup()
}

// Отслеживаем событие при нажатии на нажатии на кнопку Сохранить 
// Событие отправки формы Submit
formElement.addEventListener('submit', handleFormSubmit);




