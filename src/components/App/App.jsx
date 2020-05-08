import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import ThemeProvider from '../../hooks/ThemeProvider.jsx';
import Gallery from '../../containers/Gallery/Gallery.jsx';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Gallery} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
  
