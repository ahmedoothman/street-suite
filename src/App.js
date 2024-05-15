// react
import React, { Suspense } from 'react';
// router
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
// Dashboard Pages
import { AlertsPage } from './pages/dashboard/alertsPage';
import { TrainingPage } from './pages/dashboard/trainingPage';
const DashboardBase = React.lazy(() => import('./pages/dashboard'));

// styles

function App() {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <div className={styles.pendingPage}>
            <div className={styles.loader}>Loading...</div>
          </div>
        }
      >
        <Routes>
          {/* Dashboard Routes */}
          <Route path='/*' element={<DashboardBase />}>
            <Route path='alerts' element={<AlertsPage />} />
            <Route path='training' element={<TrainingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
