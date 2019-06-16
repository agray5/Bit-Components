import React from 'react'
import DrawerInner from "../src/components/responsiveDrawerInner"
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Drawer from '../src/components/responsiveDrawer'

const theme = createMuiTheme({
  palette:{
    accent: {main: "#fff"}
  }
});

const links = [[
  {name: "Hello", url: "/"}
]]

export default () => (
  <div>
  <Drawer theme={theme} links={links}/>
  </div>
)
