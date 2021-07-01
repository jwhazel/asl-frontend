import { mount } from '@vue/test-utils'
import CommunityHero from '@/components/CommunityHero.vue'


describe('CommunityHero', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CommunityHero)
    expect(wrapper.vm).toBeTruthy()
  })
})

