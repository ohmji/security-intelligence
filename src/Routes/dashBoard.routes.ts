import { RoutesInput } from '../types/route';
import  passHistoryController from '../Controllers/passHistory/passHistory.controller';
import  passHistoryOutController from '../Controllers/passHistoryOut/passHistoryOut.controller';

export default ({ app } : RoutesInput) => {

       

    

        app.get('/api/dashboard',async(req,res) => {
            try {
                const passHistory = await passHistoryController.getSize();
                const signOut = await passHistoryOutController.getSize()
                const  passPublic  = await passHistoryController.getSizePrivate();
                const  passPrivate  = passHistory-passPublic
                    return res.send({passHistory,
                            signOut,passPrivate,passPublic
                    });
                }
                catch (e) {
                    return res.send({e})
                }
            })

    

        
 }