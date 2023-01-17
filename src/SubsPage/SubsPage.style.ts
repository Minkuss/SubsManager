import { style } from "typestyle";


export const subsBody = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

export const addBtn = style({
  border: "none",
  cursor: "pointer",
  backgroundColor: "rgba(55, 54, 54, 1)",
  color: "white",
  height: "72px",
  marginTop: "53px",
  fontFamily: "Jura",
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "47px",
  borderRadius: "10px",
  paddingLeft: "94px",
  paddingRight: "94px",
  "$nest": {
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      border: "1px dashed #FFFFFF"
    },
    "&:active": {
      backgroundColor: "rgba(37, 37, 37, 1)",
    },
  }  
})