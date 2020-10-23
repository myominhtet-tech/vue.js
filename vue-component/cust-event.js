Vue.component("create-post", {
  template: `
    <div>
        <input v-model="title" placeholder="Enter post title"><br><br>

        <input v-model="content" placeholder="Enter post content"><br><br>
        <button @click="createPost">Create</button>
    </div>
    `,
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    createPost() {
      //   alert("alert post");
      this.$emit("create-post", {
        title: this.title,
        content: this.content,
      }),
        (this.title = ""),
        (this.content = "");
    },
  },
});

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
  methods: {
    insertPost(post) {
      if (post.title && post.content) {
        this.posts.push(post);
      }
    },
  },
});
