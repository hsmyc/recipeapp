import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StyledButton from '@/components/Styled/StyledButton.vue'
import StyledText from '@/components/Styled/StyledText.vue'

describe('StyledButton', () => {
  it('should have default props values', () => {
    const wrapper = mount(StyledButton)
    expect(wrapper.props().width).toBe('96px')
    expect(wrapper.props().height).toBe('48px')
    expect(wrapper.props().type).toBe('filled')
    expect(wrapper.props().textType).toBe('medium')
  })

  it('should apply styles based on props', () => {
    const wrapper = mount(StyledButton, {
      props: {
        type: 'outlined'
      }
    })
    const button = wrapper.find('.button-container')
    expect(button.attributes('style')).toContain('border: 1px solid black')
    expect(button.attributes('style')).toContain('justify-content: space-between')
  })

  it('should adjust text color based on type', () => {
    const wrapper = mount(StyledButton, {
      props: {
        type: 'text'
      }
    })
    const styledText = wrapper.findComponent(StyledText)
    expect(styledText.props().color).toBe('dark')
  })

  it('should render icon when withIcon is true', () => {
    const wrapper = mount(StyledButton, {
      props: {
        iconUrl: 'some-icon-url.png'
      }
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('some-icon-url.png')
  })

  it('should render slotted content', () => {
    const wrapper = mount(StyledButton, {
      slots: {
        default: 'Hello World'
      }
    })
    expect(wrapper.text()).toContain('Hello World')
  })
})
