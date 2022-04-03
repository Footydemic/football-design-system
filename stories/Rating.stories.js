import FdsRating from "../components/Rating/Rating.vue"

export default {
  title: "Atoms/Rating",
  parameters: {
    layout: "fullscreen",
  },
}

export const Default = () => ({
  components: { FdsRating },
  template: `<div class="fds-app" style="margin: 16px; max-width: 300px" >
  <FdsRating :rating="8" />
  <FdsRating :rating="3" />
  <FdsRating :rating="7.8" />
  <FdsRating :rating="9" />
  </div>`,
})
