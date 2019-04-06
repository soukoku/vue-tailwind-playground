<template>
  <div
    class="border-l-4 p-2 pb-3 text-sm flex"
    :class="cssClass"
    role="alert"
    v-if="!closed"
  >
    <i class="mt-1 mr-2 fas fa-2x" :class="iconClass" v-if="showIcon"></i>
    <div class="flex-1 self-center">
      <p class="font-bold capitalize" v-if="title">{{ title }}</p>
      <p>
        {{ message }}
      </p>
    </div>
    <button
      class="self-start"
      @click="closed = true"
      title="Close alert."
      v-if="showClose"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'tw-alert',
  props: {
    title: {
      type: String
    },
    message: {
      type: String
    },
    type: {
      type: String,
      default: 'info',
      validator: function(value) {
        return ['success', 'warning', 'error', 'info'].indexOf(value) !== -1
      }
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      closed: false
    }
  },
  watch: {
    message: {
      immediate: true,
      handler(val) {
        this.closed = !val // && !this.title
      }
    }
  },
  computed: {
    cssClass() {
      if (this.type === 'warning') {
        return 'bg-yellow-100 border-yellow-700 text-yellow-800'
      } else if (this.type === 'error') {
        return 'bg-red-100 border-red-700 text-red-700'
      } else if (this.type === 'success') {
        return 'bg-green-100 border-green-700 text-green-700'
      }
      return 'bg-gray-100 border-gray-700 text-gray-700'
    },
    iconClass() {
      if (this.type === 'warning') {
        return 'fa-exclamation-circle'
      } else if (this.type === 'error') {
        return 'fa-times-circle'
      } else if (this.type === 'success') {
        return 'fa-check-circle'
      }
      return 'fa-info-circle'
    }
  }
}
</script>
