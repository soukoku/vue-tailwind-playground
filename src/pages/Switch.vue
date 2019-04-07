<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <br />

    <tw-switch id="switch" v-model="checked" :disabled="disabled"></tw-switch>
    <br />

    <tw-switch id="switch" v-model="checked" :disabled="disabled"></tw-switch>
    <label for="switch">
      For label
    </label>
    <br />
    <label>
      <tw-switch :checked="checked" :disabled="disabled"></tw-switch>
      Wrapped label
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      checked: false
    }
  }
}
</script>

<style>
</style>
