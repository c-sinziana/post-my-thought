import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    selectedImage: "/coffee.png",
    title: "Ethiopian coffee",
    content: "I've heard good things about it",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      flower: 0,
      flame: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    selectedImage: "/pizza.jpg",
    title: "Slices",
    content: "The more I say slice, the more I wanna go to Italy",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      flower: 0,
      flame: 0,
      coffee: 0,
    },
  },
];

const postsSilce = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(selectedImage, title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            selectedImage,
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              flower: 0,
              flame: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSilce.actions;

export default postsSilce.reducer;
