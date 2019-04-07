
<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <br />

    <tw-checkbox v-model="checked" :disabled="disabled"></tw-checkbox>
    <br />

    <tw-checkbox
      id="switch"
      v-model="checked"
      :disabled="disabled"
    ></tw-checkbox>
    <label for="switch">
      For label
    </label>
    <br />
    <label>
      <tw-checkbox :checked="checked" :disabled="disabled"></tw-checkbox>
      Wrapped label
    </label>
    <br />
    <tw-checkbox indeterminate :disabled="disabled"></tw-checkbox>
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
