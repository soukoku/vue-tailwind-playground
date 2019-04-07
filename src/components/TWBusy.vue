<template>
  <div
    class="flex items-center justify-center text-gray-600 absolute top-0 left-0 right-0 bottom-0 select-none"
    v-if="isBusyReal"
  >
    <div class="absolute left-0 top-0 w-full h-full opacity-75 bg-gray-100 "></div>
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 60 60"
      :class="{ rot360: indeterminate }"
    >
      <circle
        cx="30"
        cy="30"
        r="27"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
        stroke-dasharray="160"
        stroke-dashoffset="20"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isBusy: Boolean,
    delayMs: { type: Number, default: 500 },
    size: { type: Number, default: 32 },
    indeterminate: { type: Boolean, default: true }
  },
  data() {
    return {
      isBusyReal: false
    }
  },
  watch: {
    isBusy: {
      handler(val) {
        clearTimeout(this.timeout)
        if (val) {
          this.timeout = setTimeout(
            () => (this.isBusyReal = this.isBusy),
            this.delayMs
          )
        } else {
          this.isBusyReal = false
        }
      },
      immediate: true
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }
}
</script>

<style>
.rot360 {
  animation-name: ckw;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  /* transform-origin: 50% 50%; */
}
@keyframes ckw {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
