import React from "react";
import axios from 'axios'
import {useQuery,gql} from '@apollo/client'
interface User{
    id:number,
    name:string,
    age:number
}
const getInfo=async()=>{
    try{
        console.log('发请求1')
        console.log('process.env.REACT_APP_API_URL',process.env)
        // const res2= await axios.get('user/1111')
        
        const res= await axios.get(process.env.REACT_APP_API_URL+'/user/1111')
        
        
        console.log(res.data)
    }catch(err){
        console.log('error',err)
    }
}
const GET_USERS=gql`
    query alluser{
        user(id:1112){
            id
            name
            age
        }
    }
    `;
const getInfo2=()=>{
   
}
function User(){
    const{loading,error,data}=useQuery(GET_USERS);
    // console.log('请求2',data)
    return (
        <div>user
             <button onClick={getInfo}>点击获取用户信息1</button>
             {/* <button onClick={getInfo2}>点击获取用户信2</button> */}
        </div>
       
    )
}

export default User;