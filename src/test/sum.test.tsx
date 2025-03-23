import getUser from "./sum"
test('getUser id async func',async ()=>{
    const x=await getUser();
    expect(x).toBe('id:333')
})
