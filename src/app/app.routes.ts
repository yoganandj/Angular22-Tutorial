import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { ProductDetails } from './pages/product-details/product-details';
import { DashboardHome } from './pages/dashboard-home/dashboard-home';
import { Settings } from './pages/settings/settings';
import { Orders } from './pages/orders/orders';
import { Profile } from './pages/profile/profile';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { dashboardMatchGuard } from './guards/dashboard-match-guard';
import { Signal } from './pages/signal/signal';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'pages/signal',
        component: Signal
    },
    {
        path: 'pages/login',
        component: Login
    },
    {
        path: 'pages/home',
        component: Home
    },
    {
        path: 'pages/contact',
        // component: Contact
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
    {
        path: 'pages/product',
        // component: Product
        loadComponent: () => import('./pages/product/product').then(m => m.Product)
    },
    {
        path: 'pages/product-details/:id',
        component: ProductDetails
    },
    {
        path: 'pages/about',
        // component: About
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: 'pages/dashboard',
        canActivate: [authGuard],
        // canMatch: [dashboardMatchGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
    },
    
];
