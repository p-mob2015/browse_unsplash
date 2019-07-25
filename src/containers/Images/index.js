import React from 'react';
import { connect } from 'react-redux';

import ImageGrid from 'components/ImageGrid';
import { loadImages, resetImages } from 'store/actions/images';
import { nextParams } from 'store/selectors';
import { generateImageParams } from 'store/utils';

import './styles.scss';

class Images extends React.Component {
  componentDidUpdate(prevProps) {
    const { reset, load, currentUser } = this.props;

    if (prevProps.currentUser !== currentUser) {
      load(generateImageParams(currentUser));
      reset();
    }
  }

  extendLoad = () => {
    const { load, loadParams } = this.props;

    load(loadParams);
  }

  noImages() {
    const { isLoading, isLoaded, list } = this.props;

    return !isLoading && isLoaded && list && !list.length;
  }

  render() {
    const { list, hasMore } = this.props;

    return (
      <div className="images">
        {this.noImages() && <div className="images__notice">No Photos Found</div>}
        {list && <ImageGrid list={list} hasMore={hasMore} onLoadMore={this.extendLoad} />}
      </div>
    );
  }
}

const mapStateToProps = ({ images, users }) => ({
  isLoading: images.isLoading,
  isLoaded: users.isLoaded,
  list: images.data,
  error: images.error,
  loadParams: nextParams(images),
  hasMore: images.hasMore,
  currentUser: users.current,
});
const mapDispatchToProps = dispatch => ({
  load: params => dispatch(loadImages(params)),
  reset: () => dispatch(resetImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
