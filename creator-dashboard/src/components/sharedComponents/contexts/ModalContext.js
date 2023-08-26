export const initialState = {
  showModal: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { showModal: !state.showModal };
    case "close":
      return { showModal: state.showModal };

    default:
      return { state };
  }
};
