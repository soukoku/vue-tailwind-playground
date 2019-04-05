<template>
  <div>
    <label>
    <input type="checkbox" v-model="disabled">
    Toggle disabled
    </label>

    <div class="flex">
      <base-button :disabled="disabled" fill="full" color="none">none</base-button>
      <base-button :disabled="disabled" fill="full" color="primary">primary</base-button>
      <base-button :disabled="disabled" fill="full" color="success">success</base-button>
      <base-button :disabled="disabled" fill="full" color="warning">warning</base-button>
      <base-button :disabled="disabled" fill="full" color="danger">danger</base-button>
      <base-button :disabled="disabled" fill="full" color="info">info</base-button>
    </div>
    <div class="flex mt-2">
      <base-button :disabled="disabled" fill="plain" color="none">none</base-button>
      <base-button :disabled="disabled" fill="plain" color="primary">primary</base-button>
      <base-button :disabled="disabled" fill="plain" color="success">success</base-button>
      <base-button :disabled="disabled" fill="plain" color="warning">warning</base-button>
      <base-button :disabled="disabled" fill="plain" color="danger">danger</base-button>
      <base-button :disabled="disabled" fill="plain" color="info">info</base-button>
    </div>
    <div class="flex mt-2">
      <base-button :disabled="disabled" fill="none" color="none">none</base-button>
      <base-button :disabled="disabled" fill="none" color="primary">primary</base-button>
      <base-button :disabled="disabled" fill="none" color="success">success</base-button>
      <base-button :disabled="disabled" fill="none" color="warning">warning</base-button>
      <base-button :disabled="disabled" fill="none" color="danger">danger</base-button>
      <base-button :disabled="disabled" fill="none" color="info">info</base-button>
    </div>
    
    <div class="flex mt-2">
      <base-button :disabled="disabled" size="xs">xs</base-button>
      <base-button :disabled="disabled" size="sm">sm</base-button>
      <base-button :disabled="disabled" size="md">md</base-button>
      <base-button :disabled="disabled" size="lg">lg</base-button>
    </div>
    <div class="flex mt-2">
      <base-button :disabled="disabled" rounded size="xs">A</base-button>
      <base-button :disabled="disabled" rounded size="sm">B</base-button>
      <base-button :disabled="disabled" rounded size="md">C</base-button>
      <base-button :disabled="disabled" rounded size="lg">D</base-button>
    </div>
    <div class="btn-group mt-2">
      <base-button :disabled="disabled" @click="testBtn"
        ><i class="fas fa-save mr-1"></i> Click Me</base-button
      >
      <base-button :disabled="disabled">Button</base-button>
      <base-button :disabled="disabled">Button</base-button>
      <base-button :disabled="disabled">Button</base-button>
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
