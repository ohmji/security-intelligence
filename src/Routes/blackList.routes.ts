import { RoutesInput } from '../types/route';
import  blackListController from '../Controllers/BlackList/blacklist';
import  hertaController from "../Controllers/HertaController/herta.controller"
export default ({ app } : RoutesInput) => {

        app.post('/api/blackList', async(req,res) => {
        try {
            const enrollUser = await hertaController.EnrollUserServer({
                Code:req.body.identification,
                Name:req.body.name,
                Lname:req.body.surname,
                images:req.body.faceImage
            })
            if(enrollUser.Check == "True") {
            const blackList = await blackListController.CreateblackList({
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
                imageCar:req.body.imageCar

            });
            const passHistory = {
                _id:blackList._id,
                name:blackList.name,
                surname:blackList.surname,
                name_thai:blackList.name_thai,
                surname_thai:blackList.surname_thai,
                plate:blackList.plate,
                province:blackList.province,
                temperature:req.body.temperature
            }     

                return res.send({ passHistory });
            }
            else {
                    return res.send({status:"add face Image fail" });
                 }
            }
            catch (e) {
                return res.send({e})
            }
            
        })

    app.get('/api/blackList',async(req,res) => {
        try {
            const blackList = await blackListController.getblackListbyIdt({
                identification:req.body.identification
              });
          
                return res.send({ blackList});
            }
            catch (e) {
                return res.send({e})
            }
        })

        app.put('/api/blackList',async(req,res) => {
            try {
                const blackList = await blackListController.updateblackList({
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
                    imageCar:req.body.imageCar
                  });
              
                    return res.send({blackList});
                }
                catch (e) {
                    return res.send({e})
                }
        })

    app.delete('/api/blackList',async(req,res) => {
            try {
                 const deleteUser = await hertaController.DeleteUserServer({
                        Code:req.body.identification
                    })
                
                 const blackList = await blackListController.deleteblackList({
                    identification:req.body.identification
                  });
                    
                    if(deleteUser.Check ==="True") {
                        return res.send({blackList});
                    }
                    else {
                        return res.send({status:"delete face image not complete"})
                    }
                    
                }
                catch (e) {
                    return res.send({e})
                }
        })
 }