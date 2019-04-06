<template>
  <div
    class="border-l-4 p-2 pb-3 text-sm flex"
    :class="cssClass"
    role="alert"
    v-if="!closed"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      v-if="showIcon"
      class="mr-2"
    >
      <path fill="currentColor" :d="iconPath" />
    </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
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
    iconPath() {
      if (this.type === 'warning') {
        return 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'
      } else if (this.type === 'error') {
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
      } else if (this.type === 'success') {
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
      }
      return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
    }
  }
}
</script>