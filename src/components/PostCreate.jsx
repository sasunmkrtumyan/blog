import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function CreatePost({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      padding: "0 20px",
      "& > *": {
        width: "100%",
      },
    },
    mybutton: {
      width: "100%",
      marginTop: "50px",
    },
  }));
  const classes = useStyles();

  const notify = () =>
    toast.error("All the fields are required!", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeContent(e) {
    setContent(e.target.value);
  }
  let history = useHistory();
  function handleSubmit() {
    if (!title.trim() || !content.trim()) {
      return notify();
    }
    addPost(title, content);
    history.push("/");
  }

  return (
    <div className="create-post">
      <ToastContainer />
      <h2 className="create-post-heading">Tell us your story!</h2>
      <div className="form-div">
        <form className={classes.root} noValidate autoComplete="off">
          <div className="input-flex">
            <TextField
              value={title}
              onChange={handleChangeTitle}
              className={classes.mybutton}
              id="standard-basic"
              label="Title*"
            />
            <TextField
              value={content}
              onChange={handleChangeContent}
              className={classes.mybutton}
              id="outlined-search"
              label="Comment*"
              type="search"
            />
            <Button
              color="primary"
              onClick={handleSubmit}
              className={classes.mybutton}
            >
              ADD
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
