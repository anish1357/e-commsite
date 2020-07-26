import React from 'react';

import Shop_Data from "./shop.data"
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component{
 constructor(){
     super();
     this.state ={
         collections: Shop_Data
     }
  }
  render(){
      const {collections} =this.state;
      return(
      <div className='shop-page'>
          {collections.map(({ id, ...otherSectionProps }) => (
                <CollectionPreview key={id} {...otherSectionProps}/>
                
                ))}
        </div>
          );
  }
}
export default ShopPage;