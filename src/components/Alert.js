import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"70px"}}>
      {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.Alert.msg}!</strong>
      </div>}
    </div>
    
    
  )
}
