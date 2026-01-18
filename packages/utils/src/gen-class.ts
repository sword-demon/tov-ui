export function useClassnames(componentName: string) {
  const prefix = 'tov'
  const componentClass = `${prefix}-${componentName}`

  const c = (suffix: string) => {
    return `${componentClass}-${suffix}`
  }

  return {
    c,
  }
}
