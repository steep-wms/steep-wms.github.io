export default () => {
  if (typeof window === "undefined") {
    return 0
  }
  return Math.max(window.pageYOffset,
      document.documentElement.scrollTop, document.body.scrollTop)
}
