import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer THLJQt6hNixuQLx8rd4IOHfjVRpAFBeN1wLrudcGQXBcB0MTrU2GvN77T-FWnoXhawfpaJNhzg9ktA06O13oXRHuZ7ylDjqgjujZ00p9tdfnt9dvF9laqc4gvwhTY3Yx',
  },
});
