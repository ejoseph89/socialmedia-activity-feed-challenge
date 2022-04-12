// Toggle post modal
const postModal = document.querySelector('.content__post')
const openPostModal = document.querySelector('.footer__nav--post')

openPostModal.addEventListener('click', (e) => {
  postModal.classList.toggle('hidden')
})
