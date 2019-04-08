<template>
  <span
    :class="{
      'text-blue-600': checkedReal && !this.disabled,
      'text-gray-600': !checkedReal || this.disabled,
      'opacity-50 cursor-not-allowed': disabled,
      'cursor-pointer': !disabled
    }"
    class="inline-flex"
    @keydown.space="selectMe"
    @click.prevent="selectMe"
    :tabindex="disabled ? -1 : 0"
    role="radio"
    :aria-checked="checkedReal ? 'true' : 'false'"
  >
    <input type="radio" class="hidden" v-bind="allAttrs" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 fill-current"
      viewBox="0 0 24 24"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        class="tw-radio-icon opacity-0"
        :class="{ 'opacity-100': !checkedReal }"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      />
      <path
        class="tw-radio-icon opacity-0"
        :class="{ 'opacity-100': checkedReal }"
        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'tw-radio',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {},
    checked: {
      type: [String, Object, Number, Boolean],
      default: null
    },
    disabled: Boolean
  },
  computed: {
    checkedReal() {
      return this.value === this.checked
    },
    allAttrs() {
      return {
        ...this.$attrs,
        value: this.value,
        disabled: this.disabled
      }
    }
  },
  methods: {
    selectMe() {
      if (!this.disabled) {
        this.$emit('input', this.value)
      }
    }
  }
}
</script>
<style>
.tw-radio-icon {
  transition: opacity 0.2s;
}
</style>
