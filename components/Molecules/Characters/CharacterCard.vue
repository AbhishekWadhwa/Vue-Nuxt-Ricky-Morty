<template>
  <div class="character-card__wrapper">
    <div
      v-for="character in characters"
      :key="character.id"
      class="character-card__content"
    >
      <div class="character-image">
        <img :src="character.image" alt="" />
      </div>
      <div class="character-name-container">
        <h2 class="character-name">
          {{ character.name }}
          <p>ID: {{ character.id }}</p>
        </h2>
      </div>
      <div class="character-description__wrapper">
        <div class="description">
          <p><strong> Status: </strong> {{ character.status }}</p>
          <p><strong> Specie: </strong> {{ character.species }}</p>
          <p><strong> Gender: </strong> {{ character.gender }}</p>
          <p><strong> Origin: </strong> {{ character.origin.name }}</p>
          <p><strong> Specie: </strong> {{ character.location.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss"></style>
