export function closeModal(e) {
  if (e.currentTarget === e.target) {
    e.target.remove();
    document.body.classList.remove("--scroll-hidden");
  }
}
