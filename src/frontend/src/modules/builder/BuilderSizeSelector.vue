<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <SelectorItem
          v-for="(size, index) in sizes"
          :key="size.id"
          :class="diameterInputClasses(size)"
          name="diameter"
          :value="PIZZA_SIZE_STRING[size.id]"
          :checked="index === 0"
          :label="size.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "../../common/components/SelectorItem.vue";

const PIZZA_SIZE_STRING = {
  1: "small",
  2: "normal",
  3: "big",
};

export default {
  name: "BuilderSizeSelector",
  components: { SelectorItem },
  props: {
    sizes: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      PIZZA_SIZE_STRING,
    };
  },
  methods: {
    diameterInputClasses(size) {
      return [
        "diameter__input",
        `diameter__input--${PIZZA_SIZE_STRING[size.id]}`,
      ];
    },
  },
};
</script>

<style scoped></style>
