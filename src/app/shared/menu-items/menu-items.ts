import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  submenu: [];
}

const MENUITEMS: any = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'insert_chart_outlined' },
  { state: 'dashboard', name: 'Cuadro de Mando', type: 'link', icon: 'show_chart' },
  { name: 'INICIO', icon: 'other_houses',
      submenu: [
      { state: 'configuracion', type: 'link', name: 'Configuracion', icon: 'settings'},
      { state: 'parametros', type: 'link', name: 'Parametros', icon: 'build_circle'},
      { state: 'usuarios', type: 'link', name: 'Usuarios', icon: 'manage_accounts'}
      ]
  },
  { name: 'RECURSOS HUMANOS', icon: 'groups',
      submenu: [
        { state: 'empleados', type: 'link', name: 'Empleados', icon: 'people_outline' },
        { state: 'formularios', type: 'link', name: 'Formularios', icon: 'feed' },
        { state: 'reportesrrhh', type: 'link', name: 'Reportes RRHH', icon: 'print' }
      ]
  },
  { name: 'COMERCIAL', icon: 'storefront',
      submenu: [
        { state: 'contabilidad', type: 'title', name: 'Contabilidad', icon: 'table_view' },
        { state: 'clientes', type: 'link', name: 'Clientes', icon: 'group' },
        { state: 'ventas', type: 'link', name: 'Ventas', icon: 'shopping_cart' },
        { state: 'productos', type: 'link', name: 'Productos', icon: 'store' },
        { state: 'reportes', type: 'link', name: 'Reportes Comercial', icon: 'print' }
      ]
  },
  { name: 'FINANCIERA', icon: 'business_center',
      submenu: [
        { state: 'menu', type: 'link', name: 'Planificacion', icon: 'crop_7_5' },
        { state: 'tabs', type: 'link', name: 'Ventas', icon: 'crop_7_5' },
        { state: 'stepper', type: 'link', name: 'finan', icon: 'crop_7_5' }
      ]
  },
  { name: 'PROYECTOS', icon: 'sort',
      submenu: [
        { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'event' },
        { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
        { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
      ]
  },
  { name: 'BI', icon: 'add_chart',
      submenu: [
        { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
        { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
        { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
      ]
  },
  { name: 'DOCUMENTOS', icon: 'folder',
      submenu: [
        { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
        { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
        { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
      ]
  },
  { name: 'UTILITARIOS', icon: 'apps',
      submenu: [
        { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'mail' },
        { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
        { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
      ]
  },
  { name: 'AGENDA', icon: 'date_range',
      submenu: [
        { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
        { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
        { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
      ]
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
