
import axios from "axios"

export interface ICreateUserInput {
    Code : String;
    Name : String;
    Lname: String;
    images:String;
  
}
export interface IDeleteUserInput {
    Code : String;
}

export interface ICreateHetaInput {
   Check:String
    
  }

export interface IGetHetaInput {
      Images:[]
   }



    async function EnrollUserServer({
    Name,
    Lname,
    Code,
    images

    }: ICreateUserInput): Promise<ICreateHetaInput> {
        return axios.post(process.env.HERTA_URL+"/EnrollUser"
        ,{
            Code:Code,
            Name:Name,
            Lname:Lname,
            images:images      
        }
        )
        .then(response => {
            return { ...response.data };
            })
        .catch((err:Error) =>{
            return (err)
        })  
    }



    async function DeleteUserServer({
        Code,
        }: IDeleteUserInput): Promise<ICreateHetaInput> {
        return axios.post(process.env.HERTA_URL+"/DeleteUser"
        ,{
            Code:Code,
        }
        )
        .then(response => {
            return { ...response.data };
            })
        .catch((err:Error) =>{
            return (err)
        })  
        }


    async function GetUserPhotoServer({
        Code,
        }: ICreateUserInput): Promise<IGetHetaInput> {
        return axios.post(process.env.HERTA_URL+"/GetUserPhoto"
        ,{
            Code:Code,
        }
        )
        .then(response => {
            return { ...response.data };
            })
        .catch((err:Error) =>{
            return (err)
        })  
        }



    async function IdentifySubjectServer({
        images
        }: ICreateUserInput) {
          return axios.post(process.env.HERTA_URL+"/IdentifySubject"
          ,{
              images:images      
           }
          )
          .then(response => {
              return { ...response.data };
              })
          .catch((err:Error) =>{
              return (err)
          })  
        }
 
  
 

  export default {
    EnrollUserServer,
    DeleteUserServer,
    GetUserPhotoServer,
    IdentifySubjectServer
};