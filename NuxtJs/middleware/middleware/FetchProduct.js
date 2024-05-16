// Route-specific middleware functions can contain custom logic such as authentication checks, data fetching, redirection,
// or any other operations needed before rendering a specific page or group of pages.
// Use route-specific middleware to keep your route handling clean and modular.

export default function () {
  const api = "https://api.escuelajs.co/api/v1/products";
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

//middleware can be run of both side server side rendering and clinet side rendering 