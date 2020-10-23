Vue.component("vote", {
  template: `#vote-template`,
  //   template: `
  //   <div>
  //   <h1>Result: ({{ count }})</h1>
  //   <button @click="incrementCount">Vote</button>
  //   </div>
  //   `,
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
});

new Vue({
  el: "#app",
  //data
  //methods
  //created
});
