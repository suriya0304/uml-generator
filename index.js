const data = require('./checkout.json');
let a=''
let b=[]
let c=0
data.forEach((d)=>{
    if((b.includes(d['table_name']) )===false){
        if(c==1){
            a+='}\n'
            c=0
        }
        a+=`class ${d['table_name']} {\n`
        c=1
        b.push(d['table_name'])
    }
    a+=`${d['column_name']}:${d['data_type']}\n`
})
a+='}'
console.log(a)