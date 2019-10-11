

function getDays(str : string ) : number {
    const day  : Date = new Date(str)

    return +day.getDay()
}

function getNumdays(str : string) : number {
    const date1 :  Date    = new Date(str)

    const date2 :   Date   = new Date(str)
   
    date2.setMonth(date2.getMonth() + 1)

    const  k    :  number = date2.getTime() - date1.getTime()

    return Math.round(k / (1000 * 24 * 60 * 60))
}
let sun = function(num : number) : string { if(num<10) return '  '+String(num) ;  else  return ' '+String(num) }

let mon = function(num : number) : string { if(num<10) return '  ' +String(num) ;  else  return ' '+String(num)}

let tue = function(num : number) : string { if(num<10) return '  '+String(num) ;  else  return ' '+String(num)}

let wed = function(num : number) : string { if(num<10) return '  '+String(num) ;  else  return ' '+String(num)}

let thu = function(num : number) : string { if(num<10) return '  '+String(num);  else  return ' '+String(num)}

let fri = function(num : number) : string { if(num<10) return '  '+String(num) ;  else  return ' '+String(num)}

let sat = function(num : number) : string { if(num<10) return '  '+String(num) ;  else  return ' '+String(num)}

function calender(str : string)  : void {

    let day     :   number     = getDays(str)
    let numDays :   number     = getNumdays(str)
    let days    :   Function[] = [sun,mon,tue,wed,thu,fri,sat]
    let calen   :   string[]  = ['sun','mon','tue','wed','thu','fri','sat']
    let cond    :   boolean = false
    let num     :   number  = 1
    let d       :   number  = 0
    while(1) {

        if(d == day) cond = true

        while(num <= numDays && cond) {
            
            calen.push(days[d](num))
            num++
            d++
            if(d==7) d = 0

        }``
        if(cond) {
            for( ; d < 42 ; d++) calen.push('   ')
            break
        }

        calen.push('   ')
        d++

    }
    
    for( let i = 0; i < 42 ; i=i+7)
    console.log(calen[i],calen[i+1],calen[i+2],calen[i+3],calen[i+4],calen[i+5],calen[i+6])
    

}
const str     :   string   = "01-08-2019",

      temp    :   string[] = str.split("-"),




      nwstr   :   string   = temp[2] + "-" + temp[1] + "-" + temp[0]
calender(nwstr);


//some new values
