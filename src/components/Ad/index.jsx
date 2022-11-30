import React from 'react'

const Ad = ({children}) => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        background: '#8dd6cb',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#021222',
    }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
            width: 900,
            height: 500,
            backgroundColor: '#021222',
          }}
        >
          {children}
        </div>
    </div>
  )
}

export default Ad