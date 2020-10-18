import fetchData from "../api";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

const requestOffers = () => ({ type: FETCH_REQUEST });

const receivedOffers = (offers) => ({ type: FETCH_SUCCESS, offers });

export const fetchOffers = (date_form, date_to, adults, children) => (
  dispatch
) => {
  dispatch(requestOffers());
  return fetchData(date_form, date_to, adults, children).then((response) =>
    dispatch(receivedOffers(response))
  );
};
