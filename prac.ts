class  Employee {
      
   private employeeId    :  number 
   private name          :  string  
   private dateOfJoining :  Date 
 
   constructor(empid : number , nm : string , doj : string) {
      this.employeeId   = empid
      this.name         = nm
      this.dateOfJoining = new Date(doj)
   }

   get nameOfEmployee() : string {
      return this.name
   }
   
   
   get experinceOfEmployee() : number {
      return Math.floor((Date.now() - this.dateOfJoining.getTime()) / (1000*3600*24)) 
   } 
    
   

}

let employeeDetail : Employee[] = []

employeeDetail.push( new Employee(1,'john','2015-10-02'))

employeeDetail.push( new Employee(2,'sam','2015-08-02') )

employeeDetail.push( new Employee(3,'bob','2015-03-02') )

employeeDetail.push( new Employee(4,'abc','2015-01-02') )

employeeDetail.push( new Employee(5,'xyz','2014-03-02') )

for( let i=0; i < employeeDetail.length ; i++ ) {
    
    console.log(i+1 , employeeDetail[i].nameOfEmployee , employeeDetail[i].experinceOfEmployee)  
}

//some edits




