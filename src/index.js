// import React from 'react';
// import ReactDOM from'react-dom';
// import App from './components/App.jsx';

// ReactDOM.render(<App />, document.getElementById('app'));

//otra forma de hacerlo (-v actual)
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
