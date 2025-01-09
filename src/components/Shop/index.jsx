import { useState } from "react";
import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList";
import './Shop.css';

const Shop = () => {
    const [shopInventory, setShopInventory] = useState(inventoryData);
    const [userInventory, setUserInventory] = useState([]);

    const handleAddItem = (item) => {
        setUserInventory([...userInventory, item]);
        setShopInventory(prev => prev.filter(element => element._id !== item._id))
    };

    const handleRemoveItem = item => {
        setUserInventory(prev => prev.filter(element => element._id !== item._id));
        setShopInventory([...shopInventory, item]);
    };

    return (
        <main>
            <h1>Shop</h1>
            <section className="shop-section">
                <InventoryList
                    title="Shop Inventory"
                    inventory={shopInventory}
                    handleAddItem={handleAddItem}
                />
                <InventoryList
                    title="User Inventory"
                    inventory={userInventory}
                    handleRemoveItem={handleRemoveItem}
                />
            </section>
        </main>
    );
};

export default Shop;
