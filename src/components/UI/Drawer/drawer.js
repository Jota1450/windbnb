export function toggleDrawer() {
  let drawer = document.getElementById("main-drawer");
  let curtain = document.getElementById("curtain");

  curtain.classList.toggle("hidden");
  drawer.classList.toggle("top-0");
  drawer.classList.toggle("top-[-100vh]");
}
