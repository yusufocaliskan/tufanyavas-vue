<template>
  <div class="flex sm:block border-[1px] border-b-gray">
    <div class="flex space-x-4">
      <a
        class="flex justify-center w-1/2 items-center text-[#39769f] border-b-[3px] border-[#39769f] p-6 text-sm font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          class="mdl-js mr-1"
        >
          <path
            fill="#39769F"
            fill-rule="nonzero"
            d="M13.266 6.118a.67.67 0 0 0-.598-.357H6.412L7.996.711a.637.637 0 0 0-.413-.664.682.682 0 0 0-.778.203L.138 8.57a.619.619 0 0 0-.07.673.67.67 0 0 0 .6.358h6.255l-1.584 5.05a.637.637 0 0 0 .413.664.686.686 0 0 0 .778-.204l6.666-8.32a.62.62 0 0 0 .07-.673z"
          />
        </svg>
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
      <!-- <SearchBox :data="input_data" inputClass="w-full p-3 bg-gray-200" />-->
    </div>

    <div
      v-for="item in Fobbex"
      :key="item.id"
      class="intraday-post p-5 border-b-[1px] border-gray-200"
    >
      <div class="flex post-header items-center">
        <div class="flex w-4/5 space-x-3 items-center">
          <h1 class="font-bold">{{ item.name }}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            class="mdl-js"
          >
            <g fill="none" fill-rule="evenodd">
              <path stroke="#32B5B5" stroke-width="1.2" d="M0 0H19.2V19.2H0z" />
              <text
                fill="#32B5B5"
                font-family="CircularStd-Bold, Circular Std"
                font-size="9.874"
                font-weight="bold"
              >
                <tspan x="3.661" y="13.474">FX</tspan>
              </text>
            </g>
          </svg>
        </div>
        <div class="w-1/5">
          <span class="flex text-sm text-gray-500 intraday-post-time">{{
            item.published_to_iu_at
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                class="mdl-js"
              >
                <g fill="none" fill-rule="evenodd">
                  <path fill="#3583A7" d="M0 0h14v14H0z" />
                  <g stroke="#FFF">
                    <path d="M7 3.5v7M3.5 7h7" />
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import SearchBox from "./SearchBox.vue";
import FXIcon from "./icons/FXIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import Fobbex from "../store/fobbex.json";

const input_data = ref({ value: "" });

/**
 * Image url bozuksa
 * @param {object} event
 */
function brokenImage(event) {
  event.target.src = "no-image.jpg";
}
</script>
