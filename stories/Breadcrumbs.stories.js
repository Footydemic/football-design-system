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
      ],
    }
  },
  template: `<FdsBreadcrumbs :breadcrumbs="breadcrumbs" />`,
})
