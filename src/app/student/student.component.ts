  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Student } from '../../model/Student';
  import { SortComponent } from '../sort/sort.component';
 

  @Component({
    selector: 'app-student',
    standalone: true,
    imports: [CommonModule,SortComponent],
    templateUrl: './student.component.html',
    styleUrl: './student.component.css'
  })
  class StudentComponent {
    students:Student[] = [];
    message:string=''
    colorClass:string=''
    
    constructor(){
      let s1 = new Student(1,"Amit",2,80,["Java","Python"]);
      let s2 = new Student(2,"Sumit",5,63,["C#","Python"]);
      let s3 = new Student(3,"Virat",1,99,["Block Chain","C++"]);
      let s4 = new Student(4,"Rahul",2,95,["Java","Python"]);
      let s5 = new Student(5,"Hardik",4,89,["Java","Python"]);

      this.students.push(s1);
      this.students.push(s2);
      this.students.push(s3);
      this.students.push(s4);
      this.students.push(s5);
    }

    showStudents(){
      

    }
    deleteStudent(rollNo:number){
      const result = confirm('Do you want to delete student with roll number '+ rollNo);
      if(result){
        this.students=this.students.filter(s => s.rollNo != rollNo);
        this.message = 'Record Deleted!!'
        this.colorClass = 'success'
      }
      else{
        this.message = 'Deletion Cancelled'
        this.colorClass = 'error'
      }
    }
    
    updateStudent(s: Student){
      console.log(s)
    }

    
  sortStudents(criteria: string) {
    switch (criteria) {
      case 'percentage':
        this.students.sort((a, b) => b.percentage - a.percentage);
        break;
      case 'attempts':
        this.students.sort((a, b) => a.numberOfAttempts - b.numberOfAttempts);
        break;
      case 'subjects':
        this.students.sort((a, b) => a.subjectsLearning.length - b.subjectsLearning.length);
        break;
      default:
        break;
    }
  }
  
}
  export default StudentComponent;
