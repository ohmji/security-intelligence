import { RoutesInput } from '../types/route';
import  passHistoryController from '../Controllers/passHistory/passHistory.controller';
import  privatePersonController from '../Controllers/privatePerson/privatePerson.controller';

export default ({ app } : RoutesInput) => {

        
    
    
    

    
       
       app.post('/api/signIn/privatePerson', async(req,res) => {
        try {
            try {
                
                const privatePerson = await privatePersonController.getPrivatePersonsbyIdt({
                    identification:req.body.identification
                  });

                //   console.log(privatePerson)
                  if(privatePerson != null) {
                  const passHistory = await passHistoryController.CreatepassHistory({
                                created:new Date(),
                                identification:privatePerson.identification,
                                name:privatePerson.name,
                                surname:privatePerson.surname,
                                name_thai:privatePerson.name_thai,
                                surname_thai:privatePerson.surname_thai,
                                address:privatePerson.address,
                                date_issue:privatePerson.date_issue,
                                date_exprire:privatePerson.date_exprire,
                                title:privatePerson.title,
                                title_eng:privatePerson.title_eng,
                                gender:privatePerson.gender,
                                birthDate:privatePerson.birthDate,
                                image_picture:privatePerson.image_picture,
                                faceImage:privatePerson.faceImage,
                                code:privatePerson.identification,
                                plate:privatePerson.plate,
                                province:privatePerson.province,
                                imageCar:privatePerson.imageCar,
                                note:req.body.note,
                                temperature:req.body.temperature
                });
            
                         return res.send({ passHistory });
               }
               else {
                    return res.send({ status:"not found privatePerson" });
               }
         }
                catch (e) {
                         return res.send({e})
                    }
                }
                catch (e) {
                    return res.send({e})
                }
           
            })


            app.post('/api/signIn/privatePerson/face', async(req,res) => {
                try {
                    try {
                        
                        const privatePerson = await privatePersonController.getPrivatePersonsbyCode({
                            code:req.body.code
                          });
        
                        //   console.log(privatePerson)
                          if(privatePerson != null) {
                          const passHistory = await passHistoryController.CreatepassHistory({
                                        created:new Date(),
                                        identification:privatePerson.identification,
                                        name:privatePerson.name,
                                        surname:privatePerson.surname,
                                        name_thai:privatePerson.name_thai,
                                        surname_thai:privatePerson.surname_thai,
                                        address:privatePerson.address,
                                        date_issue:privatePerson.date_issue,
                                        date_exprire:privatePerson.date_exprire,
                                        title:privatePerson.title,
                                        title_eng:privatePerson.title_eng,
                                        gender:privatePerson.gender,
                                        birthDate:privatePerson.birthDate,
                                        image_picture:privatePerson.image_picture,
                                        faceImage:privatePerson.faceImage,
                                        code:privatePerson.identification,
                                        plate:privatePerson.plate,
                                        province:privatePerson.province,
                                        imageCar:privatePerson.imageCar,
                                        note:req.body.note,
                                        temperature:req.body.temperature
                        });
                    
                                 return res.send({ passHistory });
                       }
                       else {
                            return res.send({ status:"not found privatePerson" });
                       }
                 }
                        catch (e) {
                                 return res.send({e})
                            }
                        }
                        catch (e) {
                            return res.send({e})
                        }
                   
                    })


                    app.post('/api/signIn/privatePerson/car', async(req,res) => {
                        try {
                            try {
                                
                                const privatePerson = await privatePersonController.getPrivatePersonsbyPlate({
                                    plate:req.body.plate
                                  });
                
                                //   console.log(privatePerson)
                                  if(privatePerson != null) {
                                  const passHistory = await passHistoryController.CreatepassHistory({
                                                created:new Date(),
                                                identification:privatePerson.identification,
                                                name:privatePerson.name,
                                                surname:privatePerson.surname,
                                                name_thai:privatePerson.name_thai,
                                                surname_thai:privatePerson.surname_thai,
                                                address:privatePerson.address,
                                                date_issue:privatePerson.date_issue,
                                                date_exprire:privatePerson.date_exprire,
                                                title:privatePerson.title,
                                                title_eng:privatePerson.title_eng,
                                                gender:privatePerson.gender,
                                                birthDate:privatePerson.birthDate,
                                                image_picture:privatePerson.image_picture,
                                                faceImage:privatePerson.faceImage,
                                                code:privatePerson.identification,
                                                plate:privatePerson.plate,
                                                province:privatePerson.province,
                                                imageCar:privatePerson.imageCar,
                                                note:req.body.note,
                                                temperature:req.body.temperature
                                });
                            
                                         return res.send({ passHistory });
                               }
                               else {
                                    return res.send({ status:"not found privatePerson" });
                               }
                         }
                                catch (e) {
                                         return res.send({e})
                                    }
                                }
                                catch (e) {
                                    return res.send({e})
                                }
                           
                            })
            




            app.post('/api/signIn/publicPerson', async(req,res) => {
                    try {
                            const data = await passHistoryController.CreatepassHistory({
                                created:new Date(),
                                identification:req.body.identification,
                                name:req.body.name,
                                surname:req.body.surname,
                                name_thai:req.body.name_thai,
                                surname_thai:req.body.surname_thai,
                                address:req.body.address,
                                date_issue:req.body.date_issue,
                                date_exprire:req.body.date_exprire,
                                title:req.body.title,
                                title_eng:req.body.title_eng,
                                gender:req.body.gender,
                                birthDate:req.body.birthDate,
                                image_picture:req.body.image_picture,
                                faceImage:req.body.faceImage,
                                code:req.body.identification,
                                plate:req.body.plate,
                                province:req.body.province,
                                imageCar:req.body.imageCar,
                                note:req.body.note,
                                temperature:req.body.temperature
                            });
                             const passHistory = {
                                _id:data._id,
                                name:data.name,
                                surname:data.surname,
                                name_thai:data.name_thai,
                                surname_thai:data.surname_thai,
                                note:data.note,
                                plate:data.plate,
                                province:data.province,
                                temperature:data.temperature
                            } 
                    
                                 return res.send({ passHistory });
                       
                     }
                        catch (e) {
                                 return res.send({e})
                            }
                        
                   
                    })
            

    
 }