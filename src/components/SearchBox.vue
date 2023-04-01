<template>
  <!-- Search-box -->
  <input
    v-model="data.value"
    name="search-box"
    :class="inputClass"
    :placeholder="placeholder"
    @change="($event) => search_for"
  />
  <!--end: search-box -->
</template>

<script setup>
const props = defineProps({
  inputClass: String,
  placeholder: { type: String, default: "Search..." },
  data: Object,
});
</script>
