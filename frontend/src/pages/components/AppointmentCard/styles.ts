import { CSSProperties } from "react";

export const cardStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  margin: "5px 0",
  transition: "transform 0.2s",
  backgroundColor: "#fff",
  flexGrow: 1,
};

export const IconStyle: CSSProperties = {
  fontSize: "20px",
  color: "#4dc6db",
  position: "absolute",
  top: "5",
  right: "4",
  border: "1px solid #4dc6db",
  borderRadius: "5px",
  cursor: "pointer",
};
