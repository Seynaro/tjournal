import React from 'react'
import {Paper, Button, IconButton, Avatar} from "@material-ui/core"
import styles from './Header.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import PenIcon from '@material-ui/icons/Create';
import MessageIcon from '@material-ui/icons/SmsOutlined';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';

const Header: React.FC = () => {
    return (
        <Paper classes={{root: styles.root}}>
            <div className={styles.headerLeft}>
                <svg viewBox="0 0 24 25" className={styles.logo} elevation={0}>
                    <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
                    <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                    <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
                </svg>

                <div className={styles.searchBlock}>
                    <SearchIcon/>
                    <input placeholder="Поиск" type="text"/>
                </div>

                <Button>
                    <PenIcon/>
                </Button>
            </div>

            <div className={styles.headerRight}>
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
        </Paper>
    );
};

export default Header;