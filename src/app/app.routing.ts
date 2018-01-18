import { Routes, RouterModule } from "@angular/router";
import { ChurchesComponent } from "./churches/churches.component";
import { StartpageComponent } from "./startpage/startpage.component";
import { ChurchComponent } from "./church/church.component";

const APP_ROUTES = [
    { path: '', component: StartpageComponent, pathMatch: 'full' },
    { path: 'churches', component: ChurchesComponent },
    { path: 'church', component: ChurchComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);