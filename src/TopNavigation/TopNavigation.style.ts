import { style } from "typestyle";

export const header = style({
  backgroundColor: "rgba(46, 45, 45, 1)",
  height: "102px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #FFFFFF"
});

export const btn = style({
  color: "white",
  cursor: "pointer",
  border: "1px dashed black",
  backgroundColor: "transparent",
  fontFamily: "Jura",
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "47px",
  height: "100%",
  paddingLeft: "20px",
  paddingRight: "20px",
  "$nest": {
    "&:focus": {
      outline: 'none',
    },
    "&:hover": {
      border: "1px dashed #FFFFFF"
    }
  }
})

export const avatar = style({
  borderRadius: "100px",
  width: "70px",
  height: "70px",
  alignSelf: "center",
  marginRight: "45px"
})