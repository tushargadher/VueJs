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
        <input
          type="password"
          id="password"
          name="password"
          v-model="userData.password"
          required
        />
      </div>

      <button type="submit">
        <Loader v-if="loading" />
        <p v-else>Login</p>
      </button>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
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

        console.log(response.data.login.access_token);
        if (response.data) {
          this.loading = false;
          this.$store.commit(
            "SET_ACCESSTOKEN",
            response.data.login.access_token
          );
          alert("Logged in successfull");
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
  font-size: 14px;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
