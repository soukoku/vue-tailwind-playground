<template>
  <div>
    <label>
      <input type="checkbox" v-model="disabled" />
      Toggle disabled
    </label>
    <label>
      <input type="checkbox" v-model="shadow" />
      Toggle shadow
    </label>
    <label>
      <input type="checkbox" v-model="border" />
      Toggle border
    </label>

    <div class="flex">
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="full"
        color="none"
        >none</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="full"
        color="primary"
        >primary</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="full"
        color="success"
        >success</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="full"
        color="warning"
        >warning</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="full"
        color="danger"
        >danger</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="full"
        color="info"
        >info</tw-button
      >
    </div>
    <div class="flex mt-2">
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="plain"
        color="none"
        >none</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="plain"
        color="primary"
        >primary</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="plain"
        color="success"
        >success</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="plain"
        color="warning"
        >warning</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="plain"
        color="danger"
        >danger</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="plain"
        color="info"
        >info</tw-button
      >
    </div>
    <div class="flex mt-2">
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="none"
        color="none"
        >none</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="none"
        color="primary"
        >primary</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="none"
        color="success"
        >success</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="none"
        color="warning"
        >warning</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="none"
        color="danger"
        >danger</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        fill="none"
        color="info"
        >info</tw-button
      >
    </div>

    <div class="flex mt-2">
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        size="xs"
        >xs</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        size="sm"
        >sm</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        size="md"
        >md</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        size="lg"
        >lg</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        size="custom"
        class="pt-1 pr-2 pb-4 pl-8 text-5xl"
        >custom</tw-button
      >
    </div>
    <div class="flex mt-2">
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        rounded
        size="xs"
        >Rounded</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        rounded
        size="sm"
        >Rounded</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        rounded
        size="md"
        >Rounded</tw-button
      >
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        rounded
        size="lg"
        >Rounded</tw-button
      >
    </div>
    <div class="tw-btn-group mt-2">
      <tw-button
        :disabled="disabled"
        :shadow="shadow"
        :border="border"
        @click="testBtn"
        >Click Me</tw-button
      >
      <tw-button :disabled="disabled" :shadow="shadow" :border="border"
        >Button</tw-button
      >
      <tw-button :disabled="disabled" :shadow="shadow" :border="border"
        >Button</tw-button
      >
      <tw-button :disabled="disabled" :shadow="shadow" :border="border"
        >Button</tw-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      border: true,
      shadow: false
    }
  },
  methods: {
    testBtn() {
      alert('clicked')
    }
  }
}
</script>
