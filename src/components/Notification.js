import React from 'react'

const Notification = ({show}) => {
    return (
      <div
        className={
          show ? "notification-container show" : "notification-container"
        }
      >
        <p>You have already entered this letter</p>
      </div>
    );
}

export default Notification
