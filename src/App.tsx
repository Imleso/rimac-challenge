

import { Layout } from './components';
import { AppRoutes  } from './router/router'
function App() {
  
    console.log("render");

  return <Layout><AppRoutes /> </Layout>;
}

export default App;
