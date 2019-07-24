import React from 'react';
import { connect } from 'react-redux';

import SearchInput from 'components/SearchInput';
import UserList from 'components/UserList';
import { searchUsers, setCurrentUser, resetUsers } from 'store/actions/users';
import { nextParams, hasMore } from 'store/selectors';
import { generateUserParams } from 'store/utils';

import './styles.scss';

class Users extends React.Component {
  updateSearch = keyword => {
    const { reset, search } = this.props;

    reset();
    search(generateUserParams(keyword));
  }

  extendSearch = () => {
    const { search, queryParams } = this.props;

    search(queryParams);
  }

  noUsers() {
    const { isLoaded, list } = this.props;

    return isLoaded && list && !list.length;
  }

  noAction() {
    const { isLoading, isLoaded } = this.props;

    return !isLoading && !isLoaded;
  }

  render() {
    const { list, currentUser, hasMore, selectUser } = this.props;

    return (
      <div className="users">
        <div className="users__search">
          <SearchInput onSearch={this.updateSearch} />
        </div>
        {this.noUsers() && <div className="users__notice">No Users Found</div>}
        {this.noAction() && <div className="users__notice">Start Searching Users</div>}
        {list && (
          <UserList
            list={list}
            hasMore={hasMore && !this.noUsers()}
            selected={currentUser}
            onLoadMore={this.extendSearch}
            onSelect={selectUser}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  isLoading: users.isLoading,
  isLoaded: users.isLoaded,
  list: users.data,
  error: users.error,
  queryParams: nextParams(users),
  currentUser: users.current,
  hasMore: hasMore(users),
});
const mapDispatchToProps = dispatch => ({
  search: params => dispatch(searchUsers(params)),
  selectUser: username => dispatch(setCurrentUser(username)),
  reset: () => dispatch(resetUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
