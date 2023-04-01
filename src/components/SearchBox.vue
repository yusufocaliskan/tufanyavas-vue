<template>
  <!-- Search-box -->
  <input
    v-model="data.value"
    name="search-box"
    :placeholder="placeholder"
    @change="($event) => search_for"
  />
  <!--end: search-box -->
</template>

<script setup>
const props = defineProps({
  placeholder: { type: String, default: "Search..." },
  data: Object,
});
</script>
