<template>
  <div class="filterBox-container">
    <div class="title">
      <b>{{ filterData.title }}</b>
    </div>
    <div class="checkbox-container">
      <div
        class="checkbox"
        v-for="(options, index) in filterData.facets"
        :key="index"
      >
        <input
          type="checkbox"
          :id="'checkbox_' + filterData.attrCode + '_' + index"
          :name="options.attrLabel"
          :value="options.attrValue"
          :checked="isSelected(filterData.attrCode, options.attrValue)"
          @change="
            handleCheckboxChange(filterData.attrCode, options.attrValue, $event)
          "
        />
        <label :for="'checkbox_' + filterData.attrCode + '_' + index">
          {{ options.attrLabel }}
        </label>
        <p class="item-count">({{ options.itemCount }})</p>
      </div>
    </div>
  </div>
</template>

<script>
// attrCode                       attrValue
// [{attributeCode: "bed_type", value: ["13900"]}
export default {
  props: {
    filterData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedFilters: {},
    };
  },
  created() {
    const query = this.$route.query;
    // Initialize selected filters from query parameters
    for (const key in query) {
      if (key !== "sortBy" && key !== "parPage" && key !== "page") {
        this.selectedFilters[key] = query[key].split("$");
      }
    }
  },
  methods: {
    handleCheckboxChange(attrCode, attrValue, event) {
      const isChecked = event.target.checked;
      this.$emit("filter-change", { attrCode, attrValue, isChecked });
    },
    isSelected(attrCode, attrValue) {
      return (
        this.selectedFilters[attrCode] &&
        this.selectedFilters[attrCode].includes(attrValue)
      );
    },
  },
};
</script>

<style scoped>
.filterBox-container {
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  height: 40vh;
  overflow-y: scroll;
  padding: 10px;
}
.checkbox {
  display: flex;
  opacity: 0.9;
}
label,
p {
  font-size: 0.9rem;
}
p {
  opacity: 0.7;
}
input[type="checkbox"] {
  margin-right: 6px;
}
</style>
