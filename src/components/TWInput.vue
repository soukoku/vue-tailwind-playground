<template>
  <input :class="allClass" v-bind="$attrs" v-on="otherListners"
  :value="value" @input="$emit('input', $event.target.value)"></input>
</template>

<script>
export default {
  name: 'tw-input',
  props: {
    value: {
      type: [String, Number]
    },
    size: {
      type: String,
      default: 'md',
      validator: function(value) {
        return ['xs', 'sm', 'md', 'lg'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    allClass() {
      return {
        'tw-input border border-gray-300 text-gray-700 hover:border-gray-500 focus:border-blue-500 focus:outline-none rounded-sm': true,
        'py-1 px-1 text-xs': this.size === 'xs',
        'py-1 px-1 text-sm': this.size === 'sm',
        'py-1 px-2': this.size === 'md',
        'py-2 px-2 text-lg': this.size === 'lg'
      }
    },
    otherListners() {
      const { input, ...others } = this.$listeners
      return others
    }
  }
}
</script>
<style>
.tw-input {
  transition: background-color 0.2s, border-color 0.2s;
}
.tw-input[type='number']::-webkit-inner-spin-button,
.tw-input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
