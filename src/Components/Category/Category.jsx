import { product_category_list } from '../../data/Data'

import './Category.css'

const Category = ({ setCategory, contentRef }) => {
  return (
    <section className='category_menu' ref={contentRef}>
      <h1>Choose From Our Top Quality Products</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nisi
        sit corrupti ratione aliquid, praesentium natus sint possimus ab
        explicabo, voluptates reprehenderit quis accusantium impedit nesciunt
        voluptate! Nobis, excepturi modi.
      </p>
      <div className='category_menu_list'>
        {product_category_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.product_name ? 'All' : item.product_name
                )
              }
              key={index}
              className='category_menu_list_item'
            >
              <p>{item.product_name} </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Category
