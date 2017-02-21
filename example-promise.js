//function getTempCallback (location, callback){
//    callback(undefined, 78);
//    callback('City Not Found');
//    
//}
//
//getTempCallback('Philadelphia', function (err, temp) {
//    if (err){
//        console.log('error', err);
//    }else {
//        console.log('success', temp)
//    }
//});
//
//function getTempPromise (location) {
//    return new Promise(function(resolve, reject){
//      setTimeout(function () {
//       resolve(79);
//       reject('City Not Found');
//      }, 1000);
//    });
//}
//
//getTempPromise('Philadelphia').then(function (temp) {
//    console.log('promise success', temp);
//}, function (err) {
//    console.log('promise error', err);
//})


//Challenge Area
function addPromise (a, b) {
    return new Promise(function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }else{
            reject('A & B need to be numbers')
        }
    });
}

addPromise(7, 2).then(function (sum){
    console.log('success', sum);
}, function (err) {
    console.log('error', err);
})

addPromise('Howard', 9).then(function (sum){
    console.log('This should not show up', sum);
}, function (err) {
    console.log('This should appear', err);
})