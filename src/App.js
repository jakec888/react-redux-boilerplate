import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Root from './Root';
import Layout from './Layout';
import Router from './Router';

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </Root>
  );
}

export default App;
