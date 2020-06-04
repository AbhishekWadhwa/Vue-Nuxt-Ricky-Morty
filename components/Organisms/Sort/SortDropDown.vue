<template>
  <div class="sort-wrapper">
    <div class="sort-container">
      <div class="sort">
        <select v-model="selectedKey" @change="sort">
          <option value="" disabled hidden>Sort By ID</option>
          <option v-for="key in keys" :key="key" :value="key">{{ key }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keys: ['Ascending', 'Descending'],
      selectedKey: ''
    }
  },
  methods: {
    sort(e) {
      e.preventDefault()
      this.$emit('sorting', this.selectedKey)
    }
  }
}
</script>
<style lang="scss"></style>
