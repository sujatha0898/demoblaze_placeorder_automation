import{test as base} from '@playwright/test';
import userlogin from '../tests/userlogin.json';



export const test=base.extend({
    userdata:async({},use)=>{
        await use(userlogin)
    }


})



