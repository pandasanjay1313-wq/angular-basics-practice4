import { Routes } from '@angular/router';
import { Lists } from './lists/lists';
import { Counts } from './counts/counts';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './dashboard/home/home';
import { Profile } from './dashboard/profile/profile';



export const routes: Routes = [
    // {path: 'lists', component: Lists},
    // {path: 'counts', component: Counts},
    {path: '', component:Dashboard,
        children:[
            {path: 'home', component: Home,children:[
                {path: 'profile', component: Profile},]},
            

             {path: 'lists', component: Lists,
                children:[{path: 'counts', component: Counts}]
             }
        ]
        
    }
];

