import {test as base}from '@playwright/test'
import url from '../datafile/orgURL.json'
import det from '../tests/datafile/orglogin.json'
export const test=base.extend({
    
    loginurl:async({},use)=>{
       await use(url)
    },
    
     logindet:async({},use)=>{
        await use(det)

     }
    }


     

    

)





















    
    
