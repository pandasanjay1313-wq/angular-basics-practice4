import { Routes } from '@angular/router';
import { Lists } from './lists/lists';
import { Counts } from './counts/counts';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './dashboard/home/home';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './setting/setting';
import { About } from './setting/about/about';
import { Details } from './details/details';
import { Info } from './details/info/info';
import { Start } from './start/start';
import { Show } from './start/show/show';



export const routes: Routes = [

    {path: '', component:Dashboard,
        children:[
            {path: 'home', component: Home,children:[
                {path: 'profile', component: Profile},]
            },
            

             {path: 'lists', component: Lists,
                children:[{path: 'counts/:id', component: Counts}]
             },

                 {path: 'setting', component: Setting,
                     children:[{path: 'about', component: About}]
                 },

                 {path: 'details', component:Details,
                    children:[{path:'infos', component: Info }]
                },

                {path:'start', component:Start,
                    children:[{path:'show',component:Show}]
                }


        ]
        
    }
];

