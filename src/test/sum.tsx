

async function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('id:333')
        },1000)
    })
}
export default getUser;