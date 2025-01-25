
import useStyles from './style';
import { Card,CardActions,CardContent,CardMedia,Button,Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'

function Post(post,setCurrentId) {
  const classes = useStyles();


  return (
    <Card className={classes.card}> 
   <CardMedia image={post.selectedFile} title={post.title}></CardMedia>
   <div className={classes.overlay}>
    <Typography variant='h6'>{post.creator}</Typography>
    <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div className={classes.overlay2}>
<Button style={{color:'white'}} size='small' onClick={()=>{}}>
  <MoreHorizIcon fontSize='default'>

  </MoreHorizIcon>
</Button>
    </div>
    <div className={classes.details}>
    <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag}`).join(', ')}
</Typography>

    </div>
    <CardContent>

      <Typography className={classes.title} variant='h5' gutterBottom>{post.message}</Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
<Button size='small' color='primary' onClick={()=>setCurrentId(post._id)}>
<ThumbUpAltIcon fontSize='small'>Like{post.likeCount}
</ThumbUpAltIcon>
</Button>
<Button size='small' color='primary' onClick={()=>{}}>
<DeleteIcon fontSize='small'>Delete
</DeleteIcon>
</Button>
    </CardActions>
    </Card>
  )
}

export default Post

