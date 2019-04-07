<template>
  <span
    :class="{
      'border-blue-600 bg-blue-600': checkedReal,
      'border-gray-400': !checkedReal,
      'opacity-50': disabled
    }"
    class="inline-flex rounded-full border bg-gray-400 cursor-pointer w-10"
    @keydown.space="doToggle"
    @click.prevent="doToggle"
    :tabindex="disabled ? -1 : 0"
    role="switch"
    :aria-checked="checkedReal ? 'true' : 'false'"
  >
    <input type="checkbox" class="hidden" v-bind="allAttrs" />
    <span
      :class="{
        'on border-blue-600': checkedReal,
        'border-gray-400': !checkedReal
      }"
      class="switch-knob border rounded-full w-4 h-4 bg-white"
    >
    </span>
  </span>
</template>

<script>
export default {
  name: 'tw-switch',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      checkedReal: this.checked
    }
  },
  watch: {
    checked(val) {
      this.checkedReal = val
    },
    checkedReal(val) {
      this.$emit('change', val)
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
      }
    }
  }
}
</script>

<style>
.switch-knob {
  transition: transform 200ms;
}
.switch-knob.on {
  transform: translateX(140%);
}
</style>
