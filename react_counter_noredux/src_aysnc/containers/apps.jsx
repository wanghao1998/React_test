import React from 'react'
import {connect} from 'react-redux'

import {decrementCreator,incrementCreator,incremensAsync} from "../redux/actions";
import app from '../components/app'

export  default connect(
    state=>({count:state}),
    {incrementCreator,decrementCreator,incremensAsync}
)(app)