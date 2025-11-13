const STORAGE_KEY = "feedback-form-state";

// 1️⃣ Стартовое состояние данных
let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

// 2️⃣ При загрузке страницы восстанавливаем данные
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// 3️⃣ Слушаем ввод и сохраняем данные в localStorage
form.addEventListener("input", (evt) => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4️⃣ Сабмит формы
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  // Очистка
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});
