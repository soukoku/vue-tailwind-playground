<template>
  <span
    :class="{
      'border-blue-600 bg-blue-600': isChecked,
      'border-gray-400': !isChecked,
      'opacity-50 cursor-not-allowed': disabled,
      'cursor-pointer': !disabled
    }"
    class="inline-flex rounded-full border bg-gray-400 cursor-pointer w-10"
    @keydown.space="doToggle"
    @click.prevent="doToggle"
    :tabindex="disabled ? -1 : 0"
    role="switch"
    :aria-checked="isChecked ? 'true' : 'false'"
  >
    <input type="checkbox" class="hidden" v-bind="allAttrs" />
    <span
      :class="{
        'on border-blue-600': isChecked,
        'border-gray-400': !isChecked
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
    checked: {}, // could be a complex value despite name
    value: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    disabled: Boolean
  },
  data() {
    return {
      checkedReal: this.checked
    }
  },
  computed: {
    allAttrs() {
      return {
        ...this.$attrs,
        value: this.value,
        trueValue: this.trueValue,
        falseValue: this.falseValue,
        disabled: this.disabled,
        checked: this.isChecked
      }
    },
    isChecked() {
      if (Array.isArray(this.checkedReal)) {
        return this.checkedReal.includes(this.value)
      }
      return this.checkedReal === this.trueValue
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
  methods: {
    doToggle() {
      if (!this.disabled) {
        this.indeterReal = false
        const checked = !this.isChecked
        if (Array.isArray(this.checkedReal)) {
          const newVal = [...this.checkedReal]
          if (checked) newVal.push(this.value)
          else newVal.splice(newVal.indexOf(this.value), 1)
          this.checkedReal = newVal
        } else {
          this.checkedReal = checked ? this.trueValue : this.falseValue
        }
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
