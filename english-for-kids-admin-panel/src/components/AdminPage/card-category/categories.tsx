import React from "react";
import CardCategoryAdmin from './cardCategory'

import './categories.scss';

interface MyState {
}
interface MyProps {
}


export default class Categories extends React.Component<MyProps, MyState> {

  createCategory(){
    console.log('createCategory');
    
  }



  render() {
    return (
      <div className="wrapper cards-field">

        <CardCategoryAdmin />
        <CardCategoryAdmin />
        <CardCategoryAdmin />
        <CardCategoryAdmin />
        <CardCategoryAdmin />
        <CardCategoryAdmin />
        <CardCategoryAdmin />
        <CardCategoryAdmin />


        <div className='card-admin__category'>
          <h2 className='card-admin-title'>Create new Category</h2>
          <div className='btn-category-add'>
            <img onClick={()=>{this.createCategory()}} src='./img/add-category.svg' />
          </div>
        </div>

      </div>
    )
  }
}