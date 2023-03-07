import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment} from '@src/model/Comment';
import {AddCommentPayload} from '@store/comments/payloads/AddCommentPayload';

const initialState: Comment[] = [
  new Comment(1, 1, 'Titi', 'titi@gmail.com', 'Un nouveau commentaire'),
  new Comment(1, 2, 'Toto', 'toto@gmail.com', 'Un nouveau commentaire'),
  new Comment(1, 3, 'Tata', 'tata@gmail.com', 'Un nouveau commentaire'),
];

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<AddCommentPayload>) => {
      const newComment = new Comment(
        action.payload.postId,
        Date.now(),
        action.payload.name,
        action.payload.email,
        action.payload.body,
      );
      state.push(newComment);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      return state.filter(comment => comment.id !== action.payload);
    },
  },
});

export const {addComment, deleteComment} = commentsSlice.actions;

export default commentsSlice.reducer;
