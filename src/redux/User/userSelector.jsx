export const selectUser = state => state.user;
console.log(selectUser)
export const selectIsLoggIn = state => state.user.isLoggIn;
export const selectIsRefreshing = state => state.user.isRefreshing;