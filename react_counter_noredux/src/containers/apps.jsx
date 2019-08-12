import React from 'react'
import {connect} from 'react-redux'

import {addComments,delCommentse,addCommentsAsync} from "../redux/actions";
import app from '../components/app/app'

export  default connect(
    state=>({comments:state}),
    {addComments,delCommentse,addCommentsAsync}
)(app)