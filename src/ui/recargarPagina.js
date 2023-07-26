const logo = document.querySelector("#pokemon-logo");

export const recargarPagina = () => {
  logo.addEventListener("click", () => {
    location.reload();
  });
}