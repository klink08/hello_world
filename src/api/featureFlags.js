export const getFeatureFlags = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        isDashboardDisplayed: true,
      })
    }, 2000)
  })
}
