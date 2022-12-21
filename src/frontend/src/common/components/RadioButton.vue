<template>
  <label class="radio ingredients__input">
    <input type="radio" :name="name" :value="value" :checked="checked" />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
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
};
</script>

<style scoped></style>
