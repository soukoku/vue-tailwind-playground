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
      'text-blue-600': (isChecked || indeterReal) && !this.disabled,
      'text-gray-600': !isChecked || this.disabled,
      'opacity-50 cursor-not-allowed': disabled,
      'cursor-pointer': !disabled
    }"
    class="inline-flex"
    @keydown.space="doToggle"
    @click.prevent="doToggle"
    :tabindex="disabled ? -1 : 0"
    role="checkbox"
    :aria-checked="isChecked ? 'true' : 'false'"
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
        :class="{ 'opacity-100': !isChecked }"
        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      />
      <path
        class="tw-check-icon opacity-0"
        :class="{ 'opacity-100': isChecked }"
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
.tw-check-icon {
  transition: opacity 0.2s;
}

.tw-switch {
  width: 44px;
  height: 22px;
  transition: 0.2s;
}

.tw-switch:after {
  @apply rounded-full bg-white absolute;
  content: '';
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
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
  width: 18px;
}
</style>
