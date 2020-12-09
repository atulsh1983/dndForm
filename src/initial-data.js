{
  "field": {
     "field-1": { 
       "id": "field-1", 
       "label": "From",
       "type": "input",
       "required": "Y",
       "strIdentity": "Sender Name"
     },
     "field-2": { 
     "id": "field-2", 
     "label": "Phone",
     "type": "input",
     "required": "Y",
     "strIdentity": "Sender Phone"
    },
    "field-3": { 
     "id": "field-3", 
     "label": "GSTIN NO",
     "type": "input",
     "required": "Y",
     "strIdentity": "Sender GSTIN NO"
   },
   "field-4": { 
     "id": "field-4", 
     "label": "FSSAI NO",
     "type": "input",
     "required": "Y",
     "strIdentity": "Sender FSSAI NO"
   },
   "field-5": { 
     "id": "field-5", 
     "label": "PAN NO",
     "type": "input",
     "required": "Y",
     "strIdentity": "Sender PAN NO"
   },
   "field-6": { 
     "id": "field-6", 
     "label": "STATE",
     "type": "input",
     "required": "Y",
     "strIdentity": "Sender State"
   },
   "field-7": { 
     "id": "field-7", 
     "label": "Bill No",
     "type": "input",
     "required": "Y",
     "strIdentity": "Bill No"
   },
   "field-8": { 
     "id": "field-8", 
     "label": "Bill Date",
     "type": "input",
     "required": "Y",
     "strIdentity": "Bill Date"
   },
   "field-9": { 
     "id": "field-9", 
     "label": "Invoice Number",
     "type": "input",
     "required": "Y",
     "strIdentity": "Invoice Number"
   },
   "field-10": { 
     "id": "field-10", 
     "label": "Invoice Date",
     "type": "input",
     "required": "Y",
     "strIdentity": "Invoice Date"
   }
   },
   "columns": {
     "column-1": {
       "id": "column-1",
       "title": "To do",
       "formIds": ["field-1","field-2","field-3","field-4","field-5","field-6","field-7","field-8","field-9","field-10"]
     },
     "column-2": {
       "id": "column-2",
       "title": "Form Builder",
       "formIds": []
     }
   },
   "columnOrder": [ "column-1", "column-2"]
   
}  



















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