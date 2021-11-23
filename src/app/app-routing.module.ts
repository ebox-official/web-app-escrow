import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendComponent } from './components/send/send.component';
import { BgChangerGuard } from './guards/bg-changer.guard';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyTransactionsComponent } from './components/my-transactions/my-transactions.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { BoxDetailsComponent } from './components/boxes/box-details/box-details.component';
import { AuthGuard } from './guards/auth.guard';
import { ONE_WAY, OTC_TRADE } from './components/boxes/box';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { bgClass: "login-bg" },
    resolve: [ BgChangerGuard ]
  },
  {
    path: "main",
    component: MainComponent,
    data: { bgClass: "default-bg" },
    resolve: [ BgChangerGuard ],
    canActivate: [ AuthGuard ],
    runGuardsAndResolvers: "always",
    children: [
      {
        path: "",
        redirectTo: "send",
        pathMatch: "full"
      },
      {
        path: "send",
        component: SendComponent,
        data: { mode: ONE_WAY }
      },
      {
        path: "otc",
        component: SendComponent,
        data: { mode: OTC_TRADE },
      },
      {
        path: "transactions",
        component: MyTransactionsComponent,
        children: [
          {
            path: "",
            redirectTo: "incoming",
            pathMatch: "full"
          },
          {
            path: "incoming",
            component: BoxesComponent,
            data: { mode: "incoming" },
          },
          {
            path: "outgoing",
            component: BoxesComponent,
            data: { mode: "outgoing" },
          },
        ]
      },
      {
        path: "transactions/incoming/:boxId",
        component: BoxDetailsComponent,
        data: { mode: "incoming" },
      },
      {
        path: "transactions/outgoing/:boxId",
        component: BoxDetailsComponent,
        data: { mode: "outgoing" },
      },
      {
        path: "**",
        component: NotFoundComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { bgClass: "default-bg" },
    resolve: [ BgChangerGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }