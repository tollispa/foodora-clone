import { cartItems } from "./foodIcons";
import {useState} from "react"

function Cart() {
    
    const modifiedItems = cartItems.reduce((accumulator, currentItem) => {
        const existingItem = accumulator.find(item => item.name === currentItem);
        if (existingItem) {
          existingItem.length++;
        } else {
          accumulator.push({ name: currentItem, length: 1 });
        }
        return accumulator;
      }, []);
      
      const [items, setItems] = useState(modifiedItems)
      
      const addItem = (name) => {
        
        setItems((prevItems) => {
            return prevItems.map((item) => {
              if (item.name === name) {
                return { ...item, length: item.length + 1 };
              } else {
                return item;
              }
            });
          });

      

      }
 
    return ( 
    
    <div className="flex flex-col justify-center text-center">
        {items.map((item) => {
            return (
                <div>{item.name} {item.length}
                <button onClick={() => addItem(item.name)}>+</button>
                <button>-</button>
                </div>
            )
        })}
    </div>  );
}

export default Cart;