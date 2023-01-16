import { style } from "typestyle";

export const btnBlock = style({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
})

export const btn = style({
  border: "none",
  borderRadius: "8px",
  backgroundColor: "rgba(46, 204, 113, 1)",
  boxShadow: "0px 6px 0px #15B358",
  "$nest": {
    "&:focus": {
      outline: "none"
    },
    "&:active": {
      backgroundColor: "rgba(41, 184, 101, 1)"
    }
  },
  fontSize: "25px",
  color: "white",
  width: "250px",
  height: "50px",
  cursor: "pointer",
})
