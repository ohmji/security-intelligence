import { RoutesInput } from '../types/route';
import  passHistoryController from '../Controllers/passHistory/passHistory.controller';

export default ({ app } : RoutesInput) => {

        app.post('/api/passHistory', async(req,res) => {
        try {
            const passHistory = await passHistoryController.CreatepassHistory({
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
        
                return res.send({ passHistory });
            }
            catch (e) {
                return res.send({e})
            }
        })

    app.get('/api/passHistory',async(req,res) => {
        try {
            const passHistory = await passHistoryController.getpassHistorybyIdt({
                identification:req.body.identification
              });
          
                return res.send({ passHistory});
            }
            catch (e) {
                return res.send({e})
            }
        })

        app.get('/api/passHistory/size',async(req,res) => {
            try {
                const passHistory = await passHistoryController.getSize();
              
                    return res.send({ passHistory});
                }
                catch (e) {
                    return res.send({e})
                }
            })

    
        app.get('/api/passHistory/plate',async(req,res) => {
            try {
                const passHistory = await passHistoryController.getpassHistorybyPlate({
                    plate:req.body.plate
                  });
              
                    return res.send({ passHistory});
                }
                catch (e) {
                    return res.send({e})
                }
            })

    

        app.put('/api/passHistory',async(req,res) => {
            try {
                const passHistory = await passHistoryController.updatePassHistory({
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
              
                    return res.send({passHistory});
                }
                catch (e) {
                    return res.send({e})
                }
        })

    app.delete('/api/passHistory',async(req,res) => {
            try {
                const passHistory = await passHistoryController.deletePassHistory({
                    identification:req.body.identification
                  });
              
                    return res.send({passHistory});
                }
                catch (e) {
                    return res.send({e})
                }
        })
 }