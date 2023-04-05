<template>
  <div class="modal bg-[#ffffffb3]" v-if="isModalActive == true">
    <div
      class="modal-wrapper border-[1px] border-gray-200 shadow-md rounded-sm bg-[#ffffff] dark:bg-[#34393e]"
    >
      <CloseIcon
        class="absolute right-5 top-5 w-[30px] h-[30px] text-gray-500 hover:text-red-400 cursor-pointer"
        @click="close"
      />
      <div class="modal-body p-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "./icons/CloseIcon.vue";

export default {
  name: "Modal",
  components: {
    CloseIcon,
  },
  props: {
    isModalActive: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 350;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  text-align: left;
  padding: 100px 150px;
  cursor: default;
}
.modal .modal-wrapper {
  /* max-width: 1120px; */
  margin: 0 auto;
  position: relative;
}
@media (max-width: 480px) {
  .modal {
    padding: 20px 20px;
  }
}
@media (max-width: 767px) {
  .modal {
    padding: 20px 20px;
  }
}
</style>
