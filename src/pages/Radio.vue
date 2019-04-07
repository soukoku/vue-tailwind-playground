
<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <br />
    <tw-radio type="radio" id="one" value="One" v-model="picked" :disabled="disabled" />
    <label for="one">One</label>
    <br />
    <tw-radio type="radio" id="two" value="Two" v-model="picked" :disabled="disabled" />
    <label for="two">Two</label>

    <!--
    <tw-radio
      id="one"
      value="First"
      v-model="picked"
      :disabled="disabled"
    ></tw-radio>
    <label for="one">
      For label
    </label>
    <br />
    <label>
      <tw-radio value="Second" :disabled="disabled" v-model="picked"></tw-radio>
      Wrapped label
    </label> -->
    <br />
    <span>Picked: {{ picked }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      picked: ''
    }
  }
}
</script>

<style>
</style>
