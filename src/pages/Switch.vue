<template>
  <div>
    <label>
      <input type="switch" v-model="disabled" />
      Toggle disabled
    </label>
    <br />

    <tw-switch v-model="checked" :disabled="disabled"></tw-switch>
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

    <hr />
    <label>
      <tw-switch value="foo" v-model="arrayValue"></tw-switch>
      Foo
    </label>
    <label>
      <tw-switch value="bar" v-model="arrayValue"></tw-switch>
      Bar
    </label>
    <label>
      <tw-switch value="baz" v-model="arrayValue"></tw-switch>
      Baz
    </label>
    <br />
    Checked array: {{ arrayValue }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      checked: false,
      arrayValue: []
    }
  }
}
</script>

<style>
</style>
