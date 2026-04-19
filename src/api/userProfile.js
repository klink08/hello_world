export const getUserProfile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        firstName: 'Kellen',
        lastName: 'Link',
      })
    }, 2000)
  })
}
