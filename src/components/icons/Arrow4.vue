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
      <path d="M0 0L4.03 0 4.03 3.981" transform="translate(8 3)" />
      <path d="M12.106 2.885L2.809 12.182" />
    </g>
  </svg>
</template>

<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
