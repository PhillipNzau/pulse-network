import { Route } from "@angular/router";
import { InvestorRelationsComponent } from "./components/investor-relations/investor-relations.component";
import { CaseStudyComponent } from "./components/case-study/case-study.component";
import { AboutComponent } from "./about.component";

export const ABOUT_ROUTES: Route[] = [
    {path:'',component:AboutComponent},
    {path:'investor-relations', component:InvestorRelationsComponent},
    {path:'case-study', component:CaseStudyComponent}
    
]