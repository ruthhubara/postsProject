import React from 'react';
import { connect } from 'react-redux';
// import { setProductName, setProductPrice, addNewProduct } from '../redux/Actions/ProductAction'
import { actionsProduct } from '../redux/Actions/ProductAction'



function mapStateToProps(state) {

    return {
        product: state.productsReducer.product,
        products: state.productsReducer.products
    }
}

const mapDispatchToProps = (dispatch) => ({
    // setName: (name) => dispatch(actionsProduct.setProductName(name)),
    setName: (name) => dispatch(actionsProduct.uppercaseProductName(name)),
    setPrice: (price) => dispatch(actionsProduct.setProductPrice(price)),
    addProduct: () => dispatch(actionsProduct.addNewProduct())

})

export default connect(mapStateToProps, mapDispatchToProps)(function Products(props) {

    const { product, products, setName, setPrice, addProduct } = props;

    return (
        <>

        <table class="table col-5" style = {{ marginLeft: 200}} >
            <thead>
                <tr style = {{ color : "green"}}>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td >{product.name}</td>
                        <td>{product.price}</td>
                    </tr>

                ))}
            </tbody>
        </table>

        <br />
        <br />

        <h6 style = {{color: "green"}}>הוספת מוצר חדש</h6>

        <div className="col">
            <input type="text" placeholder="הכנס שם מוצר" onChange={(e) => setName(e.target.value)} value = {product.name} />
        </div>
        <div className="col" style= {{ marginTop: 5}}>
            <input type="text" placeholder="הכנס מחיר" onChange={(e) => setPrice(e.target.value)} />
        </div>

        <button className="btn btn-success" style = {{ marginTop: 5}} onClick={addProduct}>הוספת מוצר</button>
        </>
    )
})