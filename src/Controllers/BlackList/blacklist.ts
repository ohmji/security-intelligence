import blackList,{ IBlackList} from '../../Models/BlackList/blacklist';

interface ICreateUserInput {
  identification : IBlackList['identification'];
  name : IBlackList['name'];
  surname: IBlackList['surname'];
  name_thai: IBlackList['name_thai'];
  surname_thai: IBlackList['surname_thai'];
  address: IBlackList['address'];
  date_issue: IBlackList['date_issue'];
  date_exprire: IBlackList['date_exprire'];
  title: IBlackList['title'];
  title_eng:IBlackList['title_eng'];
  gender:IBlackList['gender'];
  birthDate:IBlackList['birthDate'];
  image_picture:IBlackList['image_picture'];
  faceImage:IBlackList['faceImage'];
  code:IBlackList['code'];
  plate:IBlackList['plate'];
  province:IBlackList['province'];
  imageCar:IBlackList['imageCar'];
}
interface getUserInput {
  identification : IBlackList['identification'];
}
interface getPlateInput {
  plate :  IBlackList['plate'];
}

interface getCodeInput {
  code :  IBlackList['code'];
}


async function CreateblackList({
  identification,
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

  }: ICreateUserInput): Promise<IBlackList> {
    return blackList.create({
      identification,
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
      imageCar
      
  
    })
      .then((data: IBlackList) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  async function getblackListbyIdt({identification}:getUserInput) {
    return blackList.findOne({identification}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })

  }

  async function getblackListbyPlate({plate}:getPlateInput) {
    return blackList.findOne({plate}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })

  }

  async function getblackListbyCode({code}:getCodeInput) {
    return blackList.findOne({code}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })

  }



  async function deleteblackList({identification}:getUserInput) {
    return blackList.findOneAndDelete({identification}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })


  }

  async function updateblackList({
    identification,
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
      return blackList.findOneAndUpdate({identification},{
        identification,
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

  export default {
    CreateblackList,
    getblackListbyIdt,
    deleteblackList,
    updateblackList,
    getblackListbyCode,
    getblackListbyPlate
  };