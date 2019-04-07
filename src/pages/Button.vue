<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>

    <div class="flex">
      <tw-button :disabled="disabled" fill="full" color="none">none</tw-button>
      <tw-button :disabled="disabled" fill="full" color="primary"
        >primary</tw-button
      >
      <tw-button :disabled="disabled" fill="full" color="success"
        >success</tw-button
      >
      <tw-button :disabled="disabled" fill="full" color="warning"
        >warning</tw-button
      >
      <tw-button :disabled="disabled" fill="full" color="danger"
        >danger</tw-button
      >
      <tw-button :disabled="disabled" fill="full" color="info">info</tw-button>
    </div>
    <div class="flex mt-2">
      <tw-button :disabled="disabled" fill="plain" color="none">none</tw-button>
      <tw-button :disabled="disabled" fill="plain" color="primary"
        >primary</tw-button
      >
      <tw-button :disabled="disabled" fill="plain" color="success"
        >success</tw-button
      >
      <tw-button :disabled="disabled" fill="plain" color="warning"
        >warning</tw-button
      >
      <tw-button :disabled="disabled" fill="plain" color="danger"
        >danger</tw-button
      >
      <tw-button :disabled="disabled" fill="plain" color="info">info</tw-button>
    </div>
    <div class="flex mt-2">
      <tw-button :disabled="disabled" fill="none" color="none">none</tw-button>
      <tw-button :disabled="disabled" fill="none" color="primary"
        >primary</tw-button
      >
      <tw-button :disabled="disabled" fill="none" color="success"
        >success</tw-button
      >
      <tw-button :disabled="disabled" fill="none" color="warning"
        >warning</tw-button
      >
      <tw-button :disabled="disabled" fill="none" color="danger"
        >danger</tw-button
      >
      <tw-button :disabled="disabled" fill="none" color="info">info</tw-button>
    </div>

    <div class="flex mt-2">
      <tw-button :disabled="disabled" size="xs">xs</tw-button>
      <tw-button :disabled="disabled" size="sm">sm</tw-button>
      <tw-button :disabled="disabled" size="md">md</tw-button>
      <tw-button :disabled="disabled" size="lg">lg</tw-button>
      <tw-button
        :disabled="disabled"
        size="custom"
        class="pt-1 pr-2 pb-4 pl-8 text-5xl"
        >custom</tw-button
      >
    </div>
    <div class="flex mt-2">
      <tw-button :disabled="disabled" rounded size="xs">Rounded</tw-button>
      <tw-button :disabled="disabled" rounded size="sm">Rounded</tw-button>
      <tw-button :disabled="disabled" rounded size="md">Rounded</tw-button>
      <tw-button :disabled="disabled" rounded size="lg">Rounded</tw-button>
    </div>
    <div class="tw-btn-group mt-2">
      <tw-button :disabled="disabled" @click="testBtn">Click Me</tw-button>
      <tw-button :disabled="disabled">Button</tw-button>
      <tw-button :disabled="disabled">Button</tw-button>
      <tw-button :disabled="disabled">Button</tw-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false
    }
  },
  methods: {
    testBtn() {
      alert('clicked')
    }
  }
}
</script>
