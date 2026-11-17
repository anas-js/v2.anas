export default {
  state: () => ({
    APITemp : "",
    APIDes: "",
    APIArt: "" ,
    numTemp: "" ,
    numDes: "" ,
    numArt:  "",
  }),
  mutations : {
    loadApi(state, data) {
      state.APITemp = data.template
     state.APIDes = data.designs
     state.APIArt = data.articles
      state.numTemp = data.template.length
     state.numDes = data.designs.length
      state.numArt = data.articles.length
    }
  },
  actions: {
    nuxtServerInit () {
      // return this.$axios.$get("https://assets7.lottiefiles.com/private_files/lf30_WdTEui.json").then(res => {
      //   this.state.jsonHome = res
      // })
    }
  }

}
