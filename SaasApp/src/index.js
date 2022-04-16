import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from "../src/shared/components/UIElements/theme"

import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(

<ThemeProvider theme = {theme}>
<App />
</ThemeProvider>

, document.getElementById('root')
);
