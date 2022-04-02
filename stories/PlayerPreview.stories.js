import FdsPlayerPreview from "../components/PlayerPreview/PlayerPreview.vue"

export default {
  title: "Components/PlayerPreview",
  parameters: {
    layout: "fullscreen",
  },
}

export const Default = () => ({
  components: { FdsPlayerPreview },
  data() {
    return {
      player: {
        fname: "Thorgan",
        lname: "Hazard",
        team: "Borussia Dortmund",
        position: "Center Midfielder (CM)",
        avatar: {
          link: "#",
          image:
            "https://cdn.soccersapi.com/images/soccer/players/100/13191.png",
        },
      },
      player2: {
        fname: "Robert",
        lname: "Lewandowski",
        stats: "90min, 2x assist, 1x goal",
        avatar: {
          link: "#",
          image:
            "https://cdn.soccersapi.com/images/soccer/players/100/13188.png",
        },
      },
    }
  },
  template: `<div class="fds-app" style="margin: 16px" >
  <FdsPlayerPreview :player="player" />
  <FdsPlayerPreview :player="player2" flat />
  </div>`,
})
