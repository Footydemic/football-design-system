import FdsAvatar from "../components/Avatar/Avatar.vue"

export default {
  title: "Atoms/Avatar",
  parameters: {
    layout: "fullscreen",
  },
}

export const Default = () => ({
  components: { FdsAvatar },
  data() {
    return {
      avatar: {
        link: "#",
        image: "https://cdn.soccersapi.com/images/soccer/players/100/477.png",
      },
      avatarClub: {
        link: "#",
        image: "https://cdn.soccersapi.com/images/soccer/teams/100/2809.png",
      },
    }
  },
  template: `<div class="fds-app" style="margin: 16px" >
  <FdsAvatar :avatar="avatar" />
  <FdsAvatar :avatar="avatarClub" flat style="margin-top: 16px" />
  </div>`,
})
