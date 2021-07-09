// import communityQuery from '~/apollo/queries/community'

export const state = () => ({
  CommunityHero: { title: '', text: '', price: '4000' },
  CommunitySlider: {},
  CommunityScheduleTour: {},
  layout: [],
})

export const mutations = {
  setCommunityData: (state, data) => {
    data.acf.components.forEach((n) => {
      state[n.acf_fc_layout] = { ...state[n.acf_fc_layout], ...n }
      state.layout.push(n.acf_fc_layout)
    })
  },
}

export const actions = {
  async getCommunityData({ state, commit }) {
    try {
      const communityData = await this.$axios.$get('/communities/5')
      // const communityData = await this.app.apolloProvider.defaultClient.query({
      //  query: communityQuery,
      // })
      commit('setCommunityData', communityData)
    } catch (err) {
      console.error(err)
    }
  },
}
