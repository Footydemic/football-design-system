import FdsBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs.vue"

export default {
  title: "Components/Breadcrumbs",
  parameters: {
    layout: "fullscreen",
  },
}

export const Default = () => ({
  components: { FdsBreadcrumbs },
  data() {
    return {
      breadcrumbs: [
        {
          link: "#",
          text: "Footydemic",
        },
        {
          link: "#",
          text: "Competitions",
        },
        {
          link: "",
          text: "Premier League",
        },
      ],
    }
  },
  template: `<div style="padding: 16px"><FdsBreadcrumbs :breadcrumbs="breadcrumbs" /></div>`,
})
