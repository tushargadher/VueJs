// It sounds like you're observing your plugin's logging behavior occurring twice:
// once during Nuxt.js SSR (Server-Side Rendering) and a second time during client-side rendering or in a non-SSR context.
//  This behavior is expected in Nuxt.js due to its universal mode, where components and plugins can be executed on
//  both the server and the client.

// 1. Server-Side Rendering (SSR) Phase
// During SSR, Nuxt.js generates the initial HTML content on the server before sending it to the client. This process involves executing plugins, components, and other application logic on the server side.

// When a plugin is executed during SSR:

// The plugin's code runs within the server environment.
// Any logging statements within the plugin will output to the server's console (e.g., terminal or server logs), not the client's browser console.

// 2. Client-Side Execution
// After the initial HTML content is sent to the client, Nuxt.js transitions into client-side rendering mode. The client-side JavaScript bundle is loaded and executed within the client's browser.

// When a plugin is executed on the client-side:

// The plugin's code runs within the client's browser environment.
// Any logging statements within the plugin will output to the client's browser console (e.g., Chrome DevTools console).
export default function (context, inject) {
  //   console.log(context);
  if (process.server) {
    console.log("Plugin Runinng on server side");
  }
  if (process.client) {
    console.log("Plugin Running on clinet side");
  }
  //injected properties or methods can be accessed globally within Vue components, Vuex store, middleware, and other parts of the Nuxt.js application

  const customFunction = () => {
    console.log("custom function called");
  };
  //inject is use to make this function available to entire nuxt js appliaction
  inject("customFunction", customFunction);
}
