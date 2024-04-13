export const changeTheme = (theme: string) => {
  document.querySelector("html")?.setAttribute("data-theme", theme)
  localStorage.setItem('app-theme', theme)
}
