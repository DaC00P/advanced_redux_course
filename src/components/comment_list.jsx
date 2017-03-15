import React from 'react';
import {connect} from 'react-redux';;

const CommentList = (props) => {
  const listOfComments = props.comments.map((comment)=>{
    return(
      <li key={comment}>
        {comment}
      </li>
    )
  });
  return(
    <ul className='comment-list'>
      {listOfComments}
    </ul>
  )
}

function mapStateToProps(state){
  return {comments: state.comments}
}

export default connect(mapStateToProps)(CommentList);
