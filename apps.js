function arrow(prices) {

    let minprice = prices[0];
    let maxpr = 0;

    for (const real of prices) {
        minprice = Math.max(minprice, real - maxpr);
        maxpr = Math.min(maxpr, real);
    }
    return ans;
};

console.log(maxpr([7, 1, 5, 3, 6, 4]))// output:5
console.log(minprice([7, 6, 4, 3, 1]))//output :0