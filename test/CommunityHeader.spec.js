import { mount } from '@vue/test-utils'
import CommunityHeader from '@/components/CommunityHeader.vue'


describe('CommunityHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CommunityHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})