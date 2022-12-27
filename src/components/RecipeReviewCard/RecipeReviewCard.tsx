import React, { useState, useEffect } from 'react';
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import { useLocation } from 'react-router';
import { WhatsappShareButton } from "react-share";
import { RecipeTypes } from '../../types/recipe';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import classNames from 'classnames';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 300,
            height: '100%',
            minHeight: 400,
        },
        header: {
            height: 50,
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
            backgroundColor: '#dea732',
        },
    }),
);

export default function RecipeReviewCard(props: RecipeTypes) {

    const { img, title, calories, ingredients, steps, time, date, author } = props;
    const { likeFilter } = useTypedSelector(state => state.recipe);

    const location = useLocation();
    const shareLink = `https://annapushka.github.io/avocado_app/#${location.pathname}`

    const formatedDate = moment(date).format('LL').toString();
    const titleToUpperCase = title[0].toUpperCase() + title.slice(1);
    const autorFirstLetter = author[0].toUpperCase();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const favoriteClass = classNames({
        'liked': favorite,
    });

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handlerFavoriteClick = () => {
        setFavorite(!favorite);
    };

    return (likeFilter && !favorite ? (
        <></>
    ) : (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {autorFirstLetter}
                    </Avatar>
                }
                title={titleToUpperCase}
                subheader={formatedDate}
                className={classes.header}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Время приготовления: {time} мин<br />
                    Количество калорий: {calories} ккал
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handlerFavoriteClick}
                >
                    <FavoriteIcon className={favoriteClass} />
                </IconButton>
                <IconButton aria-label="share">
                    <WhatsappShareButton
                        url={shareLink}
                        title={title}
                        separator=": "
                        className="shareWrapper"
                    >
                        <ShareIcon />
                    </WhatsappShareButton>
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
    ))
}