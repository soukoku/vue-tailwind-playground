<template>
  <div>
    <div class="flex">
      <base-button color="none">Button</base-button>
      <base-button color="primary">Button</base-button>
      <base-button color="success">Button</base-button>
      <base-button color="warning">Button</base-button>
      <base-button color="danger">Button</base-button>
      <base-button color="info">Button</base-button>
    </div>
    <div class="flex mt-2">
      <base-button plain color="none">Button</base-button>
      <base-button plain color="primary">Button</base-button>
      <base-button plain color="success">Button</base-button>
      <base-button plain color="warning">Button</base-button>
      <base-button plain color="danger">Button</base-button>
      <base-button plain color="info">Button</base-button>
    </div>
    <div class="flex mt-2">
      <base-button disabled color="none">Button</base-button>
      <base-button disabled color="primary">Button</base-button>
      <base-button disabled color="success">Button</base-button>
      <base-button disabled color="warning">Button</base-button>
      <base-button disabled color="danger">Button</base-button>
      <base-button disabled color="info">Button</base-button>
    </div>
    <div class="flex mt-2">
      <base-button size="xs">Button</base-button>
      <base-button size="sm">Button</base-button>
      <base-button size="md">Button</base-button>
      <base-button size="lg">Button</base-button>
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
