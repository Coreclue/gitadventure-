
import { inventory } from "./inventory.mjs";
import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("Clear", "Hazel", "Ben")
removeItem("Clear", "Jim")

listItems(inventory)

