<template>
  <svg
    data-v-2dc54a20=""
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 26 26"
    class="mdl-js"
  >
    <g
      data-v-2dc54a20=""
      fill="none"
      fill-rule="evenodd"
      :stroke="isDark ? 'white' : '#353B40'"
      stroke-width="2.028"
    >
      <path
        data-v-2dc54a20=""
        d="M0 0L6.986 0 6.986 6.901"
        transform="translate(17 11)"
      ></path>
      <path data-v-2dc54a20="" d="M0.241 4L15.127 20.227 24 11"></path>
    </g>
  </svg>
</template>

<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
