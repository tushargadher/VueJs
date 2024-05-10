// The middleware directory contains your application middleware.
// Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layout).

export default function ({ route }) {
  //this is also log into serve side see vscode terminal

  // console.log(route);

  if (route.name === "about") {
    // Nuxt.js does not provide built-in support to selectively disable global middleware for specific pages.
    return;
  } else {
    console.log("Global Middleware test is running");
  }
}

// Middleware is commonly used for implementing authentication and authorization logic in Nuxt.js applications

// to apply this middleware in all pages of nuxt appliaction
// config nuxt.js
