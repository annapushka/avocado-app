import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RecipeTypes } from '../types/recipe';

const moment = require('moment');

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export default function RecipeReviewCard(props: RecipeTypes) {

    const { img, title, calories, ingredients, steps, time, meal, id, date, author } = props;

    const formatedDate = moment(date).format('LL').toString();
    const titleToUpperCase = title[0].toUpperCase() + title.slice(0);
    const autorFirstLetter = author[0].toUpperCase();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {autorFirstLetter}
                    </Avatar>
                }
                title={titleToUpperCase}
                subheader={formatedDate}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={title}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph color="textSecondary">ИНГРЕДИЕНТЫ</Typography>
                    <Typography paragraph variant="body2" color="textSecondary" component="p">
                        {ingredients}
                    </Typography>
                    <Typography paragraph>ПОШАГОВЫЙ РЕЦЕПТ ПРИГОТОВЛЕНИЯ</Typography>
                    <Typography paragraph>
                        {steps}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}