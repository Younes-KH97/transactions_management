import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AddTransaction from './components/AddTransaction';
import Layout from './components/Layout';
import { GlobalProvider } from './context/GlobalState';
import Main from './pages/Main';

function App() {
  return (
    // <Router>
    //   <Layout>
    //     <GlobalProvider>
    //         <Main />
    //         <AddTransaction />
    //     </GlobalProvider>
    //   </Layout>
    // </Router>
<Layout>
        <GlobalProvider>
      <Routes>



            <Route path="/"  element={<Main />} />
            <Route path="/form" element={<AddTransaction />} />

      </Routes>
      </GlobalProvider>
      </Layout>
  );
}

export default App;
