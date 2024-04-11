<template>
  <h1>User Details</h1>
  <table border="1">
    <tr>
      <th>No</th>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
    <tr v-for="(user, index) in userDetails">
      <td>{{ index + 1 }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.address }}</td>
    </tr>
  </table>

  <b v-for="(name, index) in names" :key="index" style="display: block">
    {{ index + 1 }} {{ name }}
  </b>

  <h1>Actor Details</h1>
  <table border="1">
    <tr>
      <th>No</th>
      <th>Name</th>
      <th>Age</th>
      <th>Movies</th>
    </tr>
    <tr v-for="(actor, index) in actors">
      <td>{{ index + 1 }}</td>
      <td>{{ actor.name }}</td>
      <td>{{ actor.age }}</td>
      <td>
        <span v-for="movie in actor.movies" :key="movie">{{ movie }},</span>
      </td>
    </tr>
  </table>
</template>
<style scoped>
table {
  border-collapse: collapse;
}
td,
tr,
th {
  padding: 10px;
}
</style>
<script>
export default {
  name: "User",
  data() {
    return {
      userDetails: [
        {
          name: "John Doe",
          age: 30,
          email: "johndoe@example.com",
          address: "123 Main St, City, Country",
        },
        {
          name: "Jane Smith",
          age: 25,
          email: "janesmith@example.com",
          address: "456 Oak Ave, Town, Country",
        },
        {
          name: "Bob Johnson",
          age: 35,
          email: "bob@example.com",
          address: "789 Pine Rd, Village, Country",
        },
      ],
      names: ["Tushar", "Gadher", "Anilbhai"],
      actors: [
        {
          name: "Tom Hanks",
          age: 65,
          movies: ["Forrest Gump", "Cast Away", "Saving Private Ryan"],
        },
        {
          name: "Leonardo DiCaprio",
          age: 48,
          movies: ["Inception", "The Revenant", "Titanic"],
        },
        {
          name: "Meryl Streep",
          age: 72,
          movies: ["The Devil Wears Prada", "Sophie's Choice", "Doubt"],
        },
      ],
    };
  },
};
</script>
