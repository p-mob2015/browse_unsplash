import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import LoadIndicator from 'components/common/LoadIndicator';

import './styles.scss';

const ImageGrid = ({ list, hasMore, onLoadMore }) => (
  <div className="image-grid" id="scrollable-image-grid">
    <InfiniteScroll
      dataLength={list.length}
      hasMore={hasMore}
      next={onLoadMore}
      loader={<LoadIndicator />}
      scrollableTarget="scrollable-image-grid"
    >
      <div className="image-grid__content">
        {list.map(img => (
          <div className="image-grid__content__item" key={img.id}>
            <img src={img.urls.regular} alt="Unavailable" />
            <div className="image-grid__content__item__title">
              {img.description || 'No Description'}
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  </div>
);

ImageGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool,
  onLoadMore: PropTypes.func.isRequired,
};
ImageGrid.defaultProps = {
  hasMore: true,
};

export default ImageGrid;
