import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h3>Ooops, route not found</h3>;
};

export default {
  component: NotFoundPage,
};
