import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Posts from './components/Posts';
import { ThemeProvider } from 'react-jss';
import configureStore from './store';
import FormPost from './components/FormPost';
const store = configureStore();
const theme = {
  brandPrimary: '#1abedb',
  textMuted: '#707070',
  baseColor: '#171717',
};
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <FormPost />
          <Posts />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
