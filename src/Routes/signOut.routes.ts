import { RoutesInput } from '../types/route';
import  passHistoryController from '../Controllers/passHistory/passHistory.controller';
import  passHistoryOutController from '../Controllers/passHistoryOut/passHistoryOut.controller';

export default ({ app } : RoutesInput) => {


    
        app.post('/api/signOut/publicPerson', async(req,res) => {
        try {
            try {
                
                const passHistory = await passHistoryController.updatePassHistorySignOut({
                      _id:req.body.passHistoryId,
                      status:true,
                      signOutTime:new Date()
                  });

                     if(passHistory != null) {
                         return res.send({
                            name:passHistory.name,
                            surname:passHistory.surname ,
                            passHistoryOut:{
                            signInTime:passHistory.created,
                            status:passHistory.status,
                            signOutTime:passHistory.signOutTime,
                            }
                        });
               }
               else {
                    return res.send({ status:"not found passHistoryId" });
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

            app.post('/api/signOut/publicPerson/idt', async(req,res) => {
                try {
                    try {
                        
                        const passHistory = await passHistoryController.getpassHistorybyIdt({
                              identification:req.body.identification,
                              status:true,
                              signOutTime:new Date()
                          });
        
                             if(passHistory != null) {
                                 return res.send({
                                    name:passHistory.name,
                                    surname:passHistory.surname ,
                                    passHistoryOut:{
                                    signInTime:passHistory.created,
                                    status:passHistory.status,
                                    signOutTime:passHistory.signOutTime,
                                    }
                                });
                       }
                       else {
                            return res.send({ status:"not found passHistoryId" });
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


                    app.post('/api/signOut/publicPerson/plate', async(req,res) => {
                        try {
                            try {
                                
                                const passHistory = await passHistoryController.getpassHistorybyPlate({
                                    plate:req.body.plate,
                                      status:true,
                                      signOutTime:new Date()
                                  });
                
                                     if(passHistory != null) {
                                         return res.send({
                                            name:passHistory.name,
                                            surname:passHistory.surname ,
                                            passHistoryOut:{
                                            signInTime:passHistory.created,
                                            status:passHistory.status,
                                            signOutTime:passHistory.signOutTime,
                                            }
                                        });
                               }
                               else {
                                    return res.send({ status:"not found passHistoryId" });
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
        

            

    
 }