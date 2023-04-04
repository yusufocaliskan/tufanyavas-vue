<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="16px"
    height="9px"
    viewBox="0 0 16 9"
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
        id="bias2"
        transform="translate(8.500000, 4.000000) scale(1, -1) translate(-8.500000, -4.000000) translate(1.000000, 0.000000)"
        :stroke="isDark ? 'white' : '#353B40'"
        stroke-width="1.17"
      >
        <polyline
          id="Path"
          points="0.139 7.378 5.032 2.313 8.727 5.362 13.846 0.038"
        />
        <polyline id="Path" points="10 0 14.03 0 14.03 3.981" />
      </g>
    </g>
  </svg>
</template>
<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
