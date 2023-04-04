<template>
  <Modal :isModalActive="isModalActive" @close="isModalActive = false">
    <IntradayUpdateModalPost :intradayUpdates="intraday_updates" />
  </Modal>
  <div class="flex sm:block border-[1px] border-b-gray dark:border-gray-600">
    <div class="flex space-x-4">
      <a
        class="flex justify-center w-1/2 items-center text-[#39769f] border-b-[3px] border-[#39769f] p-6 text-sm font-bold dark:text-[#51a4dc]"
      >
        <ThuderBoltIcon />
        Intraday Updates
      </a>
    </div>
  </div>
  <!-- Intraday-Header -->

  <div class="intraday-body flex flex-col">
    <div class="flex items-center pl-3 intraday-checkbox">
      <input
        id="vue-checkbox-list"
        type="checkbox"
        value=""
        class="w-5 h-5 text-[#3583a7] bg-gray-900 border-gray-100 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="vue-checkbox-list"
        class="w-full py-3 ml-2 text-sm font-regular text-gray-400 dark:text-gray-300"
        >Charts Updates</label
      >
    </div>

    <div class="intraday-searchbox flex p-3">
      <SearchBox
        @search_for="search_for"
        :data="input_keyword"
        class="w-full p-3 bg-gray-200 dark:bg-[#454a4f]"
      />
    </div>

    <div
      v-for="item in list_data"
      :key="item.id"
      class="intraday-post p-5 border-b-[1px] border-gray-200 dark:border-gray-600"
    >
      <div class="flex post-header items-center">
        <div class="flex w-4/5 space-x-3 items-center">
          <h1 class="font-bold">{{ item.name }}</h1>
          <FXIcon />
        </div>
        <div class="w-1/5">
          <span class="flex text-sm text-gray-500 intraday-post-time">{{
            timeAgo(item.published_to_iu_at)
          }}</span>
        </div>
      </div>
      <div class="intraday-post-body flex mt-3">
        <div class="flex w-2/3 text-sm">
          <p>
            {{ item.bias.description }}
          </p>
        </div>
        <div class="flex w-1/3 text-sm">
          <div
            class="intraday-graphic relative flex w-[80px] h-[70px] cursor-pointer border-[1px] border-gray-200 rounded over"
          >
            <img
              :src="item.charts[0].chart_url"
              @error="brokenImage"
              class="w-[80px] h-[70px]"
              @click.prevent="openModal(item.intraday_updates)"
            />
            <span
              class="text-[#3583a7] text-xs font-bold absolute top-1 left-1"
              >{{ item.charts[0].title }}</span
            >
            <span
              class="text-[#3583a7] text-xs font-bold absolute bottom-1 left-1"
            >
              21h
            </span>
            <span class="absolute right-1 bottom-1">
              <PlusIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import SearchBox from "./SearchBox.vue";
import FXIcon from "./icons/FXIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import ThuderBoltIcon from "./icons/ThuderBoltIcon.vue";
import Fobbex from "../store/fobbex.json";
import { filteredItems } from "../utils/helper";
import Modal from "./Modal.vue";
import IntradayUpdateModalPost from "./IntradayUpdateModalPost.vue";
import { timeAgo } from "../utils/helper";
//------------- Modal -------------
const isModalActive = ref(false);
const intraday_updates = ref([]);
/**
 * Modal'ı aç ve verileri göster.
 * @param {object} updates
 */
function openModal(updates) {
  isModalActive.value = true;
  intraday_updates.value = updates;
}

//------------------ Searching -------------
//arana kelime
const input_keyword = ref({ value: "" });

//Listelenecek veri.
let list_data = ref(Fobbex);

/**
 * Filterele
 */
const search_for = computed(() => {
  list_data = filteredItems(Fobbex, input_keyword.value.value);
});

/**
 * Image url bozuksa
 * @param {object} event
 */
function brokenImage(event) {
  event.target.src = "no-image.jpg";
}
</script>
