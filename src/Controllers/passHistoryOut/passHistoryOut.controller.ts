import passHistoryOut,{ IpassHistoryOut } from '../../Models/passHistoryOut/passHistoryOut.model';

interface ICreateUserInput {
  created:IpassHistoryOut['created']
  passHistoryId : IpassHistoryOut['passHistoryId'];
  status : IpassHistoryOut ['status'];
  signInTime:IpassHistoryOut ['signInTime'];
  
  
}
interface getUserInput {
    passHistoryId : IpassHistoryOut['passHistoryId'];
}

async function getSize () {
  return passHistoryOut.countDocuments({}).then((
  result=>{return result}))
  .catch((e:Error)=>{
    throw e;
  })
}


async function CreatepassHistoryOut({
    created,
    passHistoryId,
    status ,
    signInTime

  }: ICreateUserInput): Promise<IpassHistoryOut> {
    return passHistoryOut.create({
        created,
        passHistoryId,
        status ,
        signInTime
  
    })
      .then((data: IpassHistoryOut) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  async function getpassHistorybyIdt({passHistoryId}:getUserInput) {
    return passHistoryOut.findOne({passHistoryId}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })


  }
  async function deletePassHistory({passHistoryId}:getUserInput) {
    return passHistoryOut.findOneAndDelete({passHistoryId}).then((
    result=>{return result}))
    .catch((e:Error)=>{
      throw e;
    })


  }

  async function updatePassHistory({
    created,
    passHistoryId,
    status 
  
    }: ICreateUserInput){
      return passHistoryOut.findOneAndUpdate({passHistoryId},{
        created,
        passHistoryId,
        status 
    
      })
        .then(data => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        });
    }


    
  

  export default {
    CreatepassHistoryOut,
    getpassHistorybyIdt,
    deletePassHistory,
    updatePassHistory,
    getSize
  };