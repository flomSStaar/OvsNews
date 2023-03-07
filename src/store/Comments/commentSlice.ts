import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment} from '@src/model/Comment';

const initialState: Comment[] = [
  new Comment(1, 1, 'Titi', 'titi@gmail.com', 'Un nouveau commentaire'),
  new Comment(1, 2, 'Toto', 'toto@gmail.com', 'Un nouveau commentaire'),
  new Comment(1, 3, 'Tata', 'tata@gmail.com', 'Un nouveau commentaire'),
];

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.push(action.payload);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      return state.filter(comment => comment.id !== action.payload);
    },
  },
});

export const {addComment, deleteComment} = commentsSlice.actions;
