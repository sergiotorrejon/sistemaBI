import { ReportesrrhhComponent } from './recursoshumanos/reportesrrhh/reportesrrhh.component';
import { FormulariosComponent } from './recursoshumanos/formularios/formularios.component';
import { EmpleadosComponent } from './recursoshumanos/empleados/empleados.component';
import { ReportesComponent } from './comercial/reportes/reportes.component';
import { ProductosComponent } from './comercial/productos/productos.component';
import { VentasComponent } from './comercial/ventas/ventas.component';
import { ClientesComponent } from './comercial/clientes/clientes.component';
import { ContabilidadComponent } from './comercial/contabilidad/contabilidad.component';
import { Routes } from '@angular/router';
import { ConfiguracionComponent } from './inicio/configuracion/configuracion.component';
import { ParametrosComponent } from './inicio/parametros/parametros.component';
import { UsuariosComponent } from './inicio/usuarios/usuarios.component';


export const MaterialRoutes: Routes = [
  {
    path: 'configuracion',
    component: ConfiguracionComponent
  },
  {
    path: 'parametros',
    component: ParametrosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'contabilidad',
    component: ContabilidadComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'ventas',
    component: VentasComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'formularios',
    component: FormulariosComponent
  },
  {
    path: 'reportesrrhh',
    component: ReportesrrhhComponent
  },
];
