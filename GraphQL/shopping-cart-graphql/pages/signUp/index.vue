<template>
  <div class="signup-container">
    <form class="signup-form" @submit.prevent="handleUserRegister">
      <h2>Sign Up</h2>

      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="userData.name"
          required
        />
      </div>
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
        <span v-if="validationErrors.password">{{
          validationErrors.password
        }}</span>
      </div>

      <div class="form-group">
        <label for="url">Avatar:</label>
        <input
          type="url"
          id="url"
          name="url"
          v-model="userData.avatar"
          required
        />
      </div>
      <button type="submit">
        <Loader v-if="loading" />
        <p v-else>Sign Up</p>
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
        name: "",
        email: "",
        password: "",
        avatar: "",
      },
      loading: false,
      validationErrors: {
        name: "",
        email: "",
        password: "",
        avatar: "",
      },
    };
  },
  methods: {
    async handleUserRegister() {
      this.loading = true;
      try {
        const response = await this.$apollo.mutate({
          mutation: gql`
            mutation addUser(
              $name: String!
              $email: String!
              $password: String!
              $avatar: String!
            ) {
              addUser(
                data: {
                  name: $name
                  email: $email
                  password: $password
                  avatar: $avatar
                }
              ) {
                id
                name
                avatar
              }
            }
          `,
          variables: {
            name: this.userData.name,
            email: this.userData.email,
            password: this.userData.password,
            avatar: this.userData.avatar,
          },
        });
        if (response.data) {
          this.loading = false;
          alert("User Registration Successful");
          this.$router.push("/login");
        }
      } catch (error) {
        this.loading = false;
        console.error(`Error while creating new user ${error}`);
      }
    },
  },
  watch: {
    // "userData.name": function (newValue) {
    //   if (!newValue) {
    //     this.validationErrors.name = "Name is required.";
    //   } else {
    //     this.validationErrors.name = "";
    //   }
    // },
    "userData.password": function (newValue) {
      if (newValue.length < 4) {
        this.validationErrors.password =
          "Password must be at least 4 characters.";
      } else {
        this.validationErrors.password = "";
      }
    },
  },
};
</script>

<style scoped>
span {
  color: red;
}
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.signup-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.signup-form h2 {
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
