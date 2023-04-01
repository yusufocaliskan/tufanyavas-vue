<template>
  <!-- Search-box -->
  <input name="search-box" :class="inputClass" :placeholder="placeholder" />
  <!--end: search-box -->
</template>

<script setup>
const props = defineProps({
  inputClass: String,
  placeholder: { type: String, default: "Search..." },
});
</script>
