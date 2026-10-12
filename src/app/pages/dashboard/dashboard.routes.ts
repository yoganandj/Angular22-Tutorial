import { Routes } from "@angular/router";
import { DashboardHome } from "../dashboard-home/dashboard-home";
import { Orders } from "../orders/orders";
import { Profile } from "../profile/profile";
import { Settings } from "../settings/settings";
import { Dashboard } from "./dashboard";
import { dashChildGuard } from "../../guards/dash-child-guard";
import { unsavedChangesGuard } from "../../guards/unsaved-changes-guard";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: Dashboard,
        canActivateChild: [dashChildGuard],
        children: [
                {
                    path: '',
                    redirectTo: 'dashboard-home',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard-home',
                    component: DashboardHome
                },
                {
                    path: 'settings',
                    component: Settings
                },
                {
                    path: 'orders',
                    component: Orders
                },
                {
                    path: 'profile',
                    component: Profile,
                    canDeactivate: [unsavedChangesGuard]
                },
    ]
    }
];