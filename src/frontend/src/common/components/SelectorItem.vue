<template>
  <label>
    <input
      type="radio"
      :name="name"
      :value="value"
      class="visually-hidden"
      :checked="checked"
    />
    <span v-if="!hasDefaultSlot">{{ label }}</span>
    <slot />
  </label>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
  },
};
</script>

<style scoped></style>
