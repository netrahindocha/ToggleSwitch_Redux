import React from 'react'
import { connect } from 'react-redux'
import '../App.css';
import { mapDispatchToProps, mapStateToProps } from '../redux/Dispatch'

function ConnectedRoom(props) {
  return (
    <div className={`room ${props.islightOn?`dark`:`lit`}`}>
      <h1>The room is {props.islightOn}</h1>
      <button className='flip' onClick={props.changeMode}>Flip</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRoom)