import passHistory,{ IpassHistory } from '../../Models/passHistory/passHistory.model';

interface ICreateUserInput {
  created:IpassHistory['created']
  identification : IpassHistory ['identification'];
  name : IpassHistory ['name'];
  surname: IpassHistory ['surname'];
  name_thai: IpassHistory ['name_thai'];
  surname_thai: IpassHistory ['surname_thai'];
  address: IpassHistory ['address'];
  date_issue: IpassHistory ['date_issue'];
  date_exprire: IpassHistory ['date_exprire'];
  title: IpassHistory ['title'];
  title_eng:IpassHistory ['title_eng'];
  gender:IpassHistory ['gender'];
  birthDate:IpassHistory ['birthDate'];
  image_picture:IpassHistory ['image_picture'];
  faceImage:IpassHistory ['faceImage'];
  code:IpassHistory ['code'];
  plate:IpassHistory ['plate'];
  province:IpassHistory ['province'];
  imageCar:IpassHistory ['imageCar'];
  temperature:IpassHistory['temperature'];
  note:IpassHistory['note']
  
}
  interface getUserInput {
    identification : IpassHistory['identification'];
  }

  interface getIdInput {
    _id : IpassHistory['_id'];
  }

  interface getPlateInput {
    plate : IpassHistory['plate'];
  }
  
  interface emptyNote {
    note : IpassHistory['note'];
  }

async function CreatepassHistory({
  created,
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
  note,
  temperature,
  code,
  faceImage,
  plate,
  province,
  imageCar

  }: ICreateUserInput): Promise<IpassHistory> {
    return passHistory.create({
      created,
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
      note,
      temperature,
      image_picture,
      code,
      faceImage,
      imageCar,
    
  
    })
      .then((data: IpassHistory) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  async function getpassHistoryId({_id}:getIdInput) {
    return passHistory.findById({_id}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })


  }

  

  async function getpassHistorybyIdt({identification}:getUserInput) {
    return passHistory.findOne({identification}).sort({created:'-1'}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })
  } 

  async function getpassHistorybyPlate({plate}:getPlateInput) {
    return passHistory.findOne({plate}).sort({created:'-1'}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })
  }
  async function getSize () {
    return passHistory.countDocuments({}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })
  }

  async function getSizePrivate () {
    return passHistory.countDocuments({ note: { $exists: true, $not: {$size: 0} }}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })
  }

  async function deletePassHistory({identification}:getUserInput) {
    return passHistory.findOneAndDelete({identification}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })


  }

  async function updatePassHistory({
    created,
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
    image_picture
  
    }: ICreateUserInput){
      return passHistory.findOneAndUpdate({identification},{
        created,
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
        image_picture
    
      })
        .then(data => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        });
    }


    
  

  export default {
    CreatepassHistory,
    getpassHistorybyIdt,
    deletePassHistory,
    updatePassHistory,
    getpassHistoryId,
    getpassHistorybyPlate,
    getSize,
    getSizePrivate
  };