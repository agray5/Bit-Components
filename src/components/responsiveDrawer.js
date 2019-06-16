import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { isMobile, MobileView} from "react-device-detect";
import Divider from '@material-ui/core/Divider';

// import icons
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';
import Drawer from './responsiveDrawerInner';
import LinkList from './linkList'



const modes = {
    closed: 'closed',
    open: 'open',
    mini: 'mini'
}

class Header extends Component{
    state = {
        mode: null
    };

    componentDidMount () {
        if(isMobile) this.handleModeChange(modes.closed)
        else this.handleModeChange(modes.mini)
    }

    onMouseEnter () {
        this.handleModeChange(modes.open)
    }

    onMouseLeave () {
        if(isMobile) this.handleModeChange(modes.closed)
        else this.handleModeChange(modes.mini)
    }

    onLinkClick () {
        if(isMobile) setTimeout(() => this.handleModeChange(modes.closed), 100);
    }
    
    handleModeChange (mode) {
        this.setState({mode})  
    }

    handleClose () {
        if(!isMobile) this.handleModeChange(modes.mini)
        else this.handleModeChange(modes.closed)
    }

    render(){
        return(
            <>
                <MobileView>
                    <StyledAppBar position="fixed" >
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            edge="start"
                            onClick={this.handleModeChange.bind(this, modes.open)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </StyledAppBar>
                </MobileView>
                <nav 
                    aria-label="Navigation" 
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                >
                <Drawer 
                    onClose={this.handleClose.bind(this)} 
                    open={this.state.mode !== modes.closed}
                    className={this.state.mode}
                    variant="permanent"
                    withClickAway={this.state.mode === modes.open}
                    theme={this.props.theme}
                >
                    { this.props.links && this.props.links.map((linkList, index) => (
                        <>
                         <LinkList 
                            links={linkList} 
                            onClick={(linkList[0].config && linkList[0].config.closeOnClick) &&
                                this.onLinkClick.bind(this)
                            }
                        />
                         {(index !== linkList.length-1) && <Divider />}
                        </>
                    ))}
                </Drawer>
                </nav>
            </>
        );
    }
}




const StyledAppBar = styled(AppBar)`
&& {
    background-color: rgba(0, 0, 0, 0);
    width: unset;
    right: unset;
    box-shadow: unset;
    left: 1rem;
}
`
export default Header
