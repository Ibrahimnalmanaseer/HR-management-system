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

    

    return `<img src=${this.profileImage}> <div class="container"> <h2 class='fullname'> ${this.fullName} </h2> <p class='id'>ID : ${this.employeeID(id)}</p>
    <p class='department'> ${this.department}</p> <p class='level'>${this.level} </p> <p class=salary> Salary : ${this.salary()}</p> </div>`

}




const ghazi=new Employee("Ghazi Samer","Administration","senior","./assets/Ghazi.jpg")
const Lana=new Employee("Lana Ali","Finance","senior","./assets/Lana.jpg",)
const Tamarai=new Employee("Tamara Ayoub","Marketing","senior","./assets/Tamara.jpg",)
const Safi=new Employee("Safi Walid","Administration","midSenior","./assets/Safi.jpg",)
const Omar=new Employee("Omar Zaid","Development","senior","./assets/Omar.jpg",)
const Rana=new Employee("Rana Saleh","Development","junior","./assets/Rana.jpg",)
const Hadi=new Employee("Hadi Ahmad","Finance","midSenior","./assets/Hadi.jpg",)




//create div(column) and append on main

const mainTag=document.getElementsByTagName('main')





for (let i=0;i<allEmployee.length;++i){
    var div=document.createElement('div');
    div.className='column';
    div.title=`${allEmployee[i].department}`
    div.innerHTML=allEmployee[i].render();
    mainTag[0].appendChild(div);
    
}



// add style :

const imgs=document.getElementsByTagName("img");
const depTag=document.getElementsByClassName('department');
const h2Tag=document.getElementsByTagName('h2');
const divcolumn=document.getElementsByClassName('column');

mainTag[0].style.display="flex";

for (let i =0;i<divcolumn.length;i++){
    
    
    divcolumn[i].style.height='55%';  
    divcolumn[i].style.textAlign='center';
    divcolumn[i].style.marginRight='16px';

    imgs[i].style.width='100%';
    imgs[i].style.height='250px';
    h2Tag[i].style.margin='15px 0';

    depTag[i].style.color='#355764';
    depTag[i].style.margin='15px 0';
    
           }   



//stretch goal


// var divmarketing = document.createElement('div');
// divmarketing.className='marketing';
  


// const divAdmin = document.createElement('div');
// divAdmin[0].className='Administration';

// const divdevlop = document.createElement('div');
// divdevlop[0].className='Development';

// const divfinance = document.createElement('div');
// divmarketing[0].className='Finance';







    









