<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector :doughs="doughs" />

          <BuilderSizeSelector :sizes="sizes" />

          <BuilderIngredientsSelector
            :sauces="sauces"
            :ingredients="ingredients"
          />

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <BuilderPizzaView />
            </div>

            <div class="content__result">
              <BuilderPriceCounter />
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

import BuilderDoughSelector from "../modules/builder/BuilderDoughSelector.vue";
import BuilderSizeSelector from "../modules/builder/BuilderSizeSelector.vue";
import BuilderIngredientsSelector from "../modules/builder/BuilderIngredientsSelector.vue";
import BuilderPizzaView from "../modules/builder/BuilderPizzaView.vue";
import BuilderPriceCounter from "../modules/builder/BuilderPriceCounter.vue";

export default {
  name: "IndexPage",
  components: {
    BuilderPriceCounter,
    BuilderPizzaView,
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderDoughSelector,
  },
  data() {
    return {
      user,
      ingredients: pizza.ingredients,
      sauces: pizza.sauces,
      sizes: pizza.sizes,
      doughs: pizza.dough,
      misc,
    };
  },
};
</script>

<style></style>
