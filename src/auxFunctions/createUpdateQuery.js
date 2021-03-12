

const createQuery = (modifyObject) => { // recibe an object, and create an update query of the keys of the object

    let queryFirst = `Set (`
    let querySecond = `(`
    let length = Object.keys(modifyObject).length-1;
    let it = 0;

    for (prop in modifyObject){

       queryFirst += prop
       querySecond += `'${modifyObject[prop]}'`
        if(length == it){ // Si es la ultima propiedad cierro parentesis.
            queryFirst += `)`
            querySecond += `)`
        }
        else{
            queryFirst += `, ` // Sino agrego un and
            querySecond += `, `
        }
        it++
    }

    return queryFirst + ' = ' + querySecond;

} 

module.exports = {
    createUpdateQuery:createQuery
}