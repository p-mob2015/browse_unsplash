import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';

import LoadIndicator from 'components/common/LoadIndicator';

import './styles.scss';

const UserList = ({ selected, list, hasMore, onLoadMore, onSelect }) => (
  <div className="user-list" id="scrollable-user-list">
    <InfiniteScroll
      dataLength={list.length}
      hasMore={hasMore}
      next={onLoadMore}
      loader={<LoadIndicator />}
      scrollableTarget="scrollable-user-list"
    >
      {list.map(user => (
        <div className={cx('user-list__item', { active: selected === user.username })} key={user.username} onClick={() => onSelect(user.username)}>
          <img className="avatar" src={user['profile_image'].small} alt={user['first_name']} />
          <div className="name">{user.name}</div>
        </div>
      ))}
    </InfiniteScroll>
  </div>
);

UserList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string,
  hasMore: PropTypes.bool,
  onLoadMore: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
UserList.defaultProps = {
  hasMore: true,
};

export default UserList;
