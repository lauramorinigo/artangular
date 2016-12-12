import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import {ArtriumRoutes} from './artrium/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...ArtriumRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
