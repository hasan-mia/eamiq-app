import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'cricket/';
const cricket = {};

// get data
cricket.getLiveCricket = createAsyncThunk(`${name}getLiveCricket`, async () => {
  const res = await axios.get(url.getLiveCricket, config.basicHeader);
  console.log(res);
  return res;
});

export default cricket;