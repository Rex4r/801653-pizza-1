<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <SelectorItem
          v-for="(dough, index) in doughs"
          :key="dough.id"
          :class="doughLabelClasses(dough)"
          name="dought"
          :value="doughInputValue(dough)"
          :checked="index === 0"
        >
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </SelectorItem>
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from "../../common/components/SelectorItem.vue";

export default {
  name: "BuilderDoughSelector",
  components: { SelectorItem },
  props: {
    doughs: {
      type: Array,
      require: true,
    },
  },
  methods: {
    doughLabelClasses(dough) {
      return [
        "dough__input",
        `dough__input--${dough.id === 1 ? "light" : "large"}`,
      ];
    },
    doughInputValue(dough) {
      return dough.id === 1 ? "light" : "large";
    },
  },
};
</script>

<style scoped></style>
