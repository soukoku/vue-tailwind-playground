
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

    <hr />
    <label>
      <tw-checkbox value="foo" v-model="arrayValue"></tw-checkbox>
      Foo
    </label>
    <label>
      <tw-checkbox value="bar" v-model="arrayValue"></tw-checkbox>
      Bar
    </label>
    <label>
      <tw-checkbox value="baz" v-model="arrayValue"></tw-checkbox>
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
