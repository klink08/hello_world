export const getFeatureFlags = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        isDashboardDisplayed: false,
      })
    }, 2000)
  })
}
