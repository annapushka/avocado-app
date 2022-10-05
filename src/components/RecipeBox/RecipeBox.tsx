import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import RecipeList from '../RecipeList/RecipeList';


interface Props {
    meal: string;
    img: string;
    value: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: '30%',
        },
        media: {
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
    }),
);

export default function RecipeBox(props: Props) {

    const classes = useStyles();

    return (
        < Card className={classes.root} >
            <CardHeader
                title={props.meal}
            />
            <CardMedia
                className={classes.media}
                image={props.img}
            />
        </ Card>
    );
}