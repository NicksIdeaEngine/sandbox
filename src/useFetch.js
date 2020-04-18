/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    setState(() => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);

  return state;
};

export default useFetch;
