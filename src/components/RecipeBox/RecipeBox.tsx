import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import Breakfast from '../../img/breakfast.jpg'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: '30%',
        },
        media: {
            paddingTop: '56.25%', // 16:9
        },
    }),
);

export default function RecipeBox() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title='Завтрак'
                subheader='Количество рецептов: '
            />
            <CardMedia
                className={classes.media}
                image={Breakfast}
                title='breakfast'
            />
        </Card>
    );
}