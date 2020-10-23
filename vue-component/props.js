Vue.component("post", {
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <a href="#">{{ link }}</a>
    </div>
    `,
  //   props: ["title", "content", "link"],
  //   props: {
  //     title: String,
  //     content: String,
  //     link: String,
  //   },
  props: {
    title: {
      type: String,
      //   required: true,
      default: "This is default title",
    },
    content: String,
    link: String,
  },
});

new Vue({
  el: "#app",
  data: {
    // postTitle: "Post Title demo",
    // postContent: "Post Content demo",
    posts: [
      { title: "Post One", content: "Post One content" },
      { title: "Post Two", content: "Post two content" },
      { title: "Post Three", content: "Post three content" },
    ],
  },
});
