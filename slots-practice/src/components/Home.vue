<template>
  <div>
    <h1>Slots example</h1>

    <!-- <card content="this is card data" /> -->
    <!-- now what if we have to send other data like html or image in that case slots are useful -->
    <card></card>
    <card><h1>This is Card Data</h1></card>
    <card>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapvMfWqZz4iz7WrdT83L8jEfM1MJuSy0tKNlVchrp_NgAQ8trkW8W0UmndMduOD_N_JE&usqp=CAU"
        alt=""
      />
    </card>

    <card>
      <!-- when we have multiple slot in our component then we give name each slot -->
      <template v-slot:header>
        <h1>VueJs</h1>
      </template>
      <template v-slot:default
        ><p>Vuejs is open source javascript framwork</p>
      </template>
      <template v-slot:footer>
        <button>
          <a href="http://vuejs.org">Learn Vue</a>
        </button>
      </template>
    </card>

    <!-- example of slot props -->
    <NameComponent>
      <template v-slot:default="slotProps">
        {{ slotProps.lastname }} {{ slotProps.firstname }}
      </template>

      <template v-slot:lastname="slotProps">
        {{ slotProps.lastname }}
      </template>
    </NameComponent>
  </div>
</template>

<script>
import card from "./Card.vue";
import NameComponent from "./Name.vue";
export default {
  /* eslint-disable */
  name: "Home",
  components: {
    card,
    NameComponent,
  },
};
</script>

<style lang="scss" scoped></style>
