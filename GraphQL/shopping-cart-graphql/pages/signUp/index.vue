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
      <div class="form-group">
        <b>Already have an account ? </b><NuxtLink to="/login">Login</NuxtLink>
      </div>
      <button type="submit" class="button">
        <Loader v-if="loading" />
        <p v-else>Sign Up</p>
      </button>
    </form>
  </div>
</template>

<script>
import { ADD_USER_LOGIN } from "../../GraphQL/Mutations/mutations";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: "Register - Shopping Cart",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Register securely to access personalized recommendations",
        },
        // Add more meta tags as needed
      ],
    };
  },

  layout: "authLayout",
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
          mutation: ADD_USER_LOGIN,
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
</style>
