export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Admins Mangement'
  },
  {
    name:'Admins',
    url:'/admins',
    icon:'icon-user',
  },
  {
    title: true,
    name: 'Users Mangement'
  },
  {
    name:'Accounts',
    url:'/accounts',
    icon:'icon-people',
  },
  {
    name:'Reports',
    url:'/reports',
    icon:'icon-layers',
  },
  {
    name:'Blocked-Pictures',
    url:'/blocked',
    icon:'icon-picture',
  },

  {
    divider: true
  },
  
];
