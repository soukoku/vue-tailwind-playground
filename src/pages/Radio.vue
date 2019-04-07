
<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <br />
    <tw-radio
      type="radio"
      id="one"
      value="One"
      v-model="picked"
      :disabled="disabled"
    />
    <label for="one">One</label>
    <br />
    <label>
      <tw-radio
        type="radio"
        value="Two"
        v-model="picked"
        :disabled="disabled"
      />
      Two</label
    >
    
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
