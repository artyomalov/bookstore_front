import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import baseTheme from './theme/baseTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={baseTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
