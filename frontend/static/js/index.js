import Dashboard from "./views/Dashboard";
import Post from "./views/Post";
import Settings from "./views/Settings";

const navigateTo = url => {
  history.pushState(null, null, url)
  router()
}

const router = async () => {  // we use async function to render the pages
  const routes = [
    { path: "/", Dashboard},
    { path: "/posts", view: Posts},
    { path: "/settings", view: Settings},
  ];

  // Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    }
  })

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

  if(!match) {
    match = {
      route: routes[0],
      isMatch: true
    }
  }

  const view = new match.route.view()   // create instance of view at match route

  document.querySelector("#app").innerHTML = await view.getHtml();  // injecting title inside element

  console.log(match.route.view())

};

window.addEventListener("popstate", router) // for serving everything when using history (back and forward arrows of browser)

// invoque History API to avoid page refreshes
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if(e.target.matches("[data-link]")) {
      e.preventDefault(); // prevent default behaviour
      navigateTo(e.target.href);
    }
  })

  router()  // call router function
}) 