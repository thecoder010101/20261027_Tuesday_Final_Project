const questions = [
  '오늘, 새롭게 알게 된 것은 무엇인가요?',
  '당연하다고 생각했던 것을 다르게 본 적 있나요?',
  '요즘 가장 궁금한 것은 무엇인가요?',
  '작은 용기가 필요했던 순간은 언제였나요?',
  '오늘의 나에게 어떤 말을 건네고 싶나요?',
  '내일은 어떤 작은 시도를 해볼까요?',
]

const questionText = document.querySelector('#question-text')
const questionIndex = document.querySelector('#question-index')
const nextQuestion = document.querySelector('#next-question')
let currentQuestion = 0

nextQuestion.addEventListener('click', () => {
  currentQuestion = (currentQuestion + 1) % questions.length
  questionText.textContent = questions[currentQuestion]
  questionIndex.textContent = `${String(currentQuestion + 1).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`
  questionText.classList.remove('is-changing')
  requestAnimationFrame(() => questionText.classList.add('is-changing'))
})

const helloDialog = document.querySelector('#hello-dialog')

document.querySelectorAll('[data-open-hello]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!helloDialog.open) helloDialog.showModal()
  })
})

helloDialog.addEventListener('click', (event) => {
  if (event.target !== helloDialog) return
  const bounds = helloDialog.getBoundingClientRect()
  const isOutside = event.clientX < bounds.left || event.clientX > bounds.right
    || event.clientY < bounds.top || event.clientY > bounds.bottom
  if (isOutside) helloDialog.close()
})

document.querySelector('#current-year').textContent = String(new Date().getFullYear())

if ('IntersectionObserver' in window) {
  const navigationLinks = [...document.querySelectorAll('[data-section-link]')]
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = navigationLinks.find((item) => item.dataset.sectionLink === entry.target.id)
      if (!link) return
      if (entry.isIntersecting) {
        navigationLinks.forEach((item) => item.removeAttribute('aria-current'))
        link.setAttribute('aria-current', 'location')
      } else {
        link.removeAttribute('aria-current')
      }
    })
  }, { rootMargin: '-20% 0px -55% 0px', threshold: 0 })

  navigationLinks.forEach((link) => {
    const section = document.getElementById(link.dataset.sectionLink)
    if (section) sectionObserver.observe(section)
  })
}
