import api from '@src/services/api';
import {Comment} from '@src/model/Comment';
import {AxiosResponse} from 'axios';

async function getOneComment(commentId: number): Promise<Comment> {
  const response = await api.get<Comment, AxiosResponse<Comment>>(
    `comments/${commentId}`,
  );
  return response.data;
}

export default getOneComment;
