import { Button } from "@material-ui/core";

export default function Post({ title, content, user }) {
  return (
    <div className="post">
      <div className="post-info">
        <div className="circle"></div>
        <div className="post-data">
          <div>
            <p>{title}</p>
          </div>
          <div>
            <span>27/07/2021</span> <span>by {user}</span>
          </div>
        </div>
      </div>
      <p>{content}</p>
      <div className="but-pos">
        <Button color="primary">Learn more</Button>
      </div>
    </div>
  );
}
