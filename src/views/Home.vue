<template>
  <div>
    <pre>{{ links }}</pre>
  </div>
</template>
<script setup>
import { computed } from "vue";
import store from "../store";

const links = computed(() => store.state.links);
</script>
