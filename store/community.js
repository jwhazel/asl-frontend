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
    let communityData = null
    try {
      communityData = await this.$axios.$get('/communities/100', {
        credentials: true,
        auth: {
          username: this.$config.backendUser,
          password: this.$config.backendPassword
        },
      })
    } catch (err) {
      console.error(err)
    }
    if (communityData) {
      commit('setCommunityData', communityData)
    }
  },
}
