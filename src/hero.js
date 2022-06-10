import "./style.css";

export default function hero(restaurantName, navLinkName, navEvents) {
  const header = document.createElement("header");

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = restaurantName;
  header.appendChild(pageTitle);

  const nav = document.createElement("nav");
  for (let i = 0; i < navLinkName.length; ++i) {
    const li = document.createElement("li");
    li.textContent = navLinkName[i];
    li.addEventListener("click", navEvents[i]);
    nav.appendChild(li);
  }
  header.appendChild(nav);

  const container = document.getElementById("container");
  container.appendChild(header);
}

