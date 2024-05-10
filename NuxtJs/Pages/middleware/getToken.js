export default function ({ redirect }) {
  //error handing in middleware
  try {
    console.log("GET TOKEN MIDDLEWARE RUNNING");

    const apiUrl = "https://reqres.in/api/login";
    const requestData = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  } catch (error) {
    console.log("middleware error", error);
  }
}
