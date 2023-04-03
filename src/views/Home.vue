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
            <Instruments />
          </div>

          <div class="content-right p-10 w-full h-screen overflow-y-auto">
            <PostSection />
          </div>
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
import { ref } from "vue";
// import store from "../store/";

//components
import Navigation from "../components/Navigation.vue";
import Instruments from "../components/Instruments.vue";
import PostSection from "../components/PostSection.vue";
import IntradayUpdates from "../components/IntradayUpdates.vue";
import Fobbex from "../store/fobbex.json";
import Modal from "../components/Modal.vue";
import IntradayUpdateModalPost from "../components/IntradayUpdateModalPost.vue";

const isModalActive = ref(false);
const getIntradayUpdates = ref([]);

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
