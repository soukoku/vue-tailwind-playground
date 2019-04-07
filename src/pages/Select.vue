<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <br />
    <tw-select size="xs" :disabled="disabled">
      <option v-for="(op, idx) in strOptions" :key="idx" :selected="idx === 0">
        {{ op }}
      </option>
    </tw-select>
    <tw-select size="sm" :disabled="disabled">
      <option v-for="(op, idx) in strOptions" :key="idx" :selected="idx === 1">
        {{ op }}
      </option>
    </tw-select>
    <tw-select size="md" :disabled="disabled">
      <option v-for="(op, idx) in strOptions" :key="idx" :selected="idx === 2">
        {{ op }}
      </option>
    </tw-select>
    <tw-select size="lg" :disabled="disabled">
      <option v-for="(op, idx) in strOptions" :key="idx" :selected="idx === 3">
        {{ op }}
      </option>
    </tw-select>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      strOptions: ['option 1', 'option 2', 'option 3', 'option 4'],
      objOptions: [
        { text: 'option 1', value: 1 },
        { text: 'option 2', value: 2 },
        { text: 'option 3', value: 3 },
        { text: 'option 4', value: 4 }
      ]
    }
  }
}
</script>