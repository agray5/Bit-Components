import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components'
import PropTypes from 'prop-types'


const getAccent = (theme) => {
  return theme.palette.accent?theme.palette.accent.main:"initial"
}

/** Style Wrapper for Responsive Drawer. Provides styles for open, closed, 
 * and mini state. Also listens for mouse leave drawer.
 */
const StyledDrawer = styled(Drawer)`
&& {
  & .nav-link:hover,.Mui-selected {
      color: ${props => getAccent(props.theme)};

      & svg {
        color: ${props => getAccent(props.theme)};
      }
    }

  & > div {
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.primary.main};

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
    width: ${props => props.width}px;
    transition: ${props => props.theme.transitions.create('width', {
                  easing: props.theme.transitions.easing.easeIn,
                  duration: props.theme.transitions.duration.standard,
                })}
  }



  &.mini > div{
    overflow-x: hidden;
    width: ${props => props.theme.spacing(7) + 1}px;
    transition: ${props => props.theme.transitions.create('width', {
                  easing: props.theme.transitions.easing.easeOut,
                  duration: props.theme.transitions.duration.standard,
                })};
        
    ${props => [props.theme.breakpoints.up('sm')]} {
      width: ${props => props.theme.spacing(9) + 1}px;
    }
  }
}
`

function withListener (WrappedComponent) { 
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

const WrappedComponent = withListener(StyledDrawer);

WrappedComponent.propTypes = {
  theme: PropTypes.object.isRequired,
  /** Drawer width in pixels */
  width: PropTypes.number,
  /** Is called  when mouse leaves drawer. */
  onClose: PropTypes.func.isRequired
}

WrappedComponent.defaultProps = {
  width: 240
}



export default WrappedComponent;

