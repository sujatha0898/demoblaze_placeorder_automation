import{test as base} from '@playwright/test';     //renaming test as base to add some more common operation to perform
import userlogin from '../tests/userlogin.json';    //data file need to import to use in extend class



export const test=base.extend({                  // here we are exporting test and assigning base into test by adding all needed operation
    userdata:async({},use)=>{                    // use meth
        await use(userlogin)                     
    }   
                                      
                                                 

})



