<template>
  <Modal :isModalActive="isModalActive" @close="isModalActive = false">
    <IntradayUpdateModalPost :intradayUpdates="intraday_updates" />
  </Modal>
  <div
    class="content-right p-10 w-full h-screen overflow-y-auto"
    ref="postContainer"
  >
    <div class="post-section">
      <div
        v-for="item in Fobbex"
        :key="item.id"
        class="post post-{{item.id}} flex border-b-[1px] pb-10 mb-10"
        ref="postList"
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
            <span>{{ timeAgo(item.published_to_iu_at) }}</span>
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

            <!-- <UpdateNotes /> -->
          </div>
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
import UpdateNotes from "../components/UpdateNotes.vue";
import IntradayUpdateModalPost from "../components/IntradayUpdateModalPost.vue";
import Modal from "../components/Modal.vue";
import { watch, ref, nextTick, onMounted, markRaw } from "vue";
import { timeAgo } from "../utils/helper";

const intraday_updates = ref([]);
const isModalActive = ref(false);

const emit = defineEmits(["scroll2ThePost", "intradayUpdates"]);
const postList = ref();
const postContainer = ref();

/**
 * Instruments'lerden tıklandığında aynı index'e (Id değil)
 * sahip posta gider.
 * @param {integer} itemIdex
 */
function scroll2ThePost(itemIdex) {
  const postList = this.$refs.postList;
  const postContainer = this.$refs.postContainer;
  const postIndex = postList[itemIdex];
  const postOffset = postIndex.offsetTop + 50;
  // const firstPostOffset = postList[0].offsetTop;
  // const scrollOffset = postOffset - firstPostOffset;
  postContainer.scrollTo({
    top: postOffset,
    behavior: "smooth",
  });

  //post.scrollIntoView({ behavior: "smooth" });
}

/**
 * verileri set eder
 * @param {object} updates
 */
function setIntradayUpdates(updates) {
  emit("intradayUpdates", updates);
}

//Methodu dışarı aktar
defineExpose({
  scroll2ThePost,
});

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
//iconları id'ye göre alıyoruz.
const biasArrowsMap = {
  bias9: markRaw(Arrow1),
  bias1: markRaw(Arrow1),
  bias2: markRaw(Arrow2),
  bias3: markRaw(Arrow3),
  bias4: markRaw(Arrow4),
  bias5: markRaw(Arrow5),
  bias6: markRaw(Arrow6),
  bias7: markRaw(Arrow7),
  bias8: markRaw(Arrow8),
};
</script>
