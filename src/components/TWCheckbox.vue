<template>
  <span
    :class="{
      'text-blue-600': (checkedReal || indeterReal) && !this.disabled,
      'text-gray-600': !checkedReal || this.disabled,
      'opacity-50': disabled
    }"
    class="inline-flex cursor-pointer"
    @keydown.space="doToggle"
    @click.prevent="doToggle"
    :tabindex="disabled ? -1 : 0"
    role="checkbox"
    :aria-checked="checkedReal ? 'true' : 'false'"
  >
    <input type="checkbox" class="hidden" v-bind="allAttrs" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 fill-current"
      viewBox="0 0 24 24"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        class="tw-check-icon opacity-0"
        :class="{ 'opacity-100': !checkedReal }"
        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      />
      <path
        class="tw-check-icon opacity-0"
        :class="{ 'opacity-100': checkedReal }"
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />

      <defs><path id="a" d="M0 0h24v24H0z" /></defs>
      <clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath>
      <path
        class="tw-check-icon opacity-0"
        :class="{ 'opacity-100': indeterReal }"
        clip-path="url(#b)"
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'tw-checkbox',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    indeterminate: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      checkedReal: this.checked,
      indeterReal: this.indeterminate
    }
  },
  watch: {
    checked(val) {
      this.checkedReal = val
    },
    checkedReal(val) {
      this.$emit('change', val)
    },
    indeterminate(val) {
      this.indeterReal = val
    },
    indeterReal(val) {
      this.$emit('update:indeterminate', val)
    }
  },
  computed: {
    allAttrs() {
      return {
        ...this.$attrs,
        disabled: this.disabled,
        checked: this.checkedReal
      }
    }
  },
  methods: {
    doToggle() {
      if (!this.disabled) {
        this.checkedReal = !this.checkedReal
        this.indeterReal = false
      }
    }
  }
}
</script>
<style>
.tw-check-icon {
  transition: opacity 0.2s;
}
</style>
