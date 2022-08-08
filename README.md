##  🚀 Завдання

Головним завданням є створення демо додатку, де користувач мав би змогу зареєструвати свій аккаунт за допомогою **Sign Up** форми та згодом увійти в нього через **Sign In** форму. Після успішного входу, користувача повинно автоматично перенаправити на сторінку **Home**, де в мабутньому він мав би змогу зкористатись кнопкою *Logout* для виходу зі свого аккаунту.

<br>

## 📎 Посилання

**Макет**: [Figma](https://www.figma.com/file/hbthFdqeHcPtKLXQIjkeqX/Test-Incode-Finance-2022)

**API документація**: [Swagger](https://incode-backend-dev.herokuapp.com/api/)

<br>

## 👩‍💻 Технічні аспекти

Додаток складається з 2-х сторінок **Auth** та **Home**:

* **Auth** сторінка повинна містити в собі **Sign Up** та **Sign In** форми, які динамічно перемикаються відоповідно до функціоналу.
* **Home** сторінка повинна містити  в собі повідомлення про успішний вхід в додаток та кнопку *Logout*.

<br>

Елементи **Sign Up** блоку з формою:

* Логотип компанії
* Заголовок з назвою форми
* Поле *Full Name*
* Поле *User Name*
* Поле *Email Address*
* Поле *Password*
* Кнопка відправки данних форми
* Текстове поле з кнопкою для переходу на форму ***Sign In***

>Запит для реєстрації аккаунту: [/auth/register](/auth/register)

<br>

Елементи **Sign In** блоку з формою:

* Логотип компанії
* Заголовок з назвою форми
* Поле *Email Address*
* Поле *Password*
* Кнопка відправки данних форми
* Текстове поле з кнопкою для переходу на форму ***Sign Up***

>Запит для входу в аккаунт: [/auth/login](https://incode-backend-dev.herokuapp.com/api/#/auth/AuthController_login)

<br>

Елементи **Home** сторінки:

* Логотип компанії
* Текстовий блок
* Кнопка *Logout*

>Запит для виходу з аккаунту: [/auth/logout](https://incode-backend-dev.herokuapp.com/api/#/auth/AuthController_logout)

<br>

## 📌 Порядок виконання завдання

* Зробіть **fork** данного репозиторія
* Виконайте завдання
* Створіть **pull request** виконаного завдання в данний репозиторій
* Повідомте про виконання завдання


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

