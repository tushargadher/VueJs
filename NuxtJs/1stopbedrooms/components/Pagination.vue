<template>
  <div class="pagination">
    <ul>
      <li
        v-for="page in pages"
        :key="page"
        :class="{ active: page === currentPage }"
      >
        <a @click="changePage(page)">{{ page }}</a>
      </li>
      <li v-if="currentPage < totalPages - 7">...</li>
      <li v-if="currentPage < totalPages - 6" @click="changePage(totalPages)">
        {{ totalPages }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      let start = Math.max(this.currentPage - 3, 1);
      let end = Math.min(this.currentPage + 3, this.totalPages);

      if (end - start < 6) {
        if (start === 1) {
          end = Math.min(start + 6, this.totalPages);
        } else if (end === this.totalPages) {
          start = Math.max(end - 6, 1);
        }
      }

      let pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      this.$router.push({ query: { ...this.$route.query, page } });
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth scrolling
      });
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
}
.pagination ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.pagination li {
  margin: 0 5px;
}

.pagination li a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  border-radius: 100%;
  background-color: transparent;
  color: black;
  text-decoration: none;
}

.pagination li.active a {
  font-weight: bold;
  background-color: #0e259a;
  color: white;
  width: 30px;
  height: 30px;
}

.pagination a {
  cursor: pointer;
}
</style>
