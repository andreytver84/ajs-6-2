// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export default function specAtackGet(obj) {   
    let specAtackArr; 
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            specAtackArr = [...obj[key]];
            specAtackArr.forEach(item => {
                if (!item['description']) {
                    item['description'] = 'Описание недоступно';
                }
            })
        }
    }
    return specAtackArr;    
};




