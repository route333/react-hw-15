import React from 'react';

function Modal(props) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        padding: '20px',
        borderRadius: '8px',
        position: 'relative',
      }}>
        <span onClick={props.onClose} style={{
          position: 'absolute',
          top: '0px',
          right: '40px',
          cursor: 'pointer',
          fontSize: '60px',
        }}>×</span>
        <img src={props.image} alt="Modal" style={{
          maxWidth: '100%',
          maxHeight: '80vh',
        }} />
      </div>
    </div>
  );
}

export default Modal;