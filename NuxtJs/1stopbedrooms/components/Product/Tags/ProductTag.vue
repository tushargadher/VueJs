<template>
  <div :class="['productBadge', badgeClass]">
    <template v-if="isSpecialCase">
      <span class="text-white">{{ specialText[0] }}</span>
      <span class="text-orange">{{ specialText[1] }}</span>
    </template>
    <template v-else>
      {{ formattedText }}
    </template>
  </div>
</template>

<script>
export default {
  name: "ProductBadge",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    badgeClass() {
      return this.text.toLowerCase().replace(" ", "-");
    },
    formattedText() {
      return (
        this.text.charAt(0).toUpperCase() + this.text.slice(1).toLowerCase()
      );
    },
    isSpecialCase() {
      return this.text.toLowerCase() === "daily_deal";
    },
    specialText() {
      return ["Daily", "Deal"];
    },
  },
};
</script>

<style scoped>
.productBadge {
  position: absolute;
  left: 0px;
  padding: 5px 10px;
  color: white;
  background-color: black;
  font-size: 0.7rem;
  border-bottom-right-radius: 20px;
  font-weight: bold;
  z-index: 100;
}
.productBadge.daily_deal {
  background-color: #0e259a;
}
.productBadge.clearance {
  background-color: #e55300;
}

.text-white {
  color: white;
}
.text-orange {
  color: #f88030;
}
</style>
