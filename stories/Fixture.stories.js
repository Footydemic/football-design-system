import FdsFixture from "../components/Fixture/Fixture.vue"

export default {
  title: "Components/Fixture",
  parameters: {
    layout: "fullscreen",
  },
}

export const Default = () => ({
  components: { FdsFixture },
  data() {
    return {
      fixture: {
        result: {
          full: "0:1",
          ht: "0:0",
        },
        home: {
          name: "DSC Arminia Bielfeld",
          avatar: {
            link: "#",
            image:
              "https://cdn.soccersapi.com/images/soccer/teams/100/2865.png",
          },
        },
        away: {
          name: "Wolverhampton Wanderers",
          avatar: {
            link: "#",
            image: "https://cdn.soccersapi.com/images/soccer/teams/100/16.png",
          },
        },
      },
      fixture2: {
        result: {
          full: "3:2",
          ht: "0:1",
        },
        home: {
          name: "Brighton & Hove Albion",
          avatar: {
            link: "#",
            image: "https://cdn.soccersapi.com/images/soccer/teams/100/12.png",
          },
        },
        away: {
          name: "Manchester United",
          avatar: {
            link: "#",
            image: "https://cdn.soccersapi.com/images/soccer/teams/100/19.png",
          },
        },
      },
    }
  },
  template: `<div class="fds-app" style="margin: 16px; max-width: 800px" >
  <FdsFixture :fixture="fixture" flat-team />
  <FdsFixture :fixture="fixture2" flat-team style="margin-top: 10px"/>
  </div>`,
})
