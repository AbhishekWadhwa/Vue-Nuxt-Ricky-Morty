<template>
  <div class="filter-wrapper">
    <div class="filter-container">
      <div class="filter">
        <h1>Filters</h1>
      </div>
      <div class="filter-box">
        <h2>Species</h2>
        <Filters :filters="Species" @filtering="getFilterValue" />
      </div>
      <div class="filter-box">
        <h2>Gender</h2>
        <Filters :filters="Gender" @filtering="getFilterValue" />
      </div>
      <div class="filter-box">
        <h2>Status</h2>
        <Filters :filters="Status" @filtering="getFilterValue" />
      </div>
    </div>
  </div>
</template>
<script>
import Filters from '@/components/Molecules/Filter/FilterCard'

export default {
  components: {
    Filters
  },
  data() {
    return {
      Species: ['Human', 'Mytholog', 'Other Species'],
      Gender: ['Male', 'Female'],
      Status: ['Alive', 'Dead', 'Unknown']
    }
  },

  methods: {
    getFilterValue(checkedValue) {
      let checkedKey = ''
      if (this.Species.includes(checkedValue)) {
        checkedKey = 'species'
      }
      if (this.Gender.includes(checkedValue)) {
        checkedKey = 'gender'
      }
      if (this.Status.includes(checkedValue)) {
        checkedKey = 'status'
      }
      if (checkedKey && checkedValue) {
        this.$emit('customSearching', checkedKey, checkedValue)
      }
    }
  }
}
</script>
<style lang="scss"></style>
