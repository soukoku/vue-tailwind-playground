<template>
  <div>
    <label>
      <input type="checkbox" v-model="isBusy" />
      Toggle delayed busy
    </label>

    <div class="w-30 bg-gray-100 p-4 m-4 relative">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas id
        laboriosam a quo, libero vero nam harum ab dolorum totam, tenetur
        tempora ex, sunt alias atque inventore quibusdam debitis nisi!
      </p>

      <tw-busy :is-busy="isBusy"></tw-busy>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBusy: false
    }
  }
}
</script>