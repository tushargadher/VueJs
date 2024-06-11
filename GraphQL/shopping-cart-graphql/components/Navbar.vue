<template>
  <nav class="navbar">
    <div class="nav-left">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/product" class="nav-link">Product</NuxtLink>
    </div>
    <div class="nav-right">
      <div class="user-info" v-if="user.name">
        <img :src="user.avatar" alt="profile" />
        <p>{{ user.name }}</p>
      </div>
      <button class="btn logout" v-if="accessToken" @click="handleLogout">
        Logout
      </button>
      <div class="cart" :class="{ 'no-active': isCartPage }">
        <NuxtLink to="/cart" class="cart-link">
          <b v-if="totalCartItem">{{ totalCartItem }}</b>
          <i class="fa-solid fa-cart-shopping"></i>
        </NuxtLink>
      </div>
      <NuxtLink to="/signUp" v-if="!accessToken" class="auth-link"
        >SignUp</NuxtLink
      >
      <NuxtLink to="/login" v-if="!accessToken" class="auth-link"
        >Login</NuxtLink
      >
    </div>
  </nav>
</template>

<script>
import gql from "graphql-tag";
import { mapGetters } from "vuex";

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
      isCartPage: false,
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
    ...mapGetters({
      totalCartItem: "totalCartItem",
    }),
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
  background-color: #007bff;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 999;
}

.nav-left {
  display: flex;
  align-items: center;
}

.nav-right {
  display: flex;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  margin: 0 15px;
  padding: 5px 0;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #ffdd57;
}

.navbar a {
  font-family: "Arial", sans-serif;
}

.no-active .cart-link {
  border-bottom: none;
}

.cart {
  position: relative;
  margin-left: 20px;
}

.cart-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.cart i {
  font-size: 1.5rem;
  margin-left: 5px;
}

.cart b {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
}

.btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.logout {
  background-color: #dc3545;
}

.logout:hover {
  background-color: #c82333;
}

.auth-link {
  text-decoration: none;
  color: white;
  margin-left: 10px;
}

@media only screen and (max-width: 768px) {
  .navbar {
    padding: 0 10px;
  }
}
</style>
