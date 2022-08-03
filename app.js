'use strict';

const allEmployee=[];
var id=999;
const salaryscale={


    senior:[1500,2000],
    midSenior:[1000,1500],
    junior:[500,1000]
};




function Employee(fullNameValue,departmentValue,levelValue,profileImageValue){



    this.employeeID=function(count){
        ++id;
        return count+=1;

    }
    this.fullName=fullNameValue;
    this.department=departmentValue;
    this.level=levelValue;
    this.profileImage=profileImageValue;
    this.salary=function(){ 
        let slaryRange=salaryscale[this.level];
        let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
        return parseInt(randomSalary*0.925);

    
    }
    allEmployee.push(this)
  
}

Employee.prototype.render=function(){


    

    return `<h4>Employee name: ${this.fullName} </h4> <h4>Department: ${this.department} </h4> <h4>Employee salary: ${this.salary()} </h4> <br><br> `

}




const ghazi=new Employee("Ghazi Samer","Administration","senior","#",)
const Lana=new Employee("Lana Ali","Finance","senior","#",)
const Tamarai=new Employee("Tamara Ayoub","Marketing","senior","#",)
const Safi=new Employee("Safi Walid","Administration","midSenior","#",)
const Omar=new Employee("Omar Zaid","Development","senior","#",)
const Rana=new Employee("Rana Saleh","Development","junior","#",)
const Hadi=new Employee("Hadi Ahmad","Finance","midSenior","#",)


for (let i=0;i<allEmployee.length;++i){



    document.write(`${allEmployee[i].render()} `)


}













    









