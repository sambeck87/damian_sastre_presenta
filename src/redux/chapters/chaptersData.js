export const GET_TOKEN = 'damian-sastre-preseta/chapterData/GET_TOKEN';
export const SUCCESS_FETCH = 'damian-sastre-preseta/chapterData/SUCCESS_FETCH';
export const FAIL_FETCH = 'damian-sastre-preseta/chapterData/FAIL_FETCH';
const CLIENT_ID = '106558cb9bed438da1dd5a61c7cf01dd';
const CLIENT_SECRET = 'b4fd420bddfd49b7898748d73902eb20';
const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const allData = [];
let token = '';
let flag = true;

export const getData = (URL) => async (dispatch) => {
  try {
    if (flag) {
      flag = false;
      const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
        body: 'grant_type=client_credentials',
      });
      token = await response.json();
      dispatch({
        type: GET_TOKEN,
        payload: token.access_token,
      });
    }

    const fetchData = await fetch(URL, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token.access_token}` },
    });
    const data = await fetchData.json();
    allData.push(data.items);

    if (data.next !== '') {
      getData(data.next);
    }

    dispatch({
      type: SUCCESS_FETCH,
      payload: allData,
    });
  } catch (err) {
    dispatch({
      type: FAIL_FETCH,
    });
  }
};

const chaptersData = (state = [], action) => {
  switch (action.type) {
    case GET_TOKEN: return action.payload;
    case SUCCESS_FETCH: return action.payload;
    case FAIL_FETCH:
      return { ...state, loading: false, error: action.payload };
    default: return state;
  }
};

export default chaptersData;
