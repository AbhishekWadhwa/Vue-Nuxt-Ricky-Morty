<template>
  <div class="selected-filter-wrapper">
    <h1>Selected Filter</h1>
    <div class="selected-filter-text">
      <p>{{ selectedvalue }}</p>
      <a class="cross-icon" @click="closeIt">X</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectedvalue: {
      type: String,
      required: true
    }
  },
  methods: {
    closeIt(e) {
      e.preventDefault()
      this.$emit('closing')
    }
  }
}
</script>
