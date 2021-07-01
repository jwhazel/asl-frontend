import { mount } from '@vue/test-utils'
import CommunitySlider from '@/components/CommunitySlider.vue'


describe('CommunitySlider', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CommunitySlider)
    expect(wrapper.vm).toBeTruthy()
  })
})

