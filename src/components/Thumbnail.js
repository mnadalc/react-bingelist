import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from 'reactstrap';
import map from 'lodash/map';
import truncate from 'lodash/truncate';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import FavouritesContext from '../utils/hooks/FavouritesContext';

const Thumbnail = ({
  movie: {
    id = 0,
    title = '',
    rating = 0.0,
    overview = '',
    releaseDate = '',
    genres = [],
    poster = {},
  },
  detailInfo: info,
  median = 0.0,
}) => {
  const year = new Date(releaseDate).getFullYear();
  const { favourites, addFavourite, removeFavourite } = useContext(
    FavouritesContext
  );

  const isFavourite = !isEmpty(favourites)
    ? find(favourites, favourite => favourite.id === id)
    : false;

  return (
    <Col sm='6' xs='6'>
      <Card className='card-info-thumbnail' data-testid='thumbnail'>
        <Row>
          <Col xl='4' lg='4'>
            <div>
              {isFavourite ? (
                <img
                  alt='Remove favorite icon'
                  className='floating-image image-top'
                  src='../../img/png/remove_favorite.png'
                  onClick={() => removeFavourite(info)}
                ></img>
              ) : (
                <img
                  alt='Add favorite icon'
                  className='floating-image image-top'
                  src='../../img/png/add_favorite.png'
                  onClick={() => addFavourite(info)}
                ></img>
              )}
              <CardImg
                src={poster.fullPath}
                alt='Image of'
                className='picture-container'
              />
              {rating >= median && (
                <img
                  className='floating-image image-bottom d-lg-none'
                  alt='Above median star icon'
                  src='../../img/png/above_median_star.png'
                ></img>
              )}
            </div>
          </Col>
          <Col xl='8' lg='8' className='d-none d-lg-block card-body-content'>
            <CardBody>
              <CardTitle>
                <Row className='row-title-thumbnail'>
                  <Col xl='9' lg='8'>
                    <h4
                      className='card-text-overflow-film'
                      data-testid='movieTitle'
                    >
                      {title}
                    </h4>
                  </Col>
                  <Col xl='3' lg='4' className='right-alignment'>
                    <span>{`${rating} `}</span>
                    <img
                      alt='Rating star icon'
                      className='rating-star-icon'
                      src='../../img/png/rating_star.png'
                    ></img>
                  </Col>
                </Row>
              </CardTitle>
              <CardSubtitle>
                <Row>
                  <Col xl='3' lg='4'>
                    <img
                      className='calendar-icon'
                      alt='Calendar icon'
                      src='../../img/png/calendar_icon.png'
                    ></img>
                    <span>{` ${year}`}</span>
                  </Col>
                  <Col
                    xl='9'
                    lg='8'
                    className='right-alignment card-text-overflow-film thumbnail-genres-list'
                  >
                    <i>{map(genres, 'name').join(', ')}</i>
                  </Col>
                </Row>
              </CardSubtitle>
              <br />
              <CardText className='card-text-thumbnail'>
                {truncate(overview, { length: 120, separator: /,? +/ })}
              </CardText>
              <hr />
              <Row className={`align-center-row`}>
                <Col>
                  {rating >= median && (
                    <img
                      alt='Above median icon'
                      src='../../img/png/above_median_star.png'
                      height='21'
                    ></img>
                  )}
                </Col>
                <Col className={`right-alignment`}>
                  <span className='more-info'>
                    <b>MORE INFO</b>
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
        <style jsx>{`
          .row-title-thumbnail {
            align-items: center;
          }

          .rating-star-icon {
            padding-bottom: 7.5px;
          }

          .calendar-icon {
            vertical-align: baseline;
          }

          .card-info-thumbnail {
            color: black;
            margin: 1em 0 1em 0;
          }

          .thumbnail-genres-list {
            font-weight: lighter;
          }

          .card-text-overflow-film {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .card-text-thumbnail {
            min-height: 4.5rem;
          }

          .floating-image {
            position: absolute;
            z-index: 1;
          }

          .image-top {
            top: 0;
            cursor: pointer;
          }

          .image-bottom {
            bottom: 0.5rem;
          }

          .more-info {
            color: MediumTurquoise;
            cursor: pointer;
          }

          .picture-container {
            height: 100%;
            position: absolute;
          }

          @media (max-width: 991px) {
            .picture-container {
              position: initial;
            }
          }

          .card-body-content {
            padding-left: 0;
          }

          .right-alignment {
            text-align: right;
          }

          @media (max-width: 991px) {
            .image-bottom {
              right: 1em;
            }
          }

          .padding-right {
            padding-right: 10px;
          }

          .align-center-row {
            align-items: center;
          }
        `}</style>
      </Card>
    </Col>
  );
};

Thumbnail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    rating: PropTypes.number,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.array,
    poster: PropTypes.shape({
      fullPath: PropTypes.string,
      size: PropTypes.string,
    }),
  }),
  detailInfo: PropTypes.object,
  median: PropTypes.number,
};

Thumbnail.defaultProps = {
  movie: {
    title: '',
    rating: 0.0,
    overview: '',
    releaseDate: '',
    genres: [],
    poster: {
      fullPath: '',
      size: '',
    },
  },
  detailInfo: {},
  median: 0,
};

export default Thumbnail;
