<template>
  <div>JOB componrt</div>
  <div v-for="(job, index) in jobDetails" v-bind:key="job.id" class="Box">
    <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
      <!-- same as -->
      <!-- <router-link :to="`/job/${job.id}`"> -->
      <div>
        <b>No</b> <span>{{ index + 1 }}</span>
      </div>
      <div>
        <b>Id</b> <span>{{ job.id }}</span>
      </div>
      <div>
        <b>Title</b> <span>{{ job.title }}</span>
      </div>
      <div>
        <b>Company</b> <span>{{ job.company }}</span>
      </div>
      <div>
        <b>Location</b> <span>{{ job.location }}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: "Job",
  data() {
    return {
      jobDetails: [
        {
          id: 1,
          title: "Software Engineer",
          company: "TechCo",
          location: "San Francisco",
        },
        {
          id: 2,
          title: "Data Analyst",
          company: "DataCorp",
          location: "New York",
        },
        {
          id: 3,
          title: "UX Designer",
          company: "DesignHub",
          location: "Seattle",
        },
        {
          id: 4,
          title: "Marketing Manager",
          company: "BrandGuru",
          location: "Los Angeles",
        },
      ],
    };
  },
};
</script>
<style scoped>
.Box {
  margin: 10px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
