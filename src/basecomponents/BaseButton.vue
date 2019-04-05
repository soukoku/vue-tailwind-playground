<template>
  <button
    :class="allClass"
    :disabled="disabled"
    :type="type"
    v-on="this.$listeners"
    ref="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'none',
      validator: function(value) {
        return (
          ['none', 'transparent', 'success', 'warning', 'danger', 'info', 'primary'].indexOf(
            value
          ) !== -1
        )
      }
    },
    size: {
      type: String,
      default: 'md',
      validator: function(value) {
        return ['xs', 'sm', 'md', 'lg'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: 'button'
    },
    plain: Boolean,
    rounded: Boolean,
    disabled: Boolean
  },
  computed: {
    allClass() {
      return {
        // defaults
        'b-btn flex self-center items-center border': true,
        // sizes
        'py-1 px-2 text-xs': this.size === 'xs',
        'py-1 px-3 text-sm': this.size === 'sm',
        'py-2 px-4': this.size === 'md',
        'py-3 px-5 text-lg': this.size === 'lg',

        // colors
        'border-gray-600 bg-gray-600 hover:bg-gray-700 text-gray-100':
          this.color === 'info' && !this.plain,
        'border-blue-500 bg-blue-600 hover:bg-blue-700 text-blue-100':
          this.color === 'primary' && !this.plain,
        'border-green-500 bg-green-600 hover:bg-green-700 text-green-100':
          this.color === 'success' && !this.plain,
        'border-yellow-500 bg-yellow-700 hover:bg-yellow-800 text-yellow-100':
          this.color === 'warning' && !this.plain,
        'border-red-500 bg-red-600 hover:bg-red-700 text-red-100':
          this.color === 'danger' && !this.plain,
        'border-gray-500 bg-gray-100 hover:bg-gray-300': this.color === 'none',

        // plains
        'border-gray-600 bg-gray-100 hover:bg-gray-500 hover:text-white text-gray-700':
          this.color === 'info' && this.plain,
        'border-blue-500 bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700':
          this.color === 'primary' && this.plain,
        'border-green-500 bg-green-100 hover:bg-green-500 hover:text-white text-green-700':
          this.color === 'success' && this.plain,
        'border-yellow-500 bg-yellow-100 hover:bg-yellow-600 hover:text-white text-yellow-800':
          this.color === 'warning' && this.plain,
        'border-red-500 bg-red-100 hover:bg-red-500 hover:text-white text-red-700':
          this.color === 'danger' && this.plain,

        // rounding
        'rounded-sm': !this.rounded,
        'rounded-full p-0': this.rounded,
        // interact
        'opacity-75 cursor-not-allowed': this.disabled
      }
    }
  },
  methods: {
    focus() {
      const btn = this.$refs.btn
      if (btn) btn.focus()
    }
  }
}
</script>
<style>
/* .b-btn.rounded {
  padding-left: .7em!important;
  padding-right: .7em!important;
} */
.b-btn + .b-btn {
  @apply ml-2;
}
.btn-group {
  @apply flex;
}
.btn-group > .b-btn + .b-btn {
  @apply m-0 border-l-0 rounded-none;
}
.btn-group > .b-btn:first-child {
  @apply rounded-r-none;
}
.btn-group > .b-btn:last-child {
  @apply rounded-r-sm;
}
</style>
