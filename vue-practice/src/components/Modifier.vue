<template>
  <div class="container">
    <pre>{{ formData }}</pre>
    <div>
      <form @submit.prevent="handleSubmit">
        <label for="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          v-model.trim="formData.fullname"
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model.trim.lazy="formData.email"
        />

        <label for="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          v-model.number="formData.phone"
        />

        <label for="position">Role:</label>
        <select id="position" name="position" v-model="formData.role">
          <option value="">Select Position</option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="designer">Designer</option>
        </select>

        <label>contact-method :</label>
        <div class="contact-method">
          <label>
            <input
              type="radio"
              name="contactMethod"
              value="email"
              v-model="formData.contentMethod"
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              v-model="formData.contentMethod"
            />
            Phone
          </label>
        </div>

        <label>Skills (Check all that apply):</label>
        <div class="skills">
          <label>
            <input
              type="checkbox"
              name="skills[]"
              value="html"
              v-model="formData.skills"
            />
            HTML
          </label>
          <label>
            <input
              type="checkbox"
              name="skills[]"
              value="css"
              v-model="formData.skills"
            />
            CSS
          </label>
          <label>
            <input
              type="checkbox"
              name="skills[]"
              value="javascript"
              v-model="formData.skills"
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              name="skills[]"
              value="react"
              v-model="formData.skills"
            />
            React
          </label>
          <label>
            <input
              type="checkbox"
              name="skills[]"
              value="vue"
              v-model="formData.skills"
            />
            Vue.js
          </label>
        </div>

        <label for="coverLetter">Cover Letter:</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows="5"
          v-model.trim="formData.coverlatter"
          v-on:keyup.enter="handleSubmit"
        ></textarea>
        <input type="text" v-on:keydown="getkey" />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  </div>
  <button @click.once="handleOnce">Once Submit</button>
</template>
<script>
export default {
  name: "Modifier",
  data() {
    return {
      formData: {
        fullname: "",
        email: "",
        phone: null,
        role: "",
        contentMethod: "",
        remote: "",
        skills: [],
        coverlatter: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formData);
    },
    handleOnce() {
      console.log("once the call");
    },
    getkey(e) {
      console.log(e.key);
    },
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  height: 70vh;
  width: 60vw;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 8px;
}

input[type="text"],
input[type="email"],
input[type="number"],
select,
textarea {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box; /* Ensures padding is included in width */
}

select {
  width: 100%;
}

.contact-method {
  display: flex;
  margin-bottom: 15px;
}

.contact-method label {
  margin-right: 15px;
}

.skills label {
  display: block;
  margin-bottom: 8px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
