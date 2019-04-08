<script>
export default {
  name: 'tw-input',
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'md',
      validator: function(value) {
        return ['xs', 'sm', 'md', 'lg', 'custom'].indexOf(value) !== -1
      }
    },
    disabled: Boolean
  },
  data() {
    return {
      valueReal: ''
    }
  },
  watch: {
    value: {
      handler(v) {
        this.valueReal = v ? v.toString() : ''
      },
      immediate: true
    }
  },
  computed: {
    allClass() {
      const cls = {
        'tw-input border border-gray-300 text-gray-700 hover:border-gray-500 focus:border-blue-500 focus:outline-none rounded-sm': true,
        'py-1 px-2 text-xs': this.size === 'xs',
        'py-1 px-2 text-sm': this.size === 'sm',
        'py-1 px-3': this.size === 'md',
        'py-2 px-4 text-lg': this.size === 'lg',
        'bg-gray-200': this.disabled
      }
      return cls
    },
    allListners() {
      return {
        ...this.$listeners,
        input: e => this.tryChangeAndEmit('input', e.target.value),
        change: e => this.tryChangeAndEmit('change', e.target.value, true)
        // blur: e => {
        //   this.tryChangeAndEmit('change', e.target.value, true)
        //   this.$emit('blur', e)
        // }
      }
    },
    allAttrs() {
      return {
        ...this.$attrs,
        disabled: this.disabled,
        type: this.isTextArea ? undefined : this.type,
        value: this.valueReal
      }
    },
    isTextArea() {
      return this.type === 'textarea'
    }
  },
  methods: {
    tryChangeAndEmit(evtName, val, validate) {
      this.valueReal = val
      if (validate && this.type === 'number') {
        const test = +val
        if (isNaN(test)) {
          // keep original
          this.valueReal = this.value
        }
      }
      this.$emit(evtName, this.valueReal)
    }
  },
  render(h) {
    return h(
      this.isTextArea ? 'textarea' : 'input',
      {
        class: this.allClass,
        attrs: this.allAttrs,
        on: this.allListners
      },
      this.$slots.default
    )
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
.tw-input[type='number'] {
  -moz-appearance: textfield;
}
</style>
