<template>
  <form class="login-form" @submit.prevent="handleFormSubmit">
    <h2>Login</h2>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        v-model="userInfo.email"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        v-model="userInfo.password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>
<script>
export default {
  head() {
    return {
      title: "Login Page",
    };
  },
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async fetchUserDetails(token) {
      try {
        const response = await this.$axios.$get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("User Details:", response);
        // Set the user manually from the response
        this.$auth.setUser(response);
        console.log(this.$auth.user);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
    async handleFormSubmit() {
      //$auth.loginWith method took two argument one is methdod we are using      //here we are using local method, if you are logging with facebook or google , then use write facebook in first argument//second argument is hash value, data hash  , we should send our data in that form that our server can accepts it
      try {
        let res = await this.$auth.loginWith("local", {
          data: this.userInfo,
        });
        alert("Login Successful");
        let token = res.data.access_token;
        //fetching user data manually because nuxt module can't autofetching this is error in this product

        this.fetchUserDetails(token);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },
};
</script>
<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
