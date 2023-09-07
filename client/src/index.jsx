import React from 'react';
import { createRoot } from 'react-dom';
import Customizer from './Customizer';

// Use createRoot to render your component
const root = createRoot(document.getElementById('root')); // Replace 'root' with your target DOM element ID

// Render your component using the root
root.render(<Customizer />);

// Optional: If you want to keep the legacy ReactDOM.render for development
// ReactDOM.render(<Customizer />, document.getElementById('root'));
