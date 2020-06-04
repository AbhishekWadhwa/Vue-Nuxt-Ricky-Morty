import ClickMeButton from '@/components/Atoms/Button/Button'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

describe('Button.vue', () => {
    let wrapper;

  beforeEach(()=>{
    const localVue = createLocalVue()

    wrapper = mount(ClickMeButton, {
        localVue,
    })
  })

  it('has a button', ()=>{
    expect(wrapper.contains('button')).toBe(true)
  })
  it("display button",()=>{
    expect(wrapper.classes()).toContain('btn-success');
  })
})