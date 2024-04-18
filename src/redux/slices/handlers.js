export const handleAdvertsFulfield = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

export const handleAdvertsPending = (state) => {
  state.isLoading = true;
};

export const handleAdvertsRejected = (state) => {
  state.isError = true;
  state.isLoading = false;
};
