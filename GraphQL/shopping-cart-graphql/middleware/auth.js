// middleware/auth.js
export default function ({ store, redirect }) {
  // If the user is not authenticated, redirect to the login page
  if (!store.state.accessToken) {
    // alert("Unauthorized ! Please login...");
    return redirect("/login");
  }
}
