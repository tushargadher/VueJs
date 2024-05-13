<template>
  <div>
    <h1>Aboout page</h1>

    <!-- No content provided for the default slot -->
    <!-- This will display "Default Slot" -->
    <ReusebleComponent />

    <ReusebleComponent>
      <p>When the value passes i will display</p>
    </ReusebleComponent>

    <ReusebleComponent>
      <!-- content slot  -->
      <template v-slot:content>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
          alt="img"
          srcset=""
        />
      </template>

      <!-- caption slot -->

      <template #caption>
        <b>Sunset under the tree</b>
      </template>
    </ReusebleComponent>

    <!-- using slots props -->
    <ReusebleComponent>
      <!-- content slot  -->
      <template v-slot:content="props">
        {{ props.content }}
      </template>

      <!-- caption slot -->

      <template #caption="props">
        {{ props.caption }}
      </template>
    </ReusebleComponent>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background-color: rgb(241, 241, 241);
  height: 100vh;
}
img {
  width: 100px;
}
</style>
