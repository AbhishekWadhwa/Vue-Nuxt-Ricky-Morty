<template>
  <div>
    <FilterView @customSearching="getFilteredSearchValue" />
    <div class="column-control">
      <SelectedFilterView
        v-if="isFilterSelected"
        :selectedvalue="filterItem"
        @closing="closingIt"
      />
      <Search @searching="getSearchValue" />
      <Sort @sorting="sortByValue" />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Search from '@/components/Organisms/Search/SearchBar'
import Sort from '@/components/Organisms/Sort/SortDropDown'
import FilterView from '@/components/Organisms/Filter/FilterView'
import SelectedFilterView from '@/components/Organisms/Filter/SelectedFIlterView'
export default {
  components: {
    Search,
    Sort,
    FilterView,
    SelectedFilterView
  },
  data() {
    return {
      searchItem: '',
      sortItem: '',
      filterItem: '',
      count: 0,
      isFilterSelected: false
    }
  },

  methods: {
    makeSearchRequest() {
      this.$router.push({
        name: '',
        query: { q: this.searchItem }
      })
      const searchQuery = this.searchItem
      this.$store.dispatch('searchPopularData', searchQuery)
    },
    getSearchValue(searchValue) {
      this.searchItem = searchValue
      this.makeSearchRequest()
    },
    makeSortRequest() {
      const sortQuery = this.sortItem
      this.$store.dispatch('sortPopularData', sortQuery)
    },
    sortByValue(sortValue) {
      this.sortItem = sortValue
      this.makeSortRequest()
    },
    closingIt() {
      this.isFilterSelected = false
      this.filterItem = ''
    },
    getFilteredSearchValue(checkedKey, checkedValue) {
      this.filterItem = checkedValue
      this.isFilterSelected = true
      const filterQuery = [{ checkedKey, checkedValue }]
      this.$store.dispatch('customSearchPopularData', filterQuery)
    }
  }
}
</script>

<style></style>
