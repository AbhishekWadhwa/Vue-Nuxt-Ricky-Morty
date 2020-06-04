<template>
  <div class="home">
    <div class="home-content">
      <div class="home-content__wrapper">
        <div class="items">
          <Characters :characters="charac" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Characters from '@/components/Molecules/Characters/CharacterCard'

export default {
  components: {
    Characters
  },
  computed: {
    charac() {
      return this.$store.getters.characters
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.home {
  width: 100%;
}
</style>
