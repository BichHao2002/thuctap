//import ReactDOM from 'react-dom'
import App from './App'
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root')
const root = createRoot( rootElement);
root.render(<App/>);
//createRoot
//const root = ReactDOM.createRoot( rootElement);
//root.render (<App />);
// ReactDOM.render(
//   <App />,
//   rootElement
// )
