///*****************************///
///           ФОРМЫ            ///
///*****************************///

//находим  формы попапа редактирования профиля
const formEditProfile = document.querySelector("#popup__form-edit")

//находим  формы попапа добавления карточек
const formAddCard = document.querySelector("#popup__form-add")

// Находим форму в DOM
const formElement = document.querySelector(".popup__form");

///***************************************************///
///          ПОЛЯ ФОРМЫ РЕДАКТИРОВАНИЯ ПРОФИЛЯ        ///
///***************************************************///

// Вводим элемент popupInputName и присваиваем ей значение по классу
const popupInputName = document.querySelector(".popup__input_type_name");

// Вводим элемент popupInputJob и присваиваем ей значение по классу
const popupInputJob = document.querySelector(".popup__input_type_job");

///***************************************************///
///          ПОЛЯ ФОРМЫ СОЗДАНИЯ НОВЫХ КАРТОЧЕК        ///
///***************************************************///

// Вводим элемент nameAddInput и присваиваем ей значение по классу
const nameAddInput = formAddCard.querySelector(".popup__input_type_name")

// Вводим элемент linkAddInput и присваиваем ей значение по классу
const linkAddInput = formAddCard.querySelector(".popup__input_type_link")

///*****************************///
///           ПОПАПЫ            ///
///*****************************///

// Вводим элемент popup и присваиваем ей значение по классу 
const popup = document.querySelector(".popup");

// Попап создания карточки
const popupAddCard = document.querySelector(".popup-add-card");

// Попап редактирования профиля
const popupEditProfile = document.querySelector(".popup-edit-profile");

// Попап открытия картинки в развернутом виде
const popupImage = document.querySelector(".popup_type_image");

// Вводим элемент profileTitle и присваиваем ей значение по классу (редактирование поля Имя)
const profileTitle = document.querySelector(".profile__title");

// Вводим элемент profileSubtitle и присваиваем ей значение по классу (редактирование поля: О себе)
const profileSubtitle = document.querySelector(".profile__subtitle");

///***********************///
///        КНОПКИ         ///
///***********************///

// Кнопка открытия попапа редактирования
const buttonEditProfile = document.querySelector(".profile__edit-button");

// Кнопка открытия попапа добавления карточки
const buttonAddCard = document.querySelector(".profile__add-button");

// Кнопка закрытия попапа редактирования
const buttonClosePopupProfile = popupEditProfile.querySelector(".popup__close");
console.log(buttonClosePopupProfile);

// Кнопка закрытия попапа добавления карточек
const buttonClosePopupAddCard = popupAddCard.querySelector(".popup__close");
console.log(buttonClosePopupAddCard);

// Кнопка закрытия попапа с развернутой картинкой
const buttonClosePopupImage = popupImage.querySelector(".popup__close");

    ///**************************************************///
   ///          ФУНКЦИИ ОТКРЫТИЯ И ЗАКРЫТИЯ ПОПАПОВ     ///
  ///**************************************************///

// Задаем функцию открытия попапа
// Присваиваем элементу новый класс popup_opened

function openPopup(popup) {
    popup.classList.add("popup_opened")
    
}

// Задаем функцию закрытия попапа (удаление класса popup_opened)

function closePopup(popup) {
    popup.classList.remove("popup_opened")
}

// Функция открытия попапа редактирования
// Присваиваем значение полям ввода 

buttonEditProfile.addEventListener("click", () => {
    popupInputName.value = profileTitle.textContent
    popupInputJob.value = profileSubtitle.textContent
    openPopup(popupEditProfile)
});

// Функция открытия попапа добавления карточек
buttonAddCard.addEventListener("click", () => {
    openPopup(popupAddCard)
});

// Функция закрытия попапа редактирования

buttonClosePopupProfile.addEventListener("click", () => {
    closePopup(popupEditProfile)
});

// Функция закрытия попапа добавления карточек

buttonClosePopupAddCard.addEventListener("click", () => {
    closePopup(popupAddCard)
});

// Функция закрытия попапа развернутых карточек
buttonClosePopupImage.addEventListener("click", () => {
    closePopup(popupImage)
});


///********************************************************************///
///          ВЫВОД КАРТОЧЕК ИЗ ОБЬЕКТА INITIALCARDS НА СТРАНИЦУ        ///
///********************************************************************///

const template = document.querySelector(".template").content

// Создаем контейнер для вывода карточек
const containerElement = document.querySelector(".elements")

const imageImg = document.querySelector(".popup__image")

const imageTitle = document.querySelector(".popup__image-title")


//функция открытия попапа с картинкой
function openImagePopup(card, link) {
  const cardTitle = card.querySelector(".element__title").textContent
  imageImg.src = link
  imageImg.alt = cardTitle
  imageTitle.textContent = cardTitle
  openPopup(popupImage)
}

// Создаем переменную для копии массива initialCards
/*const placeInfo = initialCards.forEach(function(item) {
    return {
        name: item.name,
        link: item.link
    }
});

function render() {
    placeInfo.forEach(renderCard)
  }*/

  function createCard(value) {
    const card = template.querySelector(".element").cloneNode(true)
    if (card) {
      const title = card.querySelector(".element__title")
      const mask = card.querySelector(".element__mask")
      const trash = card.querySelector(".element__trash")
      const like = card.querySelector(".element__like-button")
      if (title && mask && trash && like) {
        title.textContent = value.name
        mask.src = value.link
        mask.addEventListener("click", () => {
          openImagePopup(card, value.link)
        })
        trash.addEventListener("click", () => {
          card.remove()
        })
        card
        .querySelector(".element__like-button")
        .addEventListener("click", function (evt) {
          evt.target.classList.toggle("element__like-button_active");
        });
      }
    }
    return card
  }
  function renderCard(card, container) {
    container.prepend(card)
  }
  function render() {
    initialCards.forEach((value) => {
      const newCard = createCard(value)
      if (newCard) renderCard(newCard, containerElement)
    })
  }
  
  render()




    ///*********************************************///
   ///          ОТПРАВКА ФОРМЫ РЕДАКТИРОВАНИЯ      ///
  ///*********************************************///

// Задаем функцию - обработчик «отправки» формы
// Получаем значения полей  popupInputName и popupInputJob через свойство value
// Присваиваем значения полей элементам profileTitle и profileSubtitle с помощью textContent
// Вызываем функцию закрытия попапа


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value
    profileSubtitle.textContent = popupInputJob.value
    closePopup(popupEditProfile)
}

// Отслеживаем событие при нажатии на нажатии на кнопку Сохранить 
// Событие отправки формы Submit
formElement.addEventListener('submit', handleFormSubmit);

///***************************************************///
///          ПОЛЯ ФОРМЫ СОЗДАНИЯ НОВЫХ КАРТОЧЕК        ///
///***************************************************///

function handleFormCardSubmit(event) {
    event.preventDefault()
    const name = nameAddInput.value
    const link = linkAddInput.value
    const newCard = createCard({ name, link })
    if (newCard) renderCard(newCard, containerElement)
    
    closePopup(popupAddCard)
    formAddCard.reset()
    }
    
    formAddCard.addEventListener("submit", handleFormCardSubmit)

  





