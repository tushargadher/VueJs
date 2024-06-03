<template>
  <nav class="navbar">
    <div class="nav-left">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/product" class="nav-link">Product</NuxtLink>
    </div>
    <div class="nav-right">
      <div class="user-info">
        <img :src="user.avatar" alt="profile" />
        <p>{{ user?.name }}</p>
      </div>
      <button class="btn logout" v-if="accessToken" @click="handleLogout">
        Logout
      </button>

      <NuxtLink to="/signUp" v-if="!accessToken"
        ><button class="btn">SignUp</button></NuxtLink
      >
      <NuxtLink to="/login" v-if="!accessToken"
        ><button class="btn">Login</button></NuxtLink
      >
    </div>
  </nav>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      user: {
        id: "",
        name: "",
        avatar: "",
      },
      loading: true,
      error: null,
    };
  },
  methods: {
    handleLogout() {
      let conform = confirm("Are you sure?");
      if (conform) {
        this.$cookies.remove("accessToken");
        this.$router.push("/login");
      }
    },
  },
  computed: {
    accessToken() {
      return this.$cookies.get("accessToken");
    },
  },
  apollo: {
    user: {
      query: gql`
        query {
          myProfile {
            id
            name
            avatar
          }
        }
      `,
      context: function () {
        const token = this.accessToken;
        return {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      result: function ({ data, loading, error }) {
        this.loading = loading;
        if (error) {
          this.error = error;
        } else if (data) {
          this.user = data.myProfile;
        }
      },
    },
  },
};
</script>

<style scoped>
.user-info {
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.user-info img {
  width: 40px;
  border-radius: 100%;
  margin-right: 10px;
}
.user-info p {
  color: white;
}
.navbar {
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #007bff; /* Bootstrap blue color */
  padding: 0 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  z-index: 999;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  margin: 0 15px;
  padding: 5px 0;
  transition: color 0.3s ease;
}
.nav-right {
  display: flex;
  align-items: center;
}
.nav-link:hover {
  color: #ffdd57; /* Yellow color for hover */
}
.nuxt-link-exact-active {
  border-bottom: 2px solid white;
}
.btn {
  background-color: #28a745; /* Bootstrap green color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #218838; /* Darker green for hover */
  transform: scale(1.05);
}

.logout {
  background-color: #dc3545; /* Bootstrap red color */
}

.logout:hover {
  background-color: #c82333; /* Darker red for hover */
}

.navbar a,
.navbar button {
  font-family: "Arial", sans-serif;
}
</style>
