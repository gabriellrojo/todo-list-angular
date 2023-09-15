import { AfterContentChecked, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterContentChecked{

  public valor: string = ""
  public checked: boolean = false
  public listTask: Array<{check: boolean, task: string}> = JSON.parse(localStorage.getItem("lista") || "[]")

  public addTask(){
    this.listTask.push({check: this.checked, task: this.valor})
    this.valor = ""
  }

  public deleteAll(){
    this.listTask.splice(0, this.listTask.length)
  }

  public handleCheck(index: number){
    if(this.listTask[index].check === false){
      this.listTask[index].check === true
      console.log(this.listTask[index])
    } else{
      this.listTask[index].check === false
      console.log(this.listTask[index])
    }
  }

  ngAfterContentChecked(){
    this.listTask.sort((primeiro, segundo) => Number(primeiro.check) - Number(segundo.check))
    localStorage.setItem("lista", JSON.stringify(this.listTask))
  }

  public deleteTask(index: number){
    this.listTask.splice(index, 1)
  }

}
