<template>
  <div class="intraday-post flex p-10 mb-5 border-b-[1px] border-b-gray-200">
    <div class="w-1/2">
      <div class="post-title flex items-center">
        <h1 class="text-xl font-bold">EURUSD</h1>

        <div class="post-star flex">
          <!-- <Star /> -->
          <!-- <StarFilled /> -->
          <!-- <component :is="biasArrowsMap[item.bias.key]" /> -->
        </div>
      </div>
      <div class="post-time pb-5 pt-2 text-sm flex flex-col text-gray-400">
        <span>3 days ago</span>
      </div>
      <div class="flex post-description">
        LoremLor emLoremLoremLoremLoremLo remLo remLorem LoremLoremLorem
        LoremLoremLoremLo remLorem LoremLor emLoremLoremLoremLoremLo remLo
        remLorem LoremLoremLorem LoremLoremLoremLo remLorem
      </div>
    </div>
    <div class="w-1/2"><img src="eurusd.png" /></div>
  </div>
</template>
<script>
import Star from "./icons/Star.vue";
</script>
