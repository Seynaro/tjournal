import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import styles from './content.module.scss'

const Content = () => {
    return (
        <div>
            <Paper elevation={0} className={styles.paper}>
                <Typography variant='h5'>19 августа, четверг</Typography>
            </Paper>
        </div>
    );
};

export default Content;