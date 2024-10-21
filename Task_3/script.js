/* 3. Implement a function that actualPrice → take cost price and apply 20 %
discount on cost price , calculate the selling price of a product after
applying the discount , display the selling price . */

function actualPrice(costPrice){
    let discount = (costPrice * 20) / 100;
    let sellingPrice = (costPrice - discount)
    console.log(sellingPrice);
}
actualPrice(3000);