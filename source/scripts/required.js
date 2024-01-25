const submitBtn = document.querySelector('.form__bottom-btn');

submitBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input[required]');
  for(let i = 0;i < inputs.length;i++){
    inputs[i].classList.add('form-group__item-input--error');
  }
});
