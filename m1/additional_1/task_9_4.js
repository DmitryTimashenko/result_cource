const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
 ];

 const result = matrix.reduce((res, row) => [...res, ...row], []);

 console.log(result);