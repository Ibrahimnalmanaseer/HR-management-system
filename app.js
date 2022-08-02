var employeeIDArr=[];

const salaryscale={


    senior:[1500,2000],
    midSenior:[1000,1500],
    junior:[500,1000]
};



const employeesArr=[


{

    employeeID: generateID(employeeIDArr,1000),

    fullName:"Ghazi Samer",

    department:"Administration",

    level:"senior" ,

    profileImage:"#",

    salary:function(){ 
        return salaryscale[this.level]

    }

},

{

    employeeID:generateID(employeeIDArr,1000),

    fullName:"Lana Ali",

    department:"Finance",

    level:"senior" ,

    profileImage:"#",

    salary:function(){ 
        return salaryscale[this.level]

    }

},

{

    employeeID:generateID(employeeIDArr,1000),

    fullName:"Tamara Ayoub",

    department:"Marketing",

    level: "senior",

    profileImage:"#",

    salary:function(){ 
        return salaryscale[this.level]

    }

},

{

    employeeID:generateID(employeeIDArr,1000),

    fullName:"Safi Walid",

    department:"Administration",

    level: "midSenior",

    profileImage:"#",

    salary:function(){ 
        return salaryscale[this.level]

    }

},


{

    employeeID:generateID(employeeIDArr,1000),

    fullName:"Omar Zaid",

    department:"Development",

    level: "senior",

    profileImage:"#",

    salary:function(){ 
        return salaryscale[this.level]

    }

},



{

    employeeID:generateID(employeeIDArr,1000),

    fullName:"Rana Saleh",

    department:"Development",

    level: "junior",

    profileImage:"#",

    salary:function(){ 
        return salaryscale[this.level]

    }

},


{

    employeeID:generateID(employeeIDArr,1000),

    fullName:"Hadi Ahmad",

    department:"Finance",

    level: "midSenior",

    profileImage:"#",

    salary:function(){ 
        return salaryscale[this.level]

    }

}


];







function generateID(arr,startNum){

    if (arr.length<1){
        arr.push(startNum);
        for (let i=1;i<7;i++){
            startNum+=1;
            arr[i]=startNum;


        }  
        return arr.shift();
        
    }

    else{
        return arr.shift();

    }
    
}




function salaryCalculation(level){
    
    let randomSalary=(Math.floor(Math.random() * (level[1] - level[0] + 1)) + level[0]);



    return parseFloat(randomSalary*0.925).toFixed(2);


};




for (let i=0;i<employeesArr.length;i++){

    console.log(`Employee name: ${employeesArr[i].fullName} `+"\n")
    console.log(`Employee salary: ${salaryCalculation  (employeesArr[i]["salary"]())}`)
    


}







