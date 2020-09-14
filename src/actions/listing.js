const {
  ADD_LISTING,
  ADD_LISTING_LOCATION,
  ADD_LISTING_SPACE_DETAILS,
  ADD_LISTING_SPACE_AVAILABLE,
  SET_LISTING_PRICING_TYPE_AND_RATE,
} = require('./types');

export const addListingLocation = (data) => async (dispatch) => {
  dispatch({
    type: ADD_LISTING_LOCATION,
    payload: data,
  });
};

export const addListingSpaceDetails = (data) => async (dispatch) => {
  dispatch({
    type: ADD_LISTING_SPACE_DETAILS,
    payload: data,
  });
};

export const addListingSpaceAvailable = (data) => async (dispatch) => {
  dispatch({
    type: ADD_LISTING_SPACE_AVAILABLE,
    payload: data,
  });
};

export const setListingPricingDetails = (data) => async (dispatch) => {
  dispatch({
    type: SET_LISTING_PRICING_TYPE_AND_RATE,
    payload: data,
  });
};

export const saveSpaceDetails = (data) => async (dispatch) => {
  console.log('save space action');
  console.log('listing data : ', data);
  dispatch({
    type: ADD_LISTING,
    payload: data,
  });
};
