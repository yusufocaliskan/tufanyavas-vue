<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="15px"
    height="7px"
    viewBox="0 0 15 7"
    version="1.1"
    class="mdl-js"
  >
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="bias3"
        transform="translate(7.500000, 3.000000) scale(1, -1) translate(-7.500000, -3.000000) "
        :stroke="isDark ? 'white' : '#353B40'"
        stroke-width="1.17"
      >
        <polyline id="Path" points="10 0 14.03 0 14.03 3.981" />
        <polyline id="Path" points="0.139 5.362 8.727 5.362 13.847 0.038" />
      </g>
    </g>
  </svg>
</template>
<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
