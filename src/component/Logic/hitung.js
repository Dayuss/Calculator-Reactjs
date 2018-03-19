
import proses from './proses'

export default function hitung (data, btn) {

    // for checking input 
    let isNumeric=(n) =>{
        return isFinite(n);
    }

    // clearing all 
    if(btn === "AC"){
        return{
            next: null,
            temp: null,
            operation: null,
            total:null
        }
    }
    
    // add % when the button is clicked
    if (btn === "%") {
        return {
            next: data.next != null ? data.next + '%' : data.next
        }
    }

    // add . when the button is clicked
    if (btn === ".") {
        // if data alreadt has "."
        if (data.next != null && data.next.includes(".")) return{}

        return {
            next: data.next != null ? data.next + '.' : data.next
        }
    }

    // change negatif or positif 
    if (btn === "+/-") {
        if (data.next) return { next: data.next != null ? -1 * parseFloat(data.next) : data.next }
        if (data.total) return { next: data.total != null ? -1 * parseFloat(data.total) : data.total }
    }

    // checking when input is number
    if(isNumeric(btn)){
        return {
            // if the data before is null, and the data not a operation, show the data input,
            // if the data before not null, concat the new data and old data
            next: data.next === null || !isNumeric(data.next) ? btn : data.next + '' + (btn)
        }
    }

    // handling equal button
    if(btn === "="){
        // when the data having percent
        if(data.next.includes("%") && data.operation == null){
            return {
                total: (parseFloat (data.next.slice(0, -1))/100).toString(),
                next: null,
                operation: null,
                temp: null
            }

        // when a second number inputed, after choosing operation
        }else if (data.temp && data.operation){
            let b2 
            // when the data having percent
            if (data.next != null && data.next.includes("%")) b2 = (parseFloat(data.next.slice(0, -1)) / 100).toString()
            else b2 = data.next

            // data will be processed in proses function.
            const hsl = proses(data.temp, data.operation, b2)
            return{
                total: hsl,
                next:null,
                operation: null
            }
        }else{
            return{}
        }
    }

    // handling operation button
    if (!isNumeric(btn)){
        let next
        // when the data having percent
        if (data.next != null && data.next.includes("%")) next = (parseFloat(data.next.slice(0, -1)) / 100).toString()
        else next = data.next

        // when selecting the second or more operator (1+1+1+...+)
        // the data before get processed in proses function and moving to temp, 
        // then temp will be processed with a new data
        if(data.operation != null) {
            return {
                temp: proses(data.temp, data.operation, next),
                next: btn,
                operation: btn
            }           
        // when first time selecting operator
        // state next value moving to temp
        }else{
            return{
                temp: next != null ? next : data.total,
                operation: btn,
                next: btn
            }

        }
    }
}