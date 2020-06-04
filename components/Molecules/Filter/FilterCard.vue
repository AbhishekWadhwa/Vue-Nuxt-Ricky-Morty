<template>
  <div class="filter-box-wrapper">
    <div
      v-for="(filter, index) in filters"
      :key="filter"
      class="filter-box-container"
    >
      <input
        id="checkbox"
        v-model="checked[index]"
        type="checkbox"
        @click="filtered(filter)"
      />
      <label for="checkbox">{{ filter }}</label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      checked: []
    }
  },
  methods: {
    filtered(checkedValue) {
      this.$emit('filtering', checkedValue)
    }
  }
}
</script>
