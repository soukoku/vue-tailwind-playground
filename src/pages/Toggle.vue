
<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <label>
      <input type="checkbox" v-model="isSwitch" />
      Switch type
    </label>
    <br />

    <tw-toggle :type="isSwitch ? 'switch' : 'checkbox'" v-model="checked" :disabled="disabled"></tw-toggle>
    <br />

    <tw-toggle :type="isSwitch ? 'switch' : 'checkbox'"
      id="switch"
      v-model="checked"
      :disabled="disabled"
    ></tw-toggle>
    <label for="switch">
      For label
    </label>
    <br />
    <label>
      <tw-toggle :type="isSwitch ? 'switch' : 'checkbox'" :checked="checked" :disabled="disabled"></tw-toggle>
      Wrapped label
    </label>
    <br />
    <tw-toggle :type="isSwitch ? 'switch' : 'checkbox'" indeterminate :disabled="disabled"></tw-toggle>

    <hr />
    <label>
      <tw-toggle :type="isSwitch ? 'switch' : 'checkbox'" value="foo" v-model="arrayValue"></tw-toggle>
      Foo
    </label>
    <label>
      <tw-toggle :type="isSwitch ? 'switch' : 'checkbox'" value="bar" v-model="arrayValue"></tw-toggle>
      Bar
    </label>
    <label>
      <tw-toggle :type="isSwitch ? 'switch' : 'checkbox'" value="baz" v-model="arrayValue"></tw-toggle>
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
      arrayValue: [],
      isSwitch: false
    }
  }
}
</script>

<style>
</style>
