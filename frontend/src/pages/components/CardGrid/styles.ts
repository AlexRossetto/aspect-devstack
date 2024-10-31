import { CSSProperties } from "react";

export const cardGridContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#c7e3f7',
  marginLeft: '40px',
  width: '1000px',
  border: '1px solid transparent',
  borderRadius: '20px'
}

export const dateSectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '10px',
  borderBottom: '1px solid white',
};

export const appointmentsContainerStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'center',
  width: '100%',
};


export const modalBackdropStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(8px)'
};

export const modalStyle = {
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  outline: 'none',
};


export const gridStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  justifyContent: 'center',
  margin: '10px 0',
  overflowY: 'auto', 
  height: '100%', 
  padding: '20px'
};


export const boxStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '14px',
  borderBottom: '2px solid #ddd'
}
