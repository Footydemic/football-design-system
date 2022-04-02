import FdsTeam from "../components/Team/Team.vue"

export default {
  title: "Components/Team",
  parameters: {
    layout: "fullscreen",
  },
}

export const Default = () => ({
  components: { FdsTeam },
  data() {
    return {
      team: {
        name: "Borussia Dortmund",
        avatar: {
          link: "#",
          image: "https://cdn.soccersapi.com/images/soccer/teams/100/98.png",
        },
      },
      team2: {
        name: "DSC Arminia Bielfeld",
        avatar: {
          link: "#",
          image: "https://cdn.soccersapi.com/images/soccer/teams/100/2865.png",
        },
      },
      team3: {
        name: "Wolverhampton Wanderers",
        avatar: {
          link: "#",
          image: "https://cdn.soccersapi.com/images/soccer/teams/100/16.png",
        },
      },
    }
  },
  template: `<div class="fds-app" style="margin: 16px; max-width: 300px" >
  <FdsTeam :team="team3" reverse-order />
  <FdsTeam :team="team" />
  <FdsTeam :team="team2" reverse-order />
  <FdsTeam :team="team3" flat-avatar />
  </div>`,
})
