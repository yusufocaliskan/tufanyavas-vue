<template>
  <!-- Search-box -->
  <SearchBox
    @search_for="search_for"
    :data="input_data"
    class="p-4 outline-none border-b-[1px]"
  />
  <!--end: search-box -->
  <div class="instruments left-content-menu flex overflow-y-auto">
    <ul class="flex flex-col w-50">
      <li @click="go_back" v-if="input_data.value != ''">
        <a
          class="text-sm cursor-pointer flex w-60 hover:bg-gray-500 hover:text-white font-bold border-b-[1px] text-neutral-900 p-4"
          href="#"
        >
          <BackArrow class="mr-5" /> GO BACK</a
        >
      </li>
      <li
        class="flex border-b-[1px] items-center text-sm bg-white hover:bg-[#3d88aa] hover:text-white"
        v-for="item in list_data"
        :key="item.id"
      >
        <!-- <Star v-if="item.stared == false" />
        <StarFilled v-if="item.stared == true" /> -->

        <a class="flex font-bold w-60 text-neutral-900 p-4" href="#">
          {{ item.name }}</a
        >
      </li>

      <li class="flex" v-if="list_data.length == 0">
        <span
          class="items-center font-regular flex justify-center p-3 text-gray-400"
        >
          <NoResult class="mr-2" /> No result</span
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../store/";
import Fobbex from "../store/fobbex.json";
import SearchBox from "./SearchBox.vue";
import Star from "./icons/Star.vue";
import StarFilled from "./icons/StarFilled.vue";
import NoResult from "./icons/NoResult.vue";
import BackArrow from "./icons/BackArrow.vue";

const input_data = ref({
  value: "",
});
let list_data = ref(Fobbex);

const search_for = computed(() => {
  list_data = filteredItems(Fobbex, input_data.value.value);
});

/**
 * Arama yapıldıktan sonra gider
 */
const go_back = () => {
  input_data.value.value = "";
  list_data = ref(Fobbex);
};

/**
 * Keyword'e göre filtler..
 * @param {string} keyword aranacak kelime
 */
function filteredItems(data, keyword) {
  return data.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });
}
</script>
