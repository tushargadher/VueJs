<template>
  <div class="slot">
    <p>Slot Exmaple</p>

    <!-- value this slot is only display when no data are passed in child  -->
    <!-- Render default slot only if no named slots have content -->
    <slot v-if="!$slots.content && !$slots.caption">Defalut Slot</slot>

    <!-- <slot name="content" content="default content"></slot>

    <slot name="caption" caption="Defailt"></slot> -->

    <slot name="content" :content="defaultContent"></slot>

    <slot name="caption" :caption="defaultCaption"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultContent: "Provide Content",
      defaultCaption: "Provide Caption Value",
    };
  },
};
</script>

<style scoped>
.slot {
  margin: 20px;
  border: 1px solid black;
  width: 20%;
  height: 20%;
}
</style>
