import { React, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

export default function Product() {


    const [items, setItems] = useState([{ item: "לחם", count: 20 }, { item: "חלב", count: 10 }])

    const productAdd = { item: "", count: 0 }
    const productUpdate = { item: "", count: 0 }
    // const [productUpdate, setProductUpdate] = useState({ item: "", count: 0 })
    const [item, setItem] = useState("");
    const [count, setCount] = useState(0);

    function add() {
        setItems(items => items.concat(productAdd))

    }
    function delate(i) {
        debugger
        setItems(items => items.filter(item => item !== items[i]))

    }
    function update(i) {
        // setItems(items => items.filter(item => item !== items[i]))
        // setItems(items => items.concat(productUpdate))
        // debugger
        // let products = { ...items }
        // products[i] = productUpdate
        // console.log(products);

        // setItems(products)
        // console.log(items);
        debugger
        let products = [...items]
        products[i].item = item;
        products[i].count = count;

        console.log(products);
        setItems(products)
        console.log(items);
    }
    return (
        <>
            <table>
                <tr>
                    <th>שם מוצר:</th>
                    <th>כמות :</th>
                    <th></th>
                    <th></th>
                </tr>
                {items.map((p, i) => (
                    <tr >
                        <td >{p.item} </td>
                        <td >{p.count} </td>
                        <td><button onClick={() => delate(i)}>מחיקה</button></td>
                        <td><button onClick={() => update(i)}>עדכון</button></td>
                        {/* <td><input type="text" onChange={(e) => productUpdate.item = e.target.value} placeholder="הכנס שם מוצר"></input></td>
                        <td><input type="number" onChange={(e) => productUpdate.count = e.target.value} placeholder="הכנס כמות"></input></td> */}
                        <td><input type="text" onChange={(e) => setItem(e.target.value)} placeholder="הכנס שם מוצר"></input></td>
                        <td><input type="number" onChange={(e) => setCount(e.target.value)} placeholder="הכנס כמות"></input></td>
                    </tr>
                ))
                }
            </table>
            <input type="text" onChange={(e) => productAdd.item = e.target.value} placeholder="הכנס שם מוצר"></input>
            <input type="number" onChange={(e) => productAdd.count = e.target.value} placeholder="הכנס כמות"></input>
            <button onClick={add} >add</button>
        </>
    )
}


// import react, { useState } from 'react';
// import ReactDOM from 'react-dom';

// export default function Products() {
//     const [productsList, setProductsList] = useState([
//         {
//             name: "bread",
//             amount: 5
//         },
//         {
//             name: "milk",
//             amount: 5
//         }
//     ])

//     const [itemName, setItemName] = useState('');
//     const [itemAmount, setItemAmount] = useState('');
//     function addItem (newItem)
//     {
//         let newArray = [...productsList,newItem]
//         setProductsList(newArray)
//     }
//     const deleteItem = (i) => {
//         setProductsList(currentItems => currentItems.filter((item, index) => index !== i));
//     }

//     const updateItem = (name, amount, index) => (event) => {
//         let newArray = [...productsList];
//         if (name) {
//             newArray[index].name = name;
//         }
//         if (amount) {
//             newArray[index].amount = amount;
//         }
//         setProductsList(newArray);
//     };
//     return(
//         <>
//         <div>
//             <div className="container" style={{ direction: 'ltr' }}>
//                 <div>
//                     <h1 >רשימת מוצרים</h1>
//                 </div>
//                 <div className="row">
//                     <div className="col-10">
//                         <table style={{ width: '30rem' }} className="table table-bordered table-hover" style={{ direction: 'rtl' }}>

//                             {productsList.map((item, index) => (
//                                 <tr key={item}>
//                                     <td>
//                                         {item.name}
//                                     </td>
//                                     <td>
//                                         {item.amount}
//                                     </td>
//                                     <td>
//                                         <input type="text"
//                                             placeholder="עדכן שם מוצר"
//                                             id="itemName"
//                                             onChange={(e) => setItemName(e.target.value)}
//                                         ></input>
//                                         <input type="text"
//                                             placeholder="עדכן כמות מוצר"
//                                             id="itemAmount"
//                                             onChange={(e) => setItemAmount(e.target.value)}
//                                         ></input>
//                                         <button class="btn btn-danger" style={{ borderStyle: 'groove' }} onClick={updateItem(itemName, itemAmount, index)}>עדכון</button>
//                                         <button class="btn btn-danger" style={{ borderStyle: 'groove' }} onClick={() => deleteItem(index)}>מחיקה</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </table>
//                     </div>
//                 </div>
//                 <br></br>
//                 <h3>הוספת פריט</h3>
//                 <br></br>
//                 <input
//                     placeholder="הכנס שם פריט" onChange={(e) => setItemName(e.target.value)}></input>
//                 <br></br>
//                 <input placeholder="הכנס כמות פריט" onChange={(e) => setItemAmount(e.target.value)}></input>
//                 <br></br>
//                 <br></br>
//                 <button class="btn btn-danger" style={{ borderStyle: 'groove' }} onClick={() => addItem({ "name": itemName, "amount": itemAmount })}>הוספת פריט</button>
//             </div >
//         </div >
//         </>
//     )
// }