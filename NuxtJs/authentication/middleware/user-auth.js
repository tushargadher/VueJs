export default function (context) {
  const { $auth, route } = context;
  console.log(`User Logged in ${$auth.loggedIn}`);
  if (!$auth.loggedIn) {
    alert("User not logged");
    return context.redirect("/login");
  }
}
