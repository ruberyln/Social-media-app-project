const apiList = {
  // Authentication APIs
  signup: {
    url: () => "api/users/register",
    method: "post",
  },
  login: {
    url: () => "api/users/login",
    method: "post",
  },
  createPost: {
    url: () => "api/posts/create",
    method: "post",
  },
  findAllPost: {
    url: () => "api/posts/findAll",
    method: "post",
  },
  createComment: {
    url: () => "api/comments/create",
    method: "post",
  },
  uploadImage:{
    url: () => "api/upload",
    method: "post",
  },
  upVoting:{
    url:()=>"api/posts/upVote",
    method:"post",
  },
  downVoting:{
    url:()=>"api/posts/downVote",
    method:"post",
  }
};
export default apiList;