import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'topping',
  // visable title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'What is the name of the topping?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  // how to make a custome preview field, comment out these two to see difference
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    // fields could be destructured into { name, vegetarian }
    prepare: (fields) => ({
        title: `${fields.name} ${fields.vegetarian ? '(Vegetarian)' : ''}`,
    })
  },
};
