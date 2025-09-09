import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterApp from './RouterApp.tsx'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './store/index.ts';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
 <QueryClientProvider client={queryClient}>

    <RouterApp />
 </QueryClientProvider>
   </PersistGate>
          </Provider> 

)
