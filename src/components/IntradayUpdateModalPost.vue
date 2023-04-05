<template>
  <div
    v-for="item in intradayUpdates"
    :key="item"
    class="intraday-post jutify-center items-center flex-colm p-10 mb-5 border-b-[1px] border-b-gray-200 dark:border-b-gray-600 dark:bg-[#34393e]"
  >
    <div class="flex w-full">
      <div class="post-title flex items-center">
        <h1 class="text-xl">EURUSD</h1>

        <div class="post-star flex">
          <Star />
          <!-- <StarFilled /> -->
        </div>
      </div>
    </div>
    <div class="post-time pb-5 w-full flex pt-2 text-sm flex-col text-gray-400">
      <span>3 days ago</span>
    </div>
    <div class="flex w-full mt-5 items-center justify-center">
      <img src="eurusd.png" />
    </div>
  </div>
</template>
<script setup>
import { markRaw } from "vue";
import Star from "./icons/Star.vue";

const props = defineProps({
  intradayUpdates: Object,
});
</script>
