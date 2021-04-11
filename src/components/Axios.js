import React, { useState, useEffect } from 'react';
import defaultAxios from 'axios';

const useAxios = (optiions, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(new Date());
  };

  useEffect(() => {
    if (!optiions.url) {
      return;
    }
    axiosInstance(optiions)
      .then(data => {
        setState({ ...state, loading: false, data });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

function Axios() {
  const { loading, error, data, refetch } = useAxios({
    url: 'http://yts.am/api/v2/list_movies.json',
  });
  return (
    <div>
      <h2>UseAxios</h2>
      <button onClick={refetch}>Refetch</button>
      <p>{loading && 'Loading'}</p>
      <p>{data && data.status}</p>
      <p>{error && error.message}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default Axios;
