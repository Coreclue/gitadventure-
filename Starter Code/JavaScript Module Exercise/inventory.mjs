// 1. **Named Exports and Imports:** Create an inventory management system for an online store, practicing the use of named exports and imports.
//     - Implement `inventory.mjs`, exporting named functions: `addItem` that adds an item by name to the inventory array, `removeItem` that removes an item by name from the inventory array, `listItems` that logs all item names currently in the inventory.
//     - Implement `storeManager.mjs` that imports the functions from `inventory.mjs` to demonstrate adding a few items, removing an item, and then listing the remaining items in the inventory.
//export inventory
export const inventory = ["Alpha", "Berry", "Charlie"]

// add item
export function addItem(...item) {
    inventory.push(...item)
    return inventory
}

export function removeItem(...items) {
    const index = inventory.indexOf(...items)
    if (index !== -1) {
        inventory.splice(index, 1);
    }
    return inventory
}


export function listItems(item) {
    inventory.forEach((item) => console.log(item))
}



addItem("Brian", "Jim")


removeItem("Brian")

