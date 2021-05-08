import { HeaderContainer, IconContainer } from "./styles"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Flex } from '../../Containers'

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { useEffect, useRef, useState } from "react";
import { MenuList } from "@material-ui/core";


// const StyledMenu = withStyles({
//     paper: {
//       border: '1px solid #d3d4d5',
//     },
//   })((props) => (
//     <MenuList
//       elevation={0}
//       getContentAnchorEl={null}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//       {...props}
//     />
//   ));
  
//   const StyledMenuItem = withStyles((theme) => ({
//     root: {
//       '&:focus': {
//         backgroundColor: theme.palette.primary.main,
//         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//           color: theme.palette.common.white,
//         },
//       },
//     },
//   }))(MenuItem);


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));


const Header = () => {

    const classes = useStyles();
    const [cartOpen, setCartOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const accountAnchorRef = useRef(null);
    const cartAnchorRef = useRef(null);

    const handleToggle = (button) => {
        switch (button) {
            case 'account':
                setAccountOpen((prevAccountOpen) => !prevAccountOpen);
                break;
            case 'cart':
                setCartOpen((prevCartOpen) => !prevCartOpen);
                break;
            default:
                break;
        }
    };

    const handleClose = (event) => {
        if (accountAnchorRef.current && accountAnchorRef.current.contains(event.target)) {
            setCartOpen(false);
            return;
        }
        
        if (cartAnchorRef.current && cartAnchorRef.current.contains(event.target)) {
            setAccountOpen(false);
            return;
        }
        
        setCartOpen(false);
        setAccountOpen(false);
    };
    
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setAccountOpen(false);
            setCartOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevAccountOpen = useRef(accountOpen);
    const prevCartOpen = useRef(cartOpen);
    useEffect(() => {
        if (prevAccountOpen.current === true && accountOpen === false) {
            accountAnchorRef.current.focus();
        }

        prevAccountOpen.current = accountOpen;
    }, [accountOpen]);

    useEffect(() => {
        if (prevCartOpen.current === true && cartOpen === false) {
            cartAnchorRef.current.focus();
        }

        prevCartOpen.current = cartOpen;
    }, [cartOpen]);



    return (
        <HeaderContainer>
            <h1>Lumiverso</h1>
            <Flex>
                <Button
                    ref={accountAnchorRef}
                    aria-controls={accountOpen ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={() => handleToggle('account')}
                >
                    <AccountCircleIcon />
                </Button>
                <Popper open={accountOpen} anchorEl={accountAnchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={accountOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                                        <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <Button
                    ref={cartAnchorRef}
                    aria-controls={cartOpen ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={() => handleToggle('cart')}
                >
                    <ShoppingCartIcon />
                </Button>
                <Popper open={cartOpen} anchorEl={cartAnchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={cartOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem>
                                            Entre na sua conta
                                        </MenuItem>
                                        <MenuItem>
                                            para adicionar itens 
                                        </MenuItem>
                                        <MenuItem>
                                            no carrinho
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Flex>
        </HeaderContainer>
    )
}

export default Header