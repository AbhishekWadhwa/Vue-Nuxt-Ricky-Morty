<template>
  <div class="search-wrapper">
    <div class="search-container">
      <div class="search">
        <input
          id=""
          v-model="searchItem"
          class="search-field"
          type="search"
          name="search"
          placeholder="Enter a search term"
        />
      </div>
      <Button @click="search">Search</Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Atoms/Button/Button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      searchItem: ''
    }
  },

  methods: {
    search() {
      this.$emit('searching', this.searchItem)
    }
  }
}
</script>
<style lang="scss"></style>
