const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Biller Name' },
      'task-2': { id: 'task-2', content: 'Biller Address' },
      'task-3': { id: 'task-3', content: 'Shipping Address' },
      'task-4': { id: 'task-4', content: 'Sender Name' },
      'task-5': { id: 'task-5', content: 'Company Name' },
      'task-6': { id: 'task-6', content: 'Invoce Date' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4','task-5','task-6'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In progress',
        taskIds: [],
      }
    },
    // Facilitate reordering of the columns
    columnOrder: [ 'column-1', 'column-2']
  };
  
  export default initialData;