<template>
  <ul class="flex-wrap">
    <li
      v-for="(item, index) in data"
      :key="item.id"
      :class="
        activeTabIndex === index
          ? 'w-[115px] cursor-pointer bg-[#3d88aa] text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]'
          : 'w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]'
      "
      @click.prevent="activeTabIndex = index"
    >
      <div class="tab-left w-2/3 flex flex-col">
        <span class="text-xs font-bold">{{ item.title }}</span>
        <span class="text-xs font-thin">{{
          timeAgo(item.created_at, true)
        }}</span>
      </div>

      <div class="tab-right w-1/3 relative">
        <span
          class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
          >{{ item.bias.description }}</span
        >

        <component class="text-sm" :is="biasArrowsMap[item.bias.key]" />
      </div>
    </li>
  </ul>

  <div class="post-graphic">
    <img
      :src="data[activeTabIndex].chart_url"
      @error="brokenImage"
      class="mt-10"
    />
  </div>
</template>
<script setup>
import Arrow1 from "./icons/Arrow1.vue";
import Arrow2 from "./icons/Arrow2.vue";
import Arrow3 from "./icons/Arrow3.vue";
import Arrow4 from "./icons/Arrow4.vue";
import Arrow5 from "./icons/Arrow5.vue";
import Arrow6 from "./icons/Arrow6.vue";
import Arrow7 from "./icons/Arrow7.vue";
import Arrow8 from "./icons/Arrow8.vue";
import { ref } from "vue";
import { timeAgo } from "../utils/helper";
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

const props = defineProps({
  data: Object,
});
const activeTabIndex = ref(0);

/**
 * Image url bozuksa
 * @param {object} event
 */
function brokenImage(event) {
  event.target.src = "no-image.jpg";
}
</script>

<style scoped>
.tab-right:hover .hidden,
.title-arrow:hover .hidden {
  display: block;
}
</style>
