<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleLogin">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="userData.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <div class="password-container">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            name="password"
            v-model="userData.password"
            ref="passwordField"
            required
          />
          <i :class="passwordIconClass" @click="togglePasswordField"></i>
        </div>
      </div>
      <div class="form-group">
        <b>Don't Have Account ? </b><NuxtLink to="/signUp">Register</NuxtLink>
      </div>

      <button type="submit" class="button">
        <Loader v-if="loading" />
        <p v-else>Login</p>
      </button>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  layout: "authLayout",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      loading: false,
      showPassword: false,
    };
  },
  computed: {
    passwordIconClass() {
      return this.showPassword
        ? "fa-regular fa-eye-slash icon"
        : "fa-regular fa-eye icon";
    },
  },
  methods: {
    togglePasswordField() {
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      this.loading = true;
      try {
        const response = await this.$apollo.mutate({
          mutation: gql`
            mutation login($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                access_token
              }
            }
          `,
          variables: {
            email: this.userData.email,
            password: this.userData.password,
          },
        });

        let accessToken = response.data.login.access_token;
        if (accessToken !== null && accessToken !== undefined) {
          this.loading = false;
          this.$cookies.set("accessToken", accessToken, {
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
          });
          alert("Logged in successfully");
          this.$router.push("/");
        }
      } catch (error) {
        this.loading = false;
        console.error(`Error while log in ${error}`);
        alert(error);
      }
    },
  },
};
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.password-container {
  position: relative;
  width: 100%;
}

.password-container input {
  width: 100%;
  padding-right: 30px; /* Adjust padding to avoid overlap with icon */
}

.password-container .icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
