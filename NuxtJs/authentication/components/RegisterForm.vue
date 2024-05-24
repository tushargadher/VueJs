<template>
  <form class="login-form" @submit.prevent="handleFormSubmit">
    <h2>Register</h2>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        v-model="userInfo.name"
      />
    </div>
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
    <div class="form-group">
      <label for="url">Profile URL</label>
      <input
        type="url"
        id="url"
        placeholder="Enter Profile URL"
        v-model="userInfo.avatar"
      />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
    <Loader :isLoading="isLoading" />
  </form>
</template>
<script>
export default {
  auth: "guest",
  head() {
    return {
      title: "Register Page",
    };
  },
  data() {
    return {
      isLoading: false,
      userInfo: {
        name: "",
        email: "",
        password: "",
        avatar: "",
        //adding avatar because in Platzi Fake Store API it is required
      },
    };
  },
  methods: {
    async handleFormSubmit() {
      //if we not put this api in try catch then error will be displayed in full screen and break the application
      try {
        this.isLoading = true;
        //create new user oursalves since nuxt auth does not provide register endpoint
        console.log(this.userInfo);
        let res = await this.$axios.post("users/", this.userInfo);
        console.log(res);
        this.userInfo = "";
        this.isLoading = false;
        alert("User Registration Successfully");
        this.$router.push("/login");
      } catch (err) {
        this.isLoading = false;
        console.error(`error occured while creating user ${err}`);
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
input[type="text"],
input[type="url"],
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
