import privatePersons,{ IprivatePersons } from '../../Models/privatePersons/privatePerson.model';

interface ICreateUserInput {
  identification : IprivatePersons['identification'];
  name : IprivatePersons['name'];
  surname: IprivatePersons['surname'];
  name_thai: IprivatePersons['name_thai'];
  surname_thai: IprivatePersons['surname_thai'];
  address: IprivatePersons['address'];
  date_issue: IprivatePersons['date_issue'];
  date_exprire: IprivatePersons['date_exprire'];
  title: IprivatePersons['title'];
  title_eng:IprivatePersons['title_eng'];
  gender:IprivatePersons['gender'];
  birthDate:IprivatePersons['birthDate'];
  image_picture:IprivatePersons['image_picture'];
  faceImage:IprivatePersons['faceImage'];
  code:IprivatePersons['code'];
  plate:IprivatePersons['plate'];
  province:IprivatePersons['province'];
  imageCar:IprivatePersons['imageCar'];
  type:IprivatePersons['type'];
  role:IprivatePersons['role'];
}
interface getUserInput {
  identification : IprivatePersons['identification'];
}
interface getPlateInput {
  plate :  IprivatePersons['plate'];
}

interface getCodeInput {
  code :  IprivatePersons['code'];
}


async function CreatePrivatePersons({
  identification,
  type,
  role,
  name,
  surname,
  name_thai,
  surname_thai,
  address,
  date_issue,
  date_exprire,
  title,
  title_eng,
  gender,
  birthDate,
  image_picture,
  code,
  faceImage,
  plate,
  province,
  imageCar

  }: ICreateUserInput): Promise<IprivatePersons> {
    return privatePersons.create({
      identification,
      type,
      role,
      name,
      surname,
      name_thai,
      surname_thai,
      address,
      date_issue,
      date_exprire,
      title,
      title_eng,
      gender,
      birthDate,
      plate,
      province,
      image_picture,
      code,
      faceImage,
      imageCar,
     
      
  
    })
      .then((data: IprivatePersons) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  async function getPrivatePersonsbyIdt({identification}:getUserInput) {
    return privatePersons.findOne({identification}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })

  }

  async function getPrivatePersonsbyPlate({plate}:getPlateInput) {
    return privatePersons.findOne({plate}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })

  }

  async function getPrivatePersonsbyCode({code}:getCodeInput) {
    return privatePersons.findOne({code}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })

  }



  async function deletePrivatePerson({identification}:getUserInput) {
    return privatePersons.findOneAndDelete({identification}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })


  }

  async function updatePrivatePerson({
    identification,
    type,
    role,
    name,
    surname,
    name_thai,
    surname_thai,
    address,
    date_issue,
    date_exprire,
    title,
    title_eng,
    gender,
    birthDate,
    image_picture,
    plate,
    province,
    code,
    faceImage,
    imageCar

    
  
    }: ICreateUserInput){
      return privatePersons.findOneAndUpdate({identification},{
        identification,
        type,
        role,
        name,
        surname,
        name_thai,
        surname_thai,
        address,
        date_issue,
        date_exprire,
        title,
        title_eng,
        gender,
        birthDate,
        image_picture,
        code,
        faceImage,
        plate,
        province,
        imageCar
    
      })
        .then(data => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        });
    }

    async function getPrivatePersonsAll() {
      return privatePersons.find().then((
      result=>{return result}))
      .catch((e:Error)=>{
        throw e;
      })
  
    }

  export default {
    CreatePrivatePersons,
    getPrivatePersonsbyIdt,
    deletePrivatePerson,
    updatePrivatePerson,
    getPrivatePersonsbyCode,
    getPrivatePersonsbyPlate,
    getPrivatePersonsAll
  };