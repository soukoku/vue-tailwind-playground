<template>
  <div>
    <div class="flex">
      <base-button color="transparent">transparent</base-button>
      <base-button color="none">none</base-button>
      <base-button color="primary">primary</base-button>
      <base-button color="success">success</base-button>
      <base-button color="warning">warning</base-button>
      <base-button color="danger">danger</base-button>
      <base-button color="info">info</base-button>
    </div>
    <div class="flex mt-2">
      <base-button plain color="transparent">transparent</base-button>
      <base-button plain color="none">none</base-button>
      <base-button plain color="primary">primary</base-button>
      <base-button plain color="success">success</base-button>
      <base-button plain color="warning">warning</base-button>
      <base-button plain color="danger">danger</base-button>
      <base-button plain color="info">info</base-button>
    </div>
    <div class="flex mt-2">
      <base-button disabled color="transparent">transparent</base-button>
      <base-button disabled color="none">none</base-button>
      <base-button disabled color="primary">primary</base-button>
      <base-button disabled color="success">success</base-button>
      <base-button disabled color="warning">warning</base-button>
      <base-button disabled color="danger">danger</base-button>
      <base-button disabled color="info">info</base-button>
    </div>
    <div class="flex mt-2">
      <base-button size="xs">xs</base-button>
      <base-button size="sm">sm</base-button>
      <base-button size="md">md</base-button>
      <base-button size="lg">lg</base-button>
    </div>
    <div class="flex mt-2">
      <base-button rounded size="xs">A</base-button>
      <base-button rounded size="sm">B</base-button>
      <base-button rounded size="md">C</base-button>
      <base-button rounded size="lg">D</base-button>
    </div>
    <div class="btn-group mt-2">
      <base-button @click="testBtn"><i class="fas fa-save mr-1"></i> Click Me</base-button>
      <base-button>Button</base-button>
      <base-button>Button</base-button>
      <base-button>Button</base-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    testBtn() {
      alert('clicked')
    }
  }
}
</script>
