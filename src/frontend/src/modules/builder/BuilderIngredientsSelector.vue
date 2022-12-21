<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <RadioButton
            v-for="(sauce, index) in sauces"
            :key="sauce.id"
            name="sauce"
            :value="PIZZA_SAUCE_STRING[sauce.id]"
            :checked="index === 0"
            :label="sauce.name"
          />
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <span :class="fillingCLasses(ingredient)">
                {{ ingredient.name }}
              </span>

              <ItemCounter class="ingredients__counter" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIngredientImgName } from "@/common/helpers.js";
import RadioButton from "../../common/components/RadioButton.vue";
import ItemCounter from "../../common/components/ItemCounter.vue";

const PIZZA_SAUCE_STRING = {
  1: "tomato",
  2: "creamy",
};

export default {
  name: "BuilderIngredientsSelector",
  components: {
    ItemCounter,
    RadioButton,
  },
  props: {
    sauces: {
      type: Array,
      require: true,
    },
    ingredients: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      PIZZA_SAUCE_STRING,
    };
  },
  methods: {
    fillingCLasses(ingredient) {
      return ["filling", `filling--${getIngredientImgName(ingredient)}`];
    },
  },
};
</script>

<style scoped></style>
