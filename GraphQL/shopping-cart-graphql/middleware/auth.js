// middleware/auth.js

export default function ({ app, redirect }) {
  // Check if user is authenticated
  const accessToken = app.$cookies.get("accessToken");

  if (!accessToken) {
    // Redirect to the login page if user is not authenticated
    return redirect("/login");
  }
}
