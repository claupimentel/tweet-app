import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import Conteiner from '../components/Conteiner'

const App = props => (
  <>
    <GlobalStyle/>
    <Header/>
    <Conteiner>
      {props.children}
    </Conteiner>
  </>
);

export default App;
