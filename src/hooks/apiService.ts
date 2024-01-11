export const apiService = async <T>(url: string): Promise<T[]> => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      const errorMessage = `Error fetching data - status: ${response.status}, url: ${response.url}`
      throw new Error(errorMessage)
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(`Error in apiService - ${(error as Error).message}`)
  }
}
