export function closeModal(e) {
  if (e.currentTarget === e.target) {
    e.target.remove();
  }
}
