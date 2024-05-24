export default function (context) {
  const { $auth, route } = context;
  console.log(`User Logged in ${$auth.loggedIn}`);
  if (!$auth.loggedIn) {
    // The alert function is a browser-specific API and is not available in a server-side context.
    // Only run this in the browser
    if (process.client) {
      alert("User not logged in");
    }
    return context.redirect("/login");
  }
}
