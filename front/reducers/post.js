export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "디브호"
      },
      content: "첫 게시물",
      img: `data:image/jpeg;base64,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`,
      Comments: []
    }
  ],
  imagePaths: [], // 미리보기 이미지 경로
  addPostErrorReason: "", // 포스트 업로드 실패 사유
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스트 업로드 완료
  isAddingComment: false,
  addCommentErrorReason: "",
  commentAdded: false
};

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_IMAGES = "REMOVE_IMAGES";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_COMMENTS_REQUEST = "LOAD_COMMENTS_REQUEST";
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
export const LOAD_COMMENTS_FAILURE = "LOAD_COMMENTS_FAILURE";

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const ADD_DUMMY = "ADD_DUMMY";

export const dummyComment = {
  id: 1,
  User: {
    id: 1,
    nickname: 2
  },
  createAt: new Date(),
  content: "더미 댓글입니다."
};
export const addPost = {
  type: ADD_POST_REQUEST
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello",
    UserId: 1,
    User: {
      nickname: "디브호"
    }
  }
};

const dummyPost = {
  User: {
    id: 1,
    nickname: "제로초"
  },
  content: "나는 더미입니다."
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DUMMY:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      };

    case LOAD_MAIN_POSTS_REQUEST:
      return {
        ...state,
        mainPosts: []
      };
    case LOAD_MAIN_POSTS_SUCCESS:
      return {
        ...state,
        mainPosts: action.data
      };
    case LOAD_MAIN_POSTS_FAILURE:
      return {
        ...state
      };
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_USER_POSTS_FAILURE:
    case UPLOAD_IMAGES_REQUEST:
    case UPLOAD_IMAGES_SUCCESS:
    case UPLOAD_IMAGES_FAILURE:
    case REMOVE_IMAGES:
    case LIKE_POST_REQUEST:
    case LIKE_POST_SUCCESS:
    case LIKE_POST_FAILURE:
    case UNLIKE_POST_REQUEST:
    case UNLIKE_POST_SUCCESS:
    case UNLIKE_POST_FAILURE:
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        isAddingComment: true,
        addCommentErrorReason: "",
        commentAdded: false
      };
    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, dummyComment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        isAddingComment: false,
        mainPosts,
        commentAdded: true
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        isAddingComment: true,
        addCommentErrorReason: action.error,
        commentAdded: false
      };
    case LOAD_COMMENTS_REQUEST:
    case LOAD_COMMENTS_SUCCESS:
    case LOAD_COMMENTS_FAILURE:
    case RETWEET_REQUEST:
    case RETWEET_SUCCESS:
    case RETWEET_FAILURE:
    case REMOVE_POST_REQUEST:
    case REMOVE_POST_SUCCESS:
    case REMOVE_POST_FAILURE:

    case ADD_POST_REQUEST:
      return {
        ...state,
        isAddingPost: true,
        addPostErrorReason: "",
        postAdded: false
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isAddingPost: false,
        mainPosts: [action.data, ...state.mainPosts],
        postAdded: true
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        isAddingPost: true,
        addPostErrorReason: action.error
      };

    default: {
      return {
        ...state
      };
    }
  }
};
