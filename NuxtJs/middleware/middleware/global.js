export default function ({ app, error, redirect, route }) {
  console.log("This is globla middleware,which run on every pages");
  // console.log(app.head);
  // console.log(error);
}

// Authentication: Enforce authentication checks for routes.

// Route Guarding: Implement custom logic before rendering pages.

// Logging and Analytics: Capture user interactions and track navigation events.

// Header Manipulation: Modify HTTP request or response headers.

// Maintenance Mode: Redirect users to a maintenance page if needed.

// Error Handling: Handle errors that occur during request processing.

// Global middleware in Nuxt.js provides a powerful mechanism to apply common functionalities uniformly across all
// routes and pages in your application, enhancing security, maintainability, and reliability. Each use case can be implemented as a separate global middleware function according to your application's requirements.

// middleware/auth.js

// export default function ({ app, redirect }) {
//     if (!app.$auth.loggedIn) {
//       return redirect('/login');
//     }
//   }
