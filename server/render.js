import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './../app/components/App/index.jsx';
import Layout from './layout';

export const render = () => {
    var content = ReactDOMServer.renderToString(<App />);

    return Layout.render(content);
};
