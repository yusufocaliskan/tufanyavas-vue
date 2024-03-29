<template>
  <Modal :isModalActive="isModalActive" @close="isModalActive = false">
    <IntradayUpdateModalPost :intradayUpdates="intraday_updates" />
  </Modal>
  <Modal
    :isModalActive="isImageModalPreviewActive"
    @close="isImageModalPreviewActive = false"
  >
    <Tabs :data="imageModalData" />
  </Modal>
  <div
    v-if="isMobile == false"
    class="flex sm:block border-[1px] border-r-0 border-t-0 border-b-gray dark:border-gray-600"
  >
    <div class="flex space-x-4">
      <a
        class="flex justify-center w-2/2 items-center text-[#39769f] border-b-[3px] border-[#39769f] p-6 text-sm font-bold dark:text-[#51a4dc]"
      >
        <ThunderBoltIcon />
        Intraday Updates
      </a>
    </div>
  </div>
  <!-- Intraday-Header -->

  <div class="intraday-body flex flex-col">
    <div class="flex items-center pl-3 mt-3 intraday-checkbox">
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
        <div class="flex w-2/3 space-x-3 items-center">
          <h1 class="font-bold">{{ item.name }}</h1>
          <FXIcon />
        </div>
        <div class="w-1/3">
          <span class="flex text-sm text-gray-500 intraday-post-time">{{
            timeAgo(item.published_to_iu_at)
          }}</span>
        </div>
      </div>
      <div class="intraday-post-body flex mt-3">
        <div class="flex w-2/3 text-sm">
          <p>Updated on 27.03.2023 – 16:42 (UTC +1)</p>
        </div>
        <div class="flex w-1/3 text-sm">
          <div
            class="intraday-graphic relative flex w-[80px] h-[70px] cursor-pointer border-[1px] border-gray-200 rounded over"
          >
            <div
              class="flex items-center justify-center"
              v-lazy-container="{
                selector: 'img',
                error: 'no-image.jpg',
                loading: 'loading.gif',
              }"
            >
              <img
                :data-src="item.charts[0].chart_url"
                @error="brokenImage"
                class="w-[80px] h-[70px]"
                @click.prevent="openImagePreview(item.charts)"
              />
            </div>
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
              <PlusIcon @click.prevent="openModal(item.intraday_updates)" />
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
import ThunderBoltIcon from "./icons/ThunderBoltIcon.vue";
import Fobbex from "../store/fobbex.json";
import { filteredItems, timeAgo } from "../utils/helper";
import Modal from "./Modal.vue";
import IntradayUpdateModalPost from "./IntradayUpdateModalPost.vue";
import { convertedDate } from "../utils/helper";
import Tabs from "./Tabs.vue";
import BackArrow from "./icons/BackArrow.vue";

const probs = defineProps({
  isMobile: { type: Boolean, default: false },
});

//------------- Modal -------------
const isModalActive = ref(false);
const intraday_updates = ref([]);

const isImageModalPreviewActive = ref(false);
const imageModalData = ref([]);

/**
 * Modal'ı aç ve verileri göster.
 * @param {object} updates
 */
function openModal(updates) {
  isModalActive.value = true;
  intraday_updates.value = updates;
}

/**
 * Resmin üzerine tıklandığında ön izlem yapar.
 * @param {object} charts image önizlem
 */
function openImagePreview(charts) {
  isImageModalPreviewActive.value = true;
  imageModalData.value = charts;
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

<style scope>
img[lazy="loading"] {
  width: 100%;
}
</style>
