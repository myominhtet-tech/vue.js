Vue.component("post", {
  template: `
  <div>
    <h1><slot name="title">Post Title</slot></h1>
    <p><slot name="content">Post Content</slot></p>
    <a href="#"><slot name="link">Post Link</slot></a>
  </div>
  `,
});

new Vue({
  el: "#app",
});
