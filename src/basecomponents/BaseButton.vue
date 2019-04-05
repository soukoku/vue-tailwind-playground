<script>
export default {
  props: {
    color: {
      type: String,
      default: 'none',
      validator: function(value) {
        return (
          ['none', 'success', 'warning', 'danger', 'info', 'primary'].indexOf(
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
      default: 'button',
      validator: function(value) {
        return ['button', 'submit', 'reset', 'anchor'].indexOf(value) !== -1
      }
    },
    fill: {
      type: String,
      default: 'plain',
      validator: function(value) {
        return ['plain', 'full', 'none'].indexOf(value) !== -1
      }
    },
    rounded: Boolean,
    disabled: Boolean
  },
  computed: {
    allClass() {
      return {
        // defaults
        'b-btn flex self-center items-center border font-semibold': true,
        // sizes
        'py-1 px-2 text-xs': this.size === 'xs',
        'py-1 px-3 text-sm': this.size === 'sm',
        'py-2 px-6': this.size === 'md',
        'py-3 px-6 text-lg': this.size === 'lg',
        // full
        'border-gray-600 bg-gray-600 hover:bg-gray-700 text-gray-100':
          this.color === 'info' && this.fill === 'full',
        'border-blue-500 bg-blue-600 hover:bg-blue-700 text-blue-100':
          this.color === 'primary' && this.fill === 'full',
        'border-green-500 bg-green-600 hover:bg-green-700 text-green-100':
          this.color === 'success' && this.fill === 'full',
        'border-yellow-500 bg-yellow-700 hover:bg-yellow-800 text-yellow-100':
          this.color === 'warning' && this.fill === 'full',
        'border-red-500 bg-red-600 hover:bg-red-700 text-red-100':
          this.color === 'danger' && this.fill === 'full',
        'border-gray-500 bg-gray-100 hover:bg-gray-300': this.color === 'none',
        // plain
        'border-gray-600 bg-gray-100 hover:bg-gray-700 hover:text-gray-100 text-gray-700':
          this.color === 'info' && this.fill === 'plain',
        'border-blue-700 bg-blue-100 hover:bg-blue-700 hover:text-blue-100 text-blue-700':
          this.color === 'primary' && this.fill === 'plain',
        'border-green-700 bg-green-100 hover:bg-green-700 hover:text-green-100 text-green-700':
          this.color === 'success' && this.fill === 'plain',
        'border-yellow-800 bg-yellow-100 hover:bg-yellow-800 hover:text-yellow-100 text-yellow-800':
          this.color === 'warning' && this.fill === 'plain',
        'border-red-700 bg-red-100 hover:bg-red-700 hover:text-red-100 text-red-700':
          this.color === 'danger' && this.fill === 'plain',
        // none
        'border-transparent hover:text-gray-500 text-gray-700':
          this.color === 'info' && this.fill === 'none',
        'border-transparent hover:text-blue-500 text-blue-700':
          this.color === 'primary' && this.fill === 'none',
        'border-transparent hover:text-green-500 text-green-700':
          this.color === 'success' && this.fill === 'none',
        'border-transparent hover:text-yellow-500 text-yellow-800':
          this.color === 'warning' && this.fill === 'none',
        'border-transparent hover:text-red-500 text-red-700':
          this.color === 'danger' && this.fill === 'none',
        // rounding
        'rounded-sm': !this.rounded,
        'rounded-full p-0': this.rounded,
        // interact
        'opacity-75 cursor-not-allowed': this.disabled
      }
    },
    allAttrs() {
      return {
        ...this.$attrs,
        disabled: this.disabled,
        type: this.isAnchor ? undefined : this.type
      }
    },
    isAnchor() {
      return this.type === 'anchor'
    }
  },
  methods: {
    focus() {
      const btn = this.$refs.btn
      if (btn) btn.focus()
    }
  },
  render(h) {
    return h(
      this.isAnchor ? 'a' : 'button',
      {
        class: this.allClass,
        attrs: this.allAttrs,
        on: this.$listeners,
        ref: 'btn'
      },
      this.$slots.default
    )
  }
}
</script>
<style>
/* .b-btn.rounded {
  padding-left: .7em!important;
  padding-right: .7em!important;
} */
.b-btn {
  transition: background-color 0.2s;
}
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
