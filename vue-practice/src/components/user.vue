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
    <tr v-for="(user, index) in userDetails" >
      <td>{{ index + 1 }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.address }}</td>
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
    };
  },
};
</script>
