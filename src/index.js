import App from './App.jsx';

function mountApp() {
  const container = document.getElementById('root');
  if (container && window.React && window.ReactDOM) {
    const root = window.ReactDOM.createRoot(container);
    root.render(window.React.createElement(App));
  } else {
    setTimeout(mountApp, 30);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
