<template>
  <span
    v-if="type === 'switch'"
    class="tw-switch inline-block rounded-full bg-gray-500 cursor-pointer relative"
    :class="{
      'bg-blue-600 on': isChecked,
      'opacity-50 cursor-not-allowed disabled': disabled,
      'cursor-pointer': !disabled
    }"
    @keydown.space="doToggle"
    @click.prevent="doToggle"
    :tabindex="disabled ? -1 : 0"
    role="switch"
    :aria-checked="isChecked ? 'true' : 'false'"
  >
    <input type="checkbox" class="hidden" v-bind="allAttrs" />
  </span>
  <span
    v-else
    :class="{
      'border-blue-600 text-blue-600':
        (isChecked || indeterReal) && !this.disabled,
      'border-gray-600': !isChecked || this.disabled,
      'opacity-50 cursor-not-allowed': disabled,
      'cursor-pointer': !disabled
    }"
    class="tw-check inline-flex flex-grow-0 items-center justify-center border rounded-sm overflow-hidden"
    @keydown.space="doToggle"
    @click.prevent="doToggle"
    :tabindex="disabled ? -1 : 0"
    role="checkbox"
    :aria-checked="isChecked ? 'true' : 'false'"
  >
    <input type="checkbox" class="hidden" v-bind="allAttrs" />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="tw-check-icon fill-current"
    >
      <rect
        shape-rendering="crispEdges"
        class="opacity-0"
        :class="{ 'opacity-100': indeterReal }"
        width="18"
        height="4"
        x="3"
        y="11"
      ></rect>
      <path
        class="opacity-0"
        :class="{ 'opacity-100': isChecked }"
        d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'tw-toggle',
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
    indeterminate: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  data() {
    return {
      checkedReal: this.checked,
      indeterReal: this.indeterminate
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
    },
    indeterminate(val) {
      this.indeterReal = val
    },
    indeterReal(val) {
      this.$emit('update:indeterminate', val)
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
.tw-check {
  width: 20px;
  height: 20px;
}
.tw-check-icon {
  width: 18px;
  height: 18px;
}
.tw-check-icon > * {
  transition: opacity 0.2s;
}

.tw-switch {
  width: 40px;
  height: 20px;
  transition: 0.2s;
}

.tw-switch:after {
  @apply rounded-full bg-white absolute;
  content: '';
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  transition: 0.3s;
}

.tw-switch.on:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

.tw-switch:active:after {
  width: 60%;
}
.tw-switch.disabled:active:after {
  width: 16px;
}
</style>
