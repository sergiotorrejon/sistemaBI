import { MatCardModule } from '@angular/material/card';
import { ReportesrrhhComponent } from './recursoshumanos/reportesrrhh/reportesrrhh.component';
import { FormulariosComponent } from './recursoshumanos/formularios/formularios.component';
import { EmpleadosComponent } from './recursoshumanos/empleados/empleados.component';
import { ReportesComponent } from './comercial/reportes/reportes.component';
import { ProductosComponent } from './comercial/productos/productos.component';
import { VentasComponent } from './comercial/ventas/ventas.component';
import { ClientesComponent } from './comercial/clientes/clientes.component';
import { ContabilidadComponent } from './comercial/contabilidad/contabilidad.component';
import { UsuariosComponent } from './inicio/usuarios/usuarios.component';
import { ParametrosComponent } from './inicio/parametros/parametros.component';
import { ConfiguracionComponent } from './inicio/configuracion/configuracion.component';
import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialRoutes } from './pages.routing';
import { MaterialModule } from '../material-module';
import { MatStep } from '@angular/material/stepper';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: [],
  declarations: [
    ConfiguracionComponent,
    ParametrosComponent,
    UsuariosComponent,
    ContabilidadComponent,
    ClientesComponent,
    VentasComponent,
    ProductosComponent,
    ReportesComponent,
    EmpleadosComponent,
    FormulariosComponent,
    ReportesrrhhComponent
  ]
})
export class PagesComponentsModule {}
