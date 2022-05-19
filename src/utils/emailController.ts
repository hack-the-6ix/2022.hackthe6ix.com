/**
 * Handles API requests to the proxy server for contact form
 */

import axios from 'axios';

const apiBase = process.env.GRIDSOME_LANDING_API_HOST;

export const contactMessage = (
  name: string,
  email: string,
  message: string,
  callback: Function
) => {
  /**
   * TODO: Don't even let them submit the form if they don't have a name, email, and message
   */
  axios
    .post(apiBase + '/api/contact', {
      name: name,
      email: email,
      message: message,
    })
    .then((res) => {
      if (callback) {
        callback(null, res);
      }
    })
    .catch((err) => {
      if (callback) {
        callback(err);
      }
    });
};
