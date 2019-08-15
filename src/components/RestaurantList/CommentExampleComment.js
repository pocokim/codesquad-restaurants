import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";

const CommentExampleComment = props => {
  console.log("comment 컴포넌트로 넘겨받은 props", props);
  const proceedProps = props.comments.slice(0,4);
  console.log(proceedProps);

  const CommentList = proceedProps.map(comment=>{
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author as="a">{comment.writerName}</Comment.Author>
          <Comment.Metadata>
            <div>Today at {comment.createdAt}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  })

  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>
      {CommentList}
      {/* <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form> */}
    </Comment.Group>
  );
};

export default CommentExampleComment;
