import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components'
import theme from '../theme';

const drawerWidth = 240;


const StyledDrawer = styled(Drawer)`
&& {
  & .nav-link:hover,.Mui-selected {
      color: ${theme.palette.accent.main};

      & svg {
        color: ${theme.palette.accent.main};
      }
    }

  & > div {
    background-color: ${theme.palette.secondary.main};

    & svg {
      color: ${theme.palette.primary.main};
    }
  }

  &.closed > div {
    width: 0;
    transition: ${theme.transitions.create('width', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.standard,
                })}
  }


  &.open > div {
    width: ${drawerWidth}px;
    transition: ${theme.transitions.create('width', {
                  easing: theme.transitions.easing.easeIn,
                  duration: theme.transitions.duration.standard,
                })}
  }



  &.mini > div{
    overflow-x: hidden;
    width: ${theme.spacing(7) + 1}px;
    transition: ${theme.transitions.create('width', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.standard,
                })};
        
    ${[theme.breakpoints.up('sm')]} {
      width: ${theme.spacing(9) + 1}px;
    }
  }
}
/*
    <List>
          {icons.map((icon, index) => (
            <ListItem button key={index}>
              <ListItemIcon><Icon icon={icon} size={24}/></ListItemIcon>
            </ListItem>
          ))}
          </List>*/
`
function withListener (WrappedComponent) { 
  console.log("comp", WrappedComponent)
  return (props) => (
    <>
    {
      props.withClickAway?
        <ClickAwayListener onClickAway={props.onClose}>
            <WrappedComponent {...props}/>
        </ClickAwayListener>:<WrappedComponent {...props}/>
    }
    </>
  )
}


export default withListener(StyledDrawer);

