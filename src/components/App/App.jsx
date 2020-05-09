import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import ThemeProvider from '../../hooks/ThemeProvider.jsx';
import HeroesProvider from '../../hooks/HeroesProvider.jsx';
import Gallery from '../../containers/Gallery/Gallery.jsx';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <HeroesProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Gallery} />
            </Switch>
          </Router>
        </HeroesProvider>
      </ThemeProvider>
    </>
  );
}
  
