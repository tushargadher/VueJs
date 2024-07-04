<template>
  <div>
    <div class="listing-footer">
      <coreDropDown
        label="Items Par Page"
        @input="updateParPage"
        :value="parPage"
        :options="parPageOptions"
        name="pageSize - filter"
        id="pageSize - filter"
      />
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["parPage", "parPageOptions"]),
  },
  methods: {
    ...mapActions(["updateParPage"]),
    updateParPage(value) {
      this.$store.dispatch("updateParPage", {
        parPage: value,
        route: this.$route,
        router: this.$router,
      });
    },
  },
};
</script>

<style scoped>
.listing-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
