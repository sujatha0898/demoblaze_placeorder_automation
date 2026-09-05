const users=[
    {username:'standard_user', password:'secret_sauce',expectedresult:'success'},
    {username:'locked_out_user',password:'secret_sauce',expectedresult:'locked'},
    {username:'wrong_user',password:'wrong_pass',expectedresult:'invalid'}
]
module.exports={users}