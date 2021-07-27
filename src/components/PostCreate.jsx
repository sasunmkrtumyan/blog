import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Button } from '@material-ui/core';


export default function CreatePost({addHandler}) {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  console.log(title, content);
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    mybutton: {
      width:"100%",
      marginTop: '50px' 
    }
  }));
  const classes = useStyles();
  
function handleChangeTitle(e) {
  setTitle(e.target.value)
}

function handleChangeContent(e) {
  setContent(e.target.value)
}

    return(
        <div className="create-post">
            <h2 className="create-post-heading">Tell us your story!</h2>
            <form className={classes.root} noValidate autoComplete="off">
              <div className='input-flex'>
      <TextField value={title} onChange={handleChangeTitle} className={classes.mybutton} id="standard-basic" label="Title*" />
      <TextField value={content} onChange={handleChangeContent} className={classes.mybutton} id="outlined-search" label="Comment*" type="search" />
      <Button color='primary' onClick={() => addHandler(title, content)} className={classes.mybutton}>ADD</Button>

      </div>
    </form>
        </div>
    )
}