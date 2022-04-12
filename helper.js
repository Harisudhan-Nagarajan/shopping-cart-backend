import { client } from "./index.js";

export async function addMobilesList(data) {
    return await client.db("ecommerce").collection("mobiles").insertMany(data);
}
export async function getMobilesList() {
    return await client.db("ecommerce").collection("mobiles").find({}).toArray();
}
export async function insertCartItem(mobile) {
    return await client
        .db("ecommerce")
        .collection("cart")
        .insertOne({ ...mobile, qty: 1 });
}
export async function getCartItemById(mobile) {
    return await client
        .db("ecommerce")
        .collection("cart")
        .findOne({ _id: mobile._id });
}
export async function updateQtyById(mobile, type) {
    return await client
        .db("ecommerce")
        .collection("cart")
        .updateOne(
            { _id: mobile._id },
            { $inc: { qty: type === "increment" ? +1 : -1 } }
        );
}
export async function getCartList() {
    return await client.db("ecommerce").collection("cart").find({}).toArray();
}
