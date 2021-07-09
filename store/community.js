export const state = () => ({
  title: 'Curabitur estes los este peolse pretium.',
  subhead:
    'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit lirm ipsum estes son etes. Ipsum dolor sit amet, conse ctetur adipis.',
  price: '4000',
})

export const mutations = {
  setCommunityData: (state, data) => {
    state.title = data.title.rendered
    console.log(data);
  },
}

export const actions = {
  async getCommunityData({ state, commit }) {
    try {
      const data = await this.$axios.$get('/communities/5')
      commit('setCommunityData', data)
    } catch (err) {
      console.error(err)
    }
  },
}
