import "../style.css";

export default function home() {
  const main = document.getElementsByTagName("main")[0];
  main.textContent = "";

  const welcomeText = document.createElement("h2");
  welcomeText.innerText = `Welcome to
  Gourment chef!`;

  const p = document.createElement("p");
  p.textContent = `Where we serve you some of the finest dishes on the planet.
    To view our menu, please click the menu tab and make a choice`;

  main.appendChild(welcomeText);
  main.appendChild(p);
}
