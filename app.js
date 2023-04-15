const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

// convertir cadena JSON a objeto JavaScript

const jsObject =JSON.parse(jsonData )
   
// actualizar objeto JavaScript
jsObject.parent.age =35

// convertir objeto JavaScript a cadena JSON
const jsObjectToJson = JSON.stringify(jsObject)

// muestra la cadena JSON
console.log(jsObjectToJson)






let miojs ={
    age : "45",
  email:"maru@mail.com",
   
}
//console.log(miojs);
miojs.age ="35"
//console.log(miojs)
