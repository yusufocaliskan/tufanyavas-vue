<template>
  <div id="content" class="flex flex-wrap">
    <div
      class="left-content-side flex flex-wrap lg:w-2/3 md:w-2/3 xl:w-2/3 w-full h-screen"
    >
      <div class="main-content flex-row w-full overflow-y-auto">
        <!-- Sub Categories -->
        <div class="content-wrapper flex">
          <div
            class="content-menu hidden border-r-[1px] lg:block lg:w-1/5 h-screen overflow-y-auto"
          >
            <!-- <Instruments @postId="handlePostId" /> -->
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
                  @click.prevent="setPostIndex(index)"
                  v-for="(item, index) in list_data"
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
          </div>

          <PostSection ref="postSection" />
          <!-- content-wrapper-->
        </div>
        <!-- content:menu -->
      </div>
      <!-- main:content -->
    </div>
    <div
      class="right-side lg:w-1/3 md:w-1/3 xl:w-1/3 w-full h-screen overflow-y-auto bg-[#f0f3f5]"
    >
      <IntradayUpdates />
    </div>
    <!-- Intraday Updates -->
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, watch } from "vue";

//components
import Navigation from "../components/Navigation.vue";

import PostSection from "../components/PostSection.vue";
import IntradayUpdates from "../components/IntradayUpdates.vue";
import Fobbex from "../store/fobbex.json";
import Modal from "../components/Modal.vue";
import IntradayUpdateModalPost from "../components/IntradayUpdateModalPost.vue";

import SearchBox from "../components/SearchBox.vue";
import Star from "../components/icons/Star.vue";
import StarFilled from "../components/icons/StarFilled.vue";
import NoResult from "../components/icons/NoResult.vue";
import BackArrow from "../components/icons/BackArrow.vue";

//Instrumentslerden arama yapıldığında.
//veriyi tutar
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
function go_back() {
  input_data.value.value = "";
  list_data = ref(Fobbex);
}

/**
 * Keyword'e göre filtler..
 * @param {string} keyword aranacak kelime
 */
function filteredItems(data, keyword) {
  return data.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });
}

//Modal'ı kontrol eder
const isModalActive = ref(false);

//Modal içi postlar
const getIntradayUpdates = ref([]);

//post ref
const postSection = ref();

function scroll2ThePost() {
  console.log("HOME SCROOLL");
}

function setPostIndex(itemIndex) {
  postSection.value.scroll2ThePost(itemIndex);
}

/**
 * Child Component'ten intraday-updates id'leri alır.
 * @param {object} updates
 */
function setIntradayUpdates(updates) {
  getIntradayUpdates.value = updates;
}

// const navigation = computed(() => store.state.navigation);
// const sub_categories = computed(() => store.state.sub_categories);
// const left_categories = computed(() => store.state.left_categories);
</script>
