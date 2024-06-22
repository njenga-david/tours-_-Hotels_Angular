import { Routes } from "@angular/router";
import { HomeComponent } from "./hotels/home.component";
import { DetailComponent } from "./detail/detail.component";





const routeConfig: Routes =[
    {
        path:'',
        component: HomeComponent,
        title:"Home page"
    },
    {
        path:"details/:id",
        component:DetailComponent,
        title:"details page"
    }

];

export default routeConfig


