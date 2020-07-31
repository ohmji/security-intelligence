import { RoutesInput } from '../types/route';
import  privatePersonController from '../Controllers/privatePerson/privatePerson.controller';
import  hertaController from "../Controllers/HertaController/herta.controller"
export default ({ app } : RoutesInput) => {

        app.post('/api/privatePerson', async(req,res) => {
        try {
            const enrollUser = await hertaController.EnrollUserServer({
                Code:req.body.identification,
                Name:req.body.name,
                Lname:req.body.surname,
                images:req.body.faceImage
            })
            if(enrollUser.Check == "True") {
            const privatePerson = await privatePersonController.CreatePrivatePersons({
                identification:req.body.identification,
                type:req.body.type,
                role:req.body.role,
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
            const typeHistory = {
                _id:privatePerson._id,
                name:privatePerson.name,
                surname:privatePerson.surname,
                name_thai:privatePerson.name_thai,
                surname_thai:privatePerson.surname_thai,
                plate:privatePerson.plate,
                province:privatePerson.province,
                temperature:req.body.temperature
            }     

                return res.send({ typeHistory });
            }
            else {
                    return res.send({status:"add face Image fail" });
                 }
            }
            catch (e) {
                return res.send({e})
            }
            
        })


        app.get('/api/privatePerson/all',async(req,res) => {
            try {
                const privatePerson = await privatePersonController.getPrivatePersonsAll();
              
                    return res.send({ privatePerson});
                }
                catch (e) {
                    return res.send({e})
                }
            })

    app.get('/api/privatePerson',async(req,res) => {
        try {
            const privatePerson = await privatePersonController.getPrivatePersonsbyIdt({
                identification:req.body.identification
              });
          
                return res.send({ privatePerson});
            }
            catch (e) {
                return res.send({e})
            }
        })

        app.put('/api/privatePerson',async(req,res) => {
            try {
                const privatePerson = await privatePersonController.updatePrivatePerson({
                    identification:req.body.identification,
                    type:req.body.type,
                    role:req.body.role,
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
              
                    return res.send({privatePerson});
                }
                catch (e) {
                    return res.send({e})
                }
        })

    app.delete('/api/privatePerson',async(req,res) => {
                // console.log(req.body)
                try {
                 const deleteUser = await hertaController.DeleteUserServer({
                        Code:req.body.identification
                    })
                if(deleteUser.Check ==="True")
                {  const privatePerson = await privatePersonController.deletePrivatePerson({
                    identification:req.body.identification
                  });
                    
                    if(deleteUser.Check ==="True") {
                        return res.send({privatePerson});
                    }
                    else {
                        return res.send({status:"delete face image not complete"})
                    }
                }
                else {
                    return res.send({status:"delete face image not complete status false "})
                }
                }
                catch (e) {
                    return res.send({e})
                }
        })
 }