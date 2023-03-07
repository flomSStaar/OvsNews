export class AddCommentPayload {
  constructor(postId: number, name: string, email: string, body: string) {
    this.postId = postId;
    this.name = name;
    this.email = email;
    this.body = body;
  }

  postId: number;
  name: string;
  email: string;
  body: string;
}
