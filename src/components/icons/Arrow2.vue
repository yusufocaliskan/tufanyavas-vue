<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    class="mdl-js"
  >
    <g
      fill="none"
      fill-rule="evenodd"
      :stroke="isDark ? 'white' : '#353B40'"
      stroke-width="1.17"
    >
      <path d="M10 4h4.03v3.981" />
      <path d="M.139 9.362h8.588l5.12-5.324" />
    </g>
  </svg>
</template>
<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
