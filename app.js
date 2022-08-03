
var id=999;

const salaryscale={


    senior:[1500,2000],
    midSenior:[1000,1500],
    junior:[500,1000]
};





const employee_1={

    employeeID: 0,

    fullName:"Ghazi Samer",

    department:"Administration",

    level:"senior" ,

    profileImage:"#",

    salary:function(){ 
        let slaryRange=salaryscale[this.level];
        let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
        return parseInt(randomSalary*0.925);
    }

    ,

    uniqueId:function(counter){
        this.employeeID =counter+1;
        ++id;

    }


};


employee_1.uniqueId(id);




const employee_2=
{

    employeeID:1,

    fullName:"Lana Ali",

    department:"Finance",

    level:"senior" ,

    profileImage:"#",

    salary:function(){ 
        let slaryRange=salaryscale[this.level];
        let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
        return parseInt(randomSalary*0.925);

    },
    uniqueId:function(counter){
        this.employeeID =counter+1;
        ++id;

    }

};

employee_2.uniqueId(id);

const employee_3=

{

    employeeID:3,

    fullName:"Tamara Ayoub",

    department:"Marketing",

    level: "senior",

    profileImage:"#",

    salary:function(){ 
        let slaryRange=salaryscale[this.level];
        let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
        return parseInt(randomSalary*0.925);

    }
    ,
    uniqueId:function(counter){
        this.employeeID =counter+1;
        ++id;

    }
    
};
employee_3.uniqueId(id);

const employee_4=

{

    employeeID:0,

    fullName:"Safi Walid",

    department:"Administration",

    level: "midSenior",

    profileImage:"#",

    salary:function(){ 
        let slaryRange=salaryscale[this.level];
        let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
        return parseInt(randomSalary*0.925);

    },
    uniqueId:function(counter){
        this.employeeID =counter+1;
        ++id;

    }

};

employee_4.uniqueId(id);

const employee_5=

{

    employeeID:0,

    fullName:"Omar Zaid",

    department:"Development",

    level: "senior",

    profileImage:"#",

    salary:function(){ 
           let slaryRange=salaryscale[this.level];
           let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
           return parseInt(randomSalary*0.925);
    },
    uniqueId:function(counter){
        this.employeeID =counter+1;
        ++id;


}

};


console.log(employee_5.uniqueId(id))

const employee_6=

{

    employeeID:6,

    fullName:"Rana Saleh",

    department:"Development",

    level: "junior",

    profileImage:"#",

    salary:function(){ 
        let slaryRange=salaryscale[this.level];
        let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
        return parseInt(randomSalary*0.925);
    },
    uniqueId:function(counter){
        this.employeeID =counter+1;
        ++id;

    }

};

employee_6.uniqueId(id);

const employee_7=


{

    employeeID:0,

    fullName:"Hadi Ahmad",

    department:"Finance",

    level: "midSenior",

    profileImage:"#",

    salary:function(){ 
        let slaryRange=salaryscale[this.level];
        let randomSalary=(Math.floor(Math.random() * (slaryRange[1] - slaryRange[0] + 1)) + slaryRange[0]);
        return parseInt(randomSalary*0.925);
    }
    ,
    uniqueId:function(counter){
        this.employeeID =counter+1;
        ++id;

    }

}

employee_7.uniqueId(id);



console.log(`Employee name: ${employee_1.fullName} `+"\n")
console.log(`Employee salary: ${employee_1["salary"]()}`)

console.log(`Employee name: ${employee_2.fullName} `+"\n")
console.log(`Employee salary: ${employee_2["salary"]()}`)

console.log(`Employee name: ${employee_3.fullName} `+"\n")
console.log(`Employee salary: ${employee_3["salary"]()}`)

console.log(`Employee name: ${employee_4.fullName} `+"\n")
console.log(`Employee salary: ${employee_4["salary"]()}`)

console.log(`Employee name: ${employee_5.fullName} `+"\n")
console.log(`Employee salary: ${employee_5["salary"]()}`)

console.log(`Employee name: ${employee_6.fullName} `+"\n")
console.log(`Employee salary: ${employee_6["salary"]()}`)

console.log(`Employee name: ${employee_7.fullName} `+"\n")
console.log(`Employee salary: ${employee_7["salary"]()}`)










    









