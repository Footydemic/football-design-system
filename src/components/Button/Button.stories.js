import FdsButton from "./Button.vue"

export default {
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
}

export const LightMode = () => ({
  components: { FdsButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'" class="fds-design-system">
  <h2 style="margin-bottom: 20px">Primary button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <FdsButton style="margin: 16px 16px 16px 0" class="fds-button-large">Large</FdsButton>
    <FdsButton style="margin: 16px 16px 16px 0">Default</FdsButton>
    <FdsButton style="margin: 16px 16px 16px 0" class="fds-button-small">Small</FdsButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <FdsButton style="margin: 16px 16px 16px 0" class="fds-button-fill">Fill</FdsButton>
    <FdsButton style="margin: 16px 16px 16px 0" class="fds-button-outline">Outline</FdsButton>
    <FdsButton style="margin: 16px 16px 16px 0" class="fds-button-flat">Flat</FdsButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <FdsButton icon="ico-chat"  style="margin: 16px 16px 16px 0">With icon</FdsButton>
  <FdsButton icon="ico-chat"  style="margin: 16px 16px 16px 0"></FdsButton>
  <FdsButton icon="ico-chat"  style="margin: 16px 16px 16px 0" class="fds-button-outline"></FdsButton>
  <FdsButton icon="ico-chat"  style="margin: 16px 16px 16px 0" class="fds-button-flat"></FdsButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <FdsButton style="margin: 16px 16px 16px 0" class="fds-button-fill" disabled>Fill Disabled</FdsButton>
  <FdsButton style="margin: 16px 16px 16px  0" class="fds-button-outline" disabled>Outline Disabled</FdsButton>
  <FdsButton style="margin: 16px 16px 16px 0" class="fds-button-flat" disabled>Flat Disabled</FdsButton>
  </div>
  <p>Web specific</p>
  <FdsButton style="margin: 16px 0" class="fds-button-full" type="submit">Full width</FdsButton>
  <FdsButton style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</FdsButton>
  </div>`,
})

export const DarkMode = () => ({
  components: { FdsButton },
  template: `<div style="background: #222; overflow: hidden; padding: 16px" class="fds-dark-mode">
  <FdsButton style="margin: 16px 0" class="fds-button-secondary">Secondary</FdsButton>
  </div>`,
})
