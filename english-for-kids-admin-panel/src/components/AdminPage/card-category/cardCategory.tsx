import React from "react";

interface MyState {
}
interface MyProps {
}


export default class CardCategoryAdmin extends React.Component<MyProps, MyState> {

  closeCard() {
    console.log('close category');

  }
  updateCategory(){
    console.log('updateCategory');
  }
  addWord(){
    console.log('add word');
  }

  render() {

    let quantityWordsCategory = 7;
    return (
      <div className='card-admin__category'>
        <img className='close-card' onClick={() => { this.closeCard() }} src='./img/close-category.svg' />
        <h2 className='card-admin-title'>Clothes</h2>
        <p className='quantity-words'>WORDS: {quantityWordsCategory}</p>
        <div className='category-control'>
          <button className='btn-category-control' onClick={() => { this.updateCategory() }}>Update</button>
          <button className='btn-category-control' onClick={() => { this.addWord() }}>Add word</button>
        </div>
      </div>
    )
  }
}