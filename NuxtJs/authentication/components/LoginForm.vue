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
    <Loader :isLoading="isLoading" />
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
      isLoading: false,
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleFormSubmit() {
      try {
        this.isLoading = true;
        // Login and set token
        await this.$auth.loginWith("local", {
          data: this.userInfo,
        });

        // After login, the token should be set automatically by the auth module
        console.log(
          "Login successful, token set:",
          this.$auth.strategy.token.get()
        );

        console.log("User fetched:", this.$auth.user);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error("Login failed:", error);
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
