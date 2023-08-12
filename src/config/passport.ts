import passport from "passport";
import { BasicStrategy } from "passport-http";

import {User} from '../models/User';

const notAuthorized = {status: 401, message: "Not Authorized!"};

//Define a strategy que será utilizada
passport.use(new BasicStrategy( async (email, password, done) => {

    if(email && password){
        const user = await User.findOne({
            where:{
                email, password
            }
        });
    }
    return done(notAuthorized, false);

}));

//exporta o objeto passport
export default passport;