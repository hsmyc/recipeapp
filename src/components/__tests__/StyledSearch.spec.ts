import { mount } from '@vue/test-utils'
import StyledSearch from '@/components/Styled/StyledSearch.vue'
import { describe, it, expect } from 'vitest'

describe('StyledSearch.vue', () => {
  it('uses default props when none are provided', () => {
    const wrapper = mount(StyledSearch)

    expect(wrapper.vm.$props.width).toBe('100px')
    expect(wrapper.vm.$props.height).toBe('48px')
    expect(wrapper.vm.$props.withIcon).toBe(true)
  })

  it('renders search icon when withIcon is true', () => {
    const wrapper = mount(StyledSearch, {
      props: {
        withIcon: true
      }
    })

    const icon = wrapper.find('img')
    expect(icon.exists()).toBe(true)
  })

  it('does not render search icon when withIcon is false', () => {
    const wrapper = mount(StyledSearch, {
      props: {
        withIcon: false
      }
    })

    const icon = wrapper.find('img')
    expect(icon.exists()).toBe(false)
  })

  it('emits the correct value on input change', async () => {
    let receivedValue = null

    const wrapper = mount(StyledSearch, {
      props: {
        onChange: (value) => {
          receivedValue = value
        }
      }
    })

    await wrapper.find('.input').setValue('test value')

    expect(receivedValue).toEqual('test value')
  })

  it('adjusts width and height based on props', () => {
    const wrapper = mount(StyledSearch, {
      props: {
        width: '150px',
        height: '50px'
      }
    })

    const container = wrapper.find('.container')
    expect(container.attributes('style')).toContain('width: 150px')
    expect(container.attributes('style')).toContain('height: 50px')
  })
})
