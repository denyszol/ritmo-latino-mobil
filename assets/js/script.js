const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-site-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.querySelector('[data-signup-form]');
const statusBox = document.querySelector('[data-form-status]');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const body = Array.from(data.entries())
      .map(([key, value]) => `${encodeURIComponent(key)}: ${encodeURIComponent(value)}`)
      .join('%0D%0A');
    if (statusBox) {
      statusBox.textContent = 'Дані підготовлено до відправлення через поштовий клієнт.';
    }
    window.location.href = `mailto:dance@ritmolatino.ua?subject=Запис на заняття Ritmo Latino&body=${body}`;
  });
}
