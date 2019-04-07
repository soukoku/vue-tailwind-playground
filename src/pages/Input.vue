<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <br />
    Text: <tw-input size="xs" value="xs" :disabled="disabled" />
    <tw-input size="sm" value="sm" :disabled="disabled" />
    <tw-input size="md" value="md" :disabled="disabled" />
    <tw-input size="lg" value="lg" :disabled="disabled" />
    <br />
    Textarea: <tw-input type="textarea" class="resize" :disabled="disabled" />
    <br />
    Number: <tw-input type="number" :disabled="disabled" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false
    }
  }
}
</script>
