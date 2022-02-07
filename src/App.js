
// styles (styles in style module format imported from styles folder)
import styles from './styles/App.module.css';

// import components from components folder
import Header from './components/Header';
import Main from './components/Main';

import TranslateContextProvider from './context/TranslateContextProvider';

function App() {
  
  return (
    <div className={styles.app}>
        <Header />
        <div className={styles.side} />
        {/* Translate Resault Context Provider */}
        <TranslateContextProvider>
          <Main />
        </TranslateContextProvider>
      </div>
  );
}

export default App;
