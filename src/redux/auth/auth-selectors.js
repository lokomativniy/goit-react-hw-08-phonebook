const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getisFetching = state => state.auth.isFetching;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getisFetching,
};

export default authSelectors;
