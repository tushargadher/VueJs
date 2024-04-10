<template>
  <h1>Job Details</h1>

  <p>The Job Id is {{ id }}</p>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: "JobDetails",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
