<template>
  <div class="inline-block relative">
    <select
      v-on="allListeners"
      v-bind="allAttrs"
      :class="allClass"
      ref="select"
    >
      <slot></slot>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg
        :class="chevClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tw-select',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {},
    size: {
      type: String,
      default: 'md',
      validator: function(value) {
        return ['xs', 'sm', 'md', 'lg'].indexOf(value) !== -1
      }
    },
    disabled: Boolean
  },
  data() {
    return {
      // valueReal: this.value
    }
  },
  computed: {
    allAttrs() {
      return {
        ...this.$attrs,
        disabled: this.disabled
      }
    },
    chevClass() {
      return {
        'w-3': this.size === 'sm' || this.size === 'xs',
        'w-4': this.size === 'md',
        'w-5': this.size === 'lg'
      }
    },
    allClass() {
      const cls = {
        'tw-input block appearance-none border border-gray-300 text-gray-700 hover:border-gray-500 focus:border-blue-500 focus:outline-none rounded-sm': true,
        'py-1 pl-2 pr-6 text-xs': this.size === 'xs',
        'py-1 pl-2 pr-6 text-sm': this.size === 'sm',
        'py-1 pl-3 pr-8': this.size === 'md',
        'py-2 pl-4 pr-10 text-lg': this.size === 'lg',
        'bg-gray-200': this.disabled
      }
      return cls
    },
    allListeners() {
      return {
        ...this.$listeners,
        change: this.handleChange
      }
    }
  },
  watch: {
    value(val) {
      if (this.$refs.select) this.$refs.select.value = val
    }
  },
  methods: {
    handleChange(e) {
      var val = e.target.value
      var type = typeof this.value
      if (type === 'number') {
        val = +val
      }
      this.$emit('change', val)
    }
  }
}
</script>
<style>
.tw-input::-ms-expand {
  display: none;
}
</style>
