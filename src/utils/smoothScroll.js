/**
 * Rola suavemente até uma seção da página usando o ID como âncora.
 * Offset para compensar o navbar fixo.
 *
 * @param {string} sectionId - ID da seção (sem #)
 * @param {number} offset - Offset em pixels para o topo (default: 80 para navbar)
 */
export function scrollToSection(sectionId, offset = 80) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const y = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })
}
