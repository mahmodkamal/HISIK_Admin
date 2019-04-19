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
    children:[
      {
        name:'Messages',
        url:'/admins/messages',
        icon:'icon-bubble',
      },
      {
        name:'Admins',
        url:'/admins',
        icon:'icon-user'

      }
    ]
  },
  {
    title: true,
    name: 'Users Mangement'
  },
  {
    name:'Accounts',
    url:'/accounts',
    icon:'icon-people',
    children:[
      {
        name:'Users',
        url:'/accounts/users',
        icon:'icon-user-following'
      },
      {
        name:'Visitors',
        url:'/accounts/visitors',
        icon:'icon-user-follow'
      },
    ]
  },
  {
    name:'Reports',
    url:'/reports',
    icon:'icon-layers',
  },
  {
    name:'Blocked-Pictures',
    url:'/blocked',
    icon:'icon-camera',
  },
  {
    name:'Products',
    url:'/products',
    icon:'icon-badge',
    children:[
      {
        name:'AddProduct',
        url:'/products/AddProduct',
        icon:'icon-plus'
      },
      {
        name:'AddPrand',
        url:'/products/AddPrand',
        icon:'icon-plus'
      },
      {
        name:'AddCategory',
        url:'/products/AddCategory',
        icon:'icon-plus'
      }
    ]
  },

  {
    divider: true
  },
  
];
