import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom';
import { HomePage } from './app/main/home';
import { DashboardPage } from './app/main/dashboard';
import { LabelsPage } from './app/main/labels';
import { SettingsPage } from './app/main/settings';
import { RootLayout } from './app/main/layout';
import { AuthLayout } from './app/auth/layout';
import { OnboardLayout } from './app/onboard/layout';


export function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>

        <Route path='/' element={<RootLayout />}>
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Dashboard' element={<DashboardPage />} />
          <Route path='/Etiquetas' element={<LabelsPage />} />
          <Route path='/Configuracao' element={<SettingsPage />} />
        </Route>


        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<h1>Login</h1>} />
          <Route path='register' element={<h1>Register</h1>} />
        </Route>

        <Route path='/onboard' element={<OnboardLayout />}>
          <Route path='step1' element={<h1>Step 1</h1>} />
          <Route path='step2' element={<h1>Step 2</h1>} />
        </Route>

        <Route path='*' element={<h1>Error</h1>} />
      </RoutesDom>
    </BrowserRouter>
  )
}