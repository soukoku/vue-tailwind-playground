<script>
export default {
  name: 'tw-button',
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
    fillFull() {
      return this.fill === 'full'
    },
    fillPlain() {
      return this.fill === 'plain'
    },
    fillNone() {
      return this.fill === 'none'
    },
    allClass() {
      const cls = {
        // defaults
        'tw-btn flex self-center items-center border': true,
        // sizes
        'py-1 px-2 text-xs': this.size === 'xs',
        'py-1 px-4 text-sm': this.size === 'sm',
        'py-2 px-6': this.size === 'md',
        'py-3 px-6 text-lg': this.size === 'lg',

        // rounding
        'rounded-sm': !this.rounded,
        'rounded-full p-0': this.rounded,
        // interact
        'opacity-75 cursor-not-allowed': this.disabled
      }

      if (this.color === 'info') {
        const prop = this.fillFull
          ? `border-gray-600 bg-gray-600 text-gray-100 ${
              this.disabled ? '' : 'hover:bg-gray-700'
            }`
          : this.fillPlain
          ? `border-gray-600 bg-gray-100 text-gray-700 ${
              this.disabled ? '' : 'hover:bg-gray-700 hover:text-gray-100'
            }`
          : `border-transparent text-gray-700 ${
              this.disabled ? '' : 'hover:text-gray-500'
            }`
        cls[prop] = true
      } else if (this.color === 'primary') {
        const prop = this.fillFull
          ? `border-blue-500 bg-blue-600 text-blue-100 ${
              this.disabled ? '' : 'hover:bg-blue-700'
            }`
          : this.fillPlain
          ? `border-blue-700 bg-blue-100 text-blue-700 ${
              this.disabled ? '' : 'hover:bg-blue-700 hover:text-blue-100'
            }`
          : `border-transparent text-blue-700 ${
              this.disabled ? '' : 'hover:text-blue-500'
            }`
        cls[prop] = true
      } else if (this.color === 'success') {
        const prop = this.fillFull
          ? `border-green-500 bg-green-600 text-green-100 ${
              this.disabled ? '' : 'hover:bg-green-700'
            }`
          : this.fillPlain
          ? `border-green-700 bg-green-100 text-green-700 ${
              this.disabled ? '' : 'hover:bg-green-700 hover:text-green-100'
            }`
          : `border-transparent text-green-700 ${
              this.disabled ? '' : 'hover:text-green-500'
            }`
        cls[prop] = true
      } else if (this.color === 'warning') {
        const prop = this.fillFull
          ? `border-yellow-500 bg-yellow-600 text-yellow-100 ${
              this.disabled ? '' : 'hover:bg-yellow-800'
            }`
          : this.fillPlain
          ? `border-yellow-800 bg-yellow-100 text-yellow-800 ${
              this.disabled ? '' : 'hover:bg-yellow-800 hover:text-yellow-100'
            }`
          : `border-transparent text-yellow-800 ${
              this.disabled ? '' : 'hover:text-yellow-500'
            }`
        cls[prop] = true
      } else if (this.color === 'danger') {
        const prop = this.fillFull
          ? `border-red-500 bg-red-600 text-red-100 ${
              this.disabled ? '' : 'hover:bg-red-700'
            }`
          : this.fillPlain
          ? `border-red-700 bg-red-100 text-red-700 ${
              this.disabled ? '' : 'hover:bg-red-700 hover:text-red-100'
            }`
          : `border-transparent text-red-700 ${
              this.disabled ? '' : 'hover:text-red-500'
            }`
        cls[prop] = true
      } else {
        const prop = this.fillNone
          ? `border-transparent text-gray-700 ${
              this.disabled ? '' : 'hover:text-gray-500'
            }`
          : `border-gray-400 bg-white text-gray-700 ${
              this.disabled ? '' : 'hover:bg-gray-300'
            }`
        cls[prop] = true
      }

      return cls
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
/* .tw-btn.rounded {
  padding-left: .7em!important;
  padding-right: .7em!important;
} */
.tw-btn {
  transition: background-color 0.2s;
}
.tw-btn + .tw-btn {
  @apply ml-2;
}
.tw-btn-group {
  @apply flex;
}
.tw-btn-group > .tw-btn + .tw-btn {
  @apply m-0 border-l-0 rounded-none;
}
.tw-btn-group > .tw-btn:first-child {
  @apply rounded-r-none;
}
.tw-btn-group > .tw-btn:last-child {
  @apply rounded-r-sm;
}
</style>
