import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components'

const drawerWidth = 240;


const StyledDrawer = styled(Drawer)`
&& {
  & .nav-link:hover,.Mui-selected {
      color: ${props => props.theme.palette.accent.main};

      & svg {
        color: ${props => props.theme.palette.accent.main};
      }
    }

  & > div {
    background-color: ${props => props.theme.palette.secondary.main};

    & svg {
      color: ${props => props.theme.palette.primary.main};
    }
  }

  &.closed > div {
    width: 0;
    transition: ${props => props.theme.transitions.create('width', {
                  easing: props.theme.transitions.easing.easeOut,
                  duration: props.theme.transitions.duration.standard,
                })}
  }


  &.open > div {
    width: ${drawerWidth}px;
    transition: ${props.theme.transitions.create('width', {
                  easing: props.theme.transitions.easing.easeIn,
                  duration: props.theme.transitions.duration.standard,
                })}
  }



  &.mini > div{
    overflow-x: hidden;
    width: ${props => props.theme.spacing(7) + 1}px;
    transition: ${props => props.theme.transitions.create('width', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.standard,
                })};
        
    ${props => [props.theme.breakpoints.up('sm')]} {
      width: ${props => props.theme.spacing(9) + 1}px;
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

