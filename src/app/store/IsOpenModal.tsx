import { makeAutoObservable, makeObservable } from "mobx";

class OpenModal {
  isModalOpen = false;
  constructor(){
    makeAutoObservable(this);
  }
  showModal(){
    this.isModalOpen = true;
    console.log(this.isModalOpen);
    
  }
  handleOk(){
    this.isModalOpen = false;
    console.log(this.isModalOpen);

  }
  handleCancel(){
    this.isModalOpen = false;
    console.log(this.isModalOpen);

  }
}

export default new OpenModal();