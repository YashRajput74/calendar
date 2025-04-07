import { model } from "./model";

export const controller={
    init(){
        model.requestData("London",this.handleData);
    },
    handleData(data){
        console.log(data);
    }
}