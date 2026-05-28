import Post from "./post.mjs"

const myPost = new Post("Javascript Basics", "Learning classes and modules.")

//call static class method publish on new class instance.
myPost.publish()