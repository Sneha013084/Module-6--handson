
 
import _ from 'lodash';


//input objects interface

interface Data{
    id: number;
    name: string;
    price : number;
    discountedPrice: number;
    
}

// output objects interface

 interface ProcessedItem{
    id: string | number;
    name: string;
    price : number;
    discountedPrice: number;
 }

  function processData(data:Data[]) : ProcessedItem[] {
       const result : ProcessedItem[] = [];

      for (let i = 0; i < data.length; i++) {
    let item :Data = data[i];
 
    if (!item.id) {
      throw new Error('Data item is missing an id');
    }
  

 //type annotation for object

 let processedItem: ProcessedItem ={
      id: item.id,
      name: item.name || 'Unknown',
      price: item.price || 0,
      discountedPrice: item.discountedPrice || item.price || 0,
 };

    result.push(processedItem);
  }
 
  return _.orderBy(result, ['discountedPrice'], ['asc']);
}
 
 export { processData};