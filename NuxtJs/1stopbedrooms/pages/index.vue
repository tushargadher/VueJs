<template>
  <div>
    <div v-if="slug" class="container">
      <FilterContainer />
      <ListingContainer />
    </div>
    <div v-else>
      <Home />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapState(["facet", "page", "sortBy", "parPage", "loading"]),
    slug() {
      return this.$route.path === "/" ? "" : this.$route.path;
    },
  },
  created() {
    const query = this.$route.query;
    this.initializeStateFromRoute(this.$route);
    this.initializePage(query);
  },
  watch: {
    "$route.query.sortBy": {
      handler(value) {
        this.updateSortBy(value || "RELEVANCE");
        if (this.slug) {
          this.getProducts(this.slug);
        }
      },
    },
    "$route.query.parPage": {
      handler(value) {
        this.updateParPage(value || "PER_PAGE_36");
        if (this.slug) {
          this.getProducts(this.slug);
        }
      },
    },
    "$route.query.page": {
      handler(value) {
        this.updatePage(parseInt(value) || 1);
        if (this.slug) {
          this.getProducts(this.slug);
        }
      },
    },
    facet: {
      handler() {
        if (this.slug) {
          this.getProducts(this.slug);
        }
      },
      deep: true,
    },
  },
  methods: {
    async initializePage(query) {
      if (this.slug) {
        await this.getProducts(this.slug);
      }
      this.parseFacetFromQuery(query);
      this.parseBadgeFromQuery(query);
    },
    ...mapActions([
      "getProducts",
      "parseFacetFromQuery",
      "parseBadgeFromQuery",
      "updateSortBy",
      "updateParPage",
      "updatePage",
      "initializeStateFromRoute",
    ]),
    updateSortBy(value) {
      if (this.slug) {
        this.$store.dispatch("updateSortBy", {
          sortBy: value,
          route: this.$route,
          router: this.$router,
        });
      }
    },
    updateParPage(value) {
      if (this.slug) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.$store.dispatch("updateParPage", {
          parPage: value,
          route: this.$route,
          router: this.$router,
        });
      }
    },
    updatePage(value) {
      if (this.slug) {
        this.$store.dispatch("updatePage", {
          page: value,
          route: this.$route,
          router: this.$router,
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 0 10px;
}
@media only screen and (max-width: 1280px) {
  .container {
    padding: 0 10px;
  }
}
</style>
