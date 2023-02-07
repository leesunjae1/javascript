if(true) {}

if(false) {} else {}

if(undefined) {console.log(1)}
if(null) {console.log(1)}
if(0) {console.log(1)}

if(-1) {console.log(1)}

console.log(true ? 1 : 0)

let val

switch('boo') {
    case 'bar' : val = 'bar' ; break
    case 'bar2' : val = 'baz'
    default: val = 'all right'
}

console.log(val)