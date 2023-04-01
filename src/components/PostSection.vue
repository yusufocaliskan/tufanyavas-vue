<template>
  <div class="post-section">
    <div class="post flex border-b-[1px] pb-10">
      <div class="post-left w-full">
        <div class="post-title flex items-center">
          <h1 class="text-xl font-bold">EURUSD</h1>

          <div class="post-star flex">
            <Star />
            <StarFilled />

            <div class="title-arrow cursor-pointer relative ml-5">
              <span
                class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                lacus auctor Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</span
              >
              <Arrow1 />
            </div>
          </div>
        </div>
        <div class="post-time pb-5 pt-2 text-sm flex flex-col text-gray-400">
          <span>4 days ago</span>
        </div>
        <div class="post-body text-gray-700">
          <ul class="flex-wrap">
            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right w-1/3 relative">
                <span
                  class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac lacus auctor Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</span
                >
                <Arrow1 />
              </div>
            </li>

            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right relative w-1/3">
                <span
                  class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac lacus auctor Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.</span
                >
                <Arrow2 />
              </div>
            </li>
            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right relative w-1/3">
                <Arrow3 />
              </div>
            </li>
            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right relative w-1/3">
                <Arrow4 />
              </div>
            </li>
            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right relative w-1/3">
                <Arrow5 />
              </div>
            </li>
            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right relative w-1/3">
                <Arrow6 />
              </div>
            </li>
            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right relative w-1/3">
                <Arrow7 />
              </div>
            </li>
            <li
              class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
            >
              <div class="tab-left w-2/3 flex flex-col">
                <span class="text-xs font-bold">4H</span>
                <span class="text-xs font-thin">1d</span>
              </div>

              <div class="tab-right relative w-1/3">
                <Arrow8 />
              </div>
            </li>
          </ul>

          <div class="post-graphic">
            <img src="/eurusd.png" class="mt-10" />
          </div>

          <div
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
          </div>
        </div>
      </div>
    </div>
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
import Star from "./icons/Star.vue";
import StarFilled from "./icons/StarFilled.vue";
</script>
