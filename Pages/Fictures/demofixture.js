import {test as base} from '@playwright/test'
import demodata from '../datafile/demodata.json'
import  democlass from '../class/democlass'


export const test=base.extend({
    userdata:async({},use)=>{
        
        await use(demodata)
    },
    
    demo:async({},use)=>{
        const cart=new democlass(page)
        await use(cart)
    }

})

