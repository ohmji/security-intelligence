import { RoutesInput } from '../types/route';
import  passHistoryController from '../Controllers/passHistory/passHistory.controller';
import  passHistoryOutController from '../Controllers/passHistoryOut/passHistoryOut.controller';

export default ({ app } : RoutesInput) => {


    
        app.post('/api/signOut/publicPerson', async(req,res) => {
        try {
            try {
                
                const passHistory = await passHistoryController.getpassHistoryId({
                      _id:req.body.passHistoryId
                  });

                  if(passHistory  != null) {
                  const passHistoryOut = await passHistoryOutController.CreatepassHistoryOut({
                        created:new Date(),
                        signInTime:passHistory.created,
                        passHistoryId:req.body.passHistoryId,
                        status:req.body.status
                });
            
                         return res.send({ passHistoryOut });
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
                            identification:req.body.identification
                          });
        
                          if(passHistory  != null) {
                          const passHistoryOut = await passHistoryOutController.CreatepassHistoryOut({
                                created:new Date(),
                                signInTime:passHistory.created,
                                passHistoryId:passHistory._id,
                                status:req.body.status
                        });
                    
                                 return res.send({ passHistoryOut });
                       }
                       else {
                            return res.send({ status:"not found identification" });
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
                                    plate:req.body.plate
                                  });
                
                                  if(passHistory  != null) {
                                  const passHistoryOut = await passHistoryOutController.CreatepassHistoryOut({
                                        created:new Date(),
                                        signInTime:passHistory.created,
                                        passHistoryId:passHistory._id,
                                        status:req.body.status
                                });
                            
                                         return res.send({ passHistoryOut });
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