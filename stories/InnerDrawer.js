import React from 'react'
import DrawerInner from "../src/components/responsiveDrawerInner"
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
  palette:{
    accent: {main: "#fff"}
  }
})

export default () => (
  <DrawerInner theme={theme} open={true} className="mini">
    <div className="nav-link">Hello</div>
  </DrawerInner>
)
