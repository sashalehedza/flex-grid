// Assuming this is in a file named useDataFetching.tsx
import { useState, useEffect, useCallback } from 'react'
import { apiService } from './apiService'

interface UseDataFetchingResult<T> {
  data: T[]
  loading: boolean
  error: string | null
}

const useDataFetching = <T>(url: string): UseDataFetchingResult<T> => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const result = await apiService<T>(url) // Specify the generic type for apiService
      setData(result)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An error occurred')
      }
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData, url])

  return { data, loading, error }
}

export default useDataFetching
