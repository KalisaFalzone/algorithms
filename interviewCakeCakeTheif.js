//You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins.
//You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
//Each type of cake has a weight and a value, stored in a tuple with two indices:

//An integer representing the weight of the cake in kilograms
//An integer representing the monetary value of the cake in British pounds

var max_duffel_bag_value = function(ct, c) {
    //ct = array of cake tuples where the first value is the dollar amount per bag, and the second value is the weight
    //c = the capacity in weight of the duffle bag
    var index = 0;
    maxProfit = 0;

    for ( var i = 0; i < ct.length; i++ ) {
        if (ct[i][1] !== 0){
            ct[i].push(ct[i][1]/ct[i][0]);
        } else if (ct[i][1] !== 0) {
            //the duffle bag wieghs zero
            return 'infinite profit';
        } else if (ct[i][0] === 0) {
            ct[i].push(0);
        }
    }

    ct.sort(function compareNumbers(a, b) {
        return b[2] - a[2];
    })
       console.log('----ct----', ct)
    while ( index < ct.length) {
        if ( ct[index][2] > 0 && c - ct[index][0] >= 0) {
            c -= ct[index][0];
            maxProfit += ct[index][1];
        } else {
            index++;
        }
        console.log('---index---', index);
        console.log('maxProfit', maxProfit);
        console.log(c);
    }
    return maxProfit;
}


cake_tuples = [[7, 160], [3, 0], [2, 15]]
capacity    = 20

max_duffel_bag_value(cake_tuples, capacity)