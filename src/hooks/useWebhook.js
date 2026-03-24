import { useState, useCallback } from 'react'

/**
 * Hook para envio de dados de formulário ao webhook do Make (Integromat).
 *
 * @param {string} webhookUrl - URL do webhook Make
 * @returns {{ submit, loading, error, success, reset }}
 */
export function useWebhook(webhookUrl) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const submit = useCallback(async (data) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Erro ao enviar: ${response.status}`)
      }

      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Erro ao enviar formulário. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }, [webhookUrl])

  const reset = useCallback(() => {
    setLoading(false)
    setError(null)
    setSuccess(false)
  }, [])

  return { submit, loading, error, success, reset }
}
