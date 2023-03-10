import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment} from '@src/model/Comment';
import {AddCommentPayload} from '@store/comments/payloads/AddCommentPayload';
import api from '@src/services/api';

type ErrorType = {
  message: string;
};

export type CommentState = {
  comments: Comment[];
  loading: boolean;
  error: ErrorType | undefined;
};

const initialState: CommentState = {
  comments: [],
  error: undefined,
  loading: false,
};

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
      state.comments.push(newComment);
      return state;
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(
        comment => comment.id !== action.payload,
      );
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchComments.fulfilled,
      (state: CommentState, action: PayloadAction<Comment[]>) => {
        console.log(action.payload);
        return {
          comments: action.payload,
          loading: false,
          error: undefined,
        };
      },
    );
    builder.addCase(fetchComments.pending, (state: CommentState) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchComments.rejected, (state: CommentState, action) => {
      console.error(action);
      return {
        ...state,
        loading: false,
        error: {
          message: action.error.message,
        } as ErrorType,
      };
    });
  },
});

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId: number, {}) => {
    const response = await api.get<Comment[]>(`posts/${postId}/comments`);
    return response.data;
  },
);

export const {addComment, deleteComment} = commentsSlice.actions;

export default commentsSlice.reducer;
