const localStorageKey = 'feedback-form-state';
const formData = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : { email: '', message: '' };

const form = document.querySelector('.feedback-form');
form.elements['email'].value = formData.email;
form.elements['message'].value = formData.message;

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email.trim() && formData.message.trim()) {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    form.reset();
    localStorage.removeItem(localStorageKey);
  } else {
    alert('Fill please all fields');
  }
});
