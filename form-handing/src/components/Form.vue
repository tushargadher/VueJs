<template>
  <div class="user-form">
    <h1>Form Handing in Vue js</h1>

    <div class="container">
      <form v-on:submit.prevent="handleSubmit">
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            v-model="name"
            ref="inputRef"
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            v-model="password"
            ref="passwordRef"
          />
          <span style="color: red" v-if="passwordError">{{
            passwordError
          }}</span>
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            v-model="email"
          />
        </div>
        <div>
          <label for="skills"> Skills</label>
          <input
            type="text"
            v-model="tempSkill"
            v-on:keyup.alt="addSkill"
            placeholder="Enter skill and press Alt + , to add"
          />
        </div>
        <b v-for="(skill, index) in skills" v-bind:key="index">
          <span class="skill-pill" v-on:click="removeSkill(skill)"
            >{{ index + 1 }} {{ skill }}</span
          >
        </b>
        <div>
          <label for="role">Role :</label>
          <select id="role" v-model="role">
            <option value="" selected>select role</option>
            <option value="web developer">Web Developer</option>
            <option value="FrontEnd Developer">FrontEnd Developer</option>
            <option value="BackEnd Developer">BackEnd Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
          </select>
        </div>
        <div>
          <input type="checkbox" v-model="checked" />
          <lebel for="term">Accecpt term and Condition</lebel>
        </div>
        <div>
          <div>
            <input type="checkbox" value="Tushar" v-model="names" />
            <lebel for="term">Tushar</lebel>
          </div>
          <div>
            <input type="checkbox" value="Mayur" v-model="names" />
            <lebel for="term">Mayur</lebel>
          </div>
          <div>
            <input type="checkbox" value="Yash" v-model="names" />
            <lebel for="term">Yash</lebel>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      <!-- <h1 v-text="test"></h1> -->
      <Ref ref="componentRef" />
      <p>Name : {{ name }}</p>
      <p>Email : {{ email }}</p>
      <p>Role :{{ role }}</p>

      <p v-show="checked">Term and Condition Accepted</p>
      <p>{{ names }}</p>
    </div>
  </div>
</template>
<script>
import Ref from "./Ref.vue";
import { ref, onMounted } from "vue";
export default {
  name: "user-form",
  setup() {
    let passwordRef = ref(null);
    onMounted(() => {
      passwordRef.value.focus();
    });
    return {
      passwordRef,
    };
  },
  components: {
    Ref,
  },

  mounted() {
    console.log(this.$refs.componentRef);
    // console.log(this.$refs.inputRef);
    // this.$refs.inputRef.focus();
  },
  data() {
    return {
      test: "V-text replace entire content of tag",
      name: "",
      email: "",
      password: "",
      role: "web developer",
      checked: false,
      names: [],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      console.log(e);
      if (e.key === "," && this.tempSkill) {
        //to avoid duplicate values
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((item) => item != skill);
    },
    handleSubmit() {
      if (!this.checked) {
        alert("Please Read Term and condition");
        return;
      }

      if (this.password) {
        console.log("Form Submit");
        console.log(this.name);
        console.log(this.email);
        console.log(this.password);
        console.log(this.role);
        console.log(this.skills);
      } else {
        this.passwordError =
          this.password.length > 5
            ? ""
            : "Password must be greater then 5 character";
      }
    },
  },
  watch: {
    role: {
      handler(newValue, oldValue) {
        console.log(`Old Value:${oldValue} , newValue:${newValue}`);
        console.log("calling api...");
      },
      deep: true,
    },
    password: {
      handler() {
        this.passwordError =
          this.password.length > 5
            ? ""
            : "Password must be greater then 5 character";
      },
    },
  },
};
</script>
<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="password"],
select,
button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.skill-pill {
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
}

.form-output {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

@media only screen and (max-width: 900px) {
  form {
    width: 80vw;
  }
}
</style>
