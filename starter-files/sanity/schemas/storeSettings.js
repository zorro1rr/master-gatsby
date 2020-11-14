import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'storeSettings',
  // visable title
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slicemaster',
      title: 'Slicemasters Currently Slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hotSlices',
      title: 'Hot Slice available in the  case',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
