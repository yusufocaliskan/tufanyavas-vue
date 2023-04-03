<template>
  <Modal :isModalActive="isModalActive" @close="isModalActive = false">
    <IntradayUpdateModalPost :intradayUpdates="intraday_updates" />
  </Modal>
  <div class="post-section">
    <div
      v-for="item in Fobbex"
      :key="item.id"
      class="post flex border-b-[1px] pb-10 mb-10"
    >
      <div class="post-left w-full">
        <div class="post-title flex items-center">
          <h1 class="text-xl font-bold">{{ item.name }}</h1>

          <div class="post-star flex">
            <Star />
            <!-- <StarFilled /> -->

            <div class="title-arrow cursor-pointer relative ml-5">
              <span
                class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
                >{{ item.bias.description }}</span
              >
              <component :is="biasArrowsMap[item.bias.key]" />
            </div>
          </div>
        </div>
        <div class="post-time pb-5 pt-2 text-sm flex flex-col text-gray-400">
          <span>{{ item.published_to_iu_at }}</span>
        </div>
        <div class="post-body text-gray-700">
          <div class="tabs">
            <Tabs :data="item.charts" />
          </div>
          <div class="flex mt-5">
            <a
              href=""
              @click.prevent="openModal(item.intraday_updates)"
              class="text-[#3d88aa] hover:text-[#56a8ce]"
              >View Intraday Updates</a
            >
          </div>

          <!-- <div
            class="trading-notes flex-col p-5 mt-10 rounded border-[1px] bg-[rgba(57,118,159,0.1)]"
          >
            <div class="trading-note-body flex space-x-10 p-2">
              <span class="note-time font-bold">11d</span>
              <span class="note-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                lacus auctor,</span
              >
            </div>
            <div class="trading-note-body flex space-x-10 p-2">
              <span class="note-time font-bold">11d</span>
              <span class="note-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                lacus auctor Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed ac lacus auctorLorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ac lacus auctorLorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ac lacus auctor Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed ac lacus
                auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ac lacus auctor</span
              >
            </div>
            <div class="trading-note-body flex space-x-10 p-2">
              <span class="note-time font-bold">11d</span>
              <span class="note-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                lacus auctor Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed ac lacus auctorLorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ac lacus auctor,</span
              >
            </div>
            <div class="more-updates flex justify-center mt-5">
              <a class="text-[#3d88aa] font-semibold" href="#">Show Updates</a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tab-right:hover .hidden,
.title-arrow:hover .hidden {
  display: block;
}
</style>
<script setup>
import Arrow1 from "./icons/Arrow1.vue";
import Arrow2 from "./icons/Arrow2.vue";
import Arrow3 from "./icons/Arrow3.vue";
import Arrow4 from "./icons/Arrow4.vue";
import Arrow5 from "./icons/Arrow5.vue";
import Arrow6 from "./icons/Arrow6.vue";
import Arrow7 from "./icons/Arrow7.vue";
import Arrow8 from "./icons/Arrow8.vue";
import Star from "./icons/Star.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import StarFilled from "./icons/StarFilled.vue";
import Fobbex from "../store/fobbex.json";
import Tabs from "../components/Tabs.vue";
import IntradayUpdateModalPost from "../components/IntradayUpdateModalPost.vue";
import Modal from "../components/Modal.vue";
import { ref } from "vue";
const intraday_updates = ref([]);
const isModalActive = ref(false);
function setIntradayUpdates(updates) {
  console.log(updates);
  $emit("intradayUpdates", updates);
}

/**
 * Modal'ı aç ve verileri göster.
 * @param {object} updates
 */
function openModal(updates) {
  isModalActive.value = true;
  intraday_updates.value = getData(updates);
}

/**
 * Denk verileri serverdan çek ve listele..
 * @param {*} data
 */
function getData(data) {
  return data;
}
//icons
const biasArrowsMap = {
  bias9: Arrow1,
  bias1: Arrow1,
  bias2: Arrow2,
  bias3: Arrow3,
  bias4: Arrow4,
  bias5: Arrow5,
  bias6: Arrow6,
  bias7: Arrow7,
  bias8: Arrow8,
};
</script>
