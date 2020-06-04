import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      characters: []
    },
    mutations: {
      Characters(state, characters) {
        state.characters = characters
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://rickandmortyapi.com/api/character/')
          .then((response) => {
            const popularCharacters = response.data.results
            vuexContext.commit('Characters', popularCharacters)
          })
          .catch((e) => context.erorr(e))
      },
      async searchPopularData(vuexContext, searchItem) {
        try {
          await Promise.all([
            await axios.get(
              `https://rickandmortyapi.com/api/character/?name=${searchItem}`
            )
          ]).then((response) => {
            const popularCharacters = response[0].data.results
            vuexContext.commit('Characters', popularCharacters)
          })
        } catch (error) {
          /* eslint-disable-next-line no-console, no-undef */
          console.log(error)
        }
      },
      async sortPopularData(vuexContext, sortItem) {
        try {
          await Promise.all([
            await axios.get(`https://rickandmortyapi.com/api/character/`)
          ]).then((response) => {
            if (sortItem === 'Ascending') {
              const popularCharacters = response[0].data.results
              vuexContext.commit('Characters', popularCharacters)
            }
            if (sortItem === 'Descending') {
              const popularCharacters = response[0].data.results.reverse()
              vuexContext.commit('Characters', popularCharacters)
            }
          })
        } catch (error) {
          /* eslint-disable-next-line no-console, no-undef */
          console.log(error)
        }
      },
      async customSearchPopularData(vuexContext, filterItem) {
        try {
          await Promise.all([
            await axios.get(
              `https://rickandmortyapi.com/api/character/?${filterItem[0].checkedKey}=${filterItem[0].checkedValue}`
            )
          ]).then((response) => {
            const popularCharacters = response[0].data.results
            vuexContext.commit('Characters', popularCharacters)
          })
        } catch (error) {
          /* eslint-disable-next-line no-console, no-undef */
          console.log(error)
        }
      }
    },
    getters: {
      characters: (state) => state.characters
    }
  })
}

export default createStore
