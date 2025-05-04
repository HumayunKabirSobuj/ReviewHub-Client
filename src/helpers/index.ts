// Helper function to safely create a query string
export function createSafeQueryString(params: Record<string, any>): string {
  // Create a new object with only serializable values
  const safeParams: Record<string, string> = {}

  Object.entries(params).forEach(([key, value]) => {
    // Only include string, number, or boolean values
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      safeParams[key] = String(value)
    }
  })

  return new URLSearchParams(safeParams).toString()
}