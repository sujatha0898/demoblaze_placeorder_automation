import {test as base}from '@playwright/test'
import url from '../Pages/datafile/orgURL.json'
import det from '../Pages/datafile/orglogin.json'
export const test=base.extend({
    
    loginurl:async({},use)=>{
       await use(url)
    },
    
     logindet:async({},use)=>{
        await use(det)

     }
    }


     

    

)





















    
    
