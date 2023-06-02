
var axios = require('axios');
require('dotenv').config();



export default async function getCid(data) {
    const AUTH='Bearer '+process.env.NEXT_PUBLIC_AUTH
    console.log(AUTH)
// Check Connection
    axios.get("https://api.pinata.cloud/data/testAuthentication",
    {
        headers: {
            'Authorization': AUTH
        }
    }).then(response => {
    console.log(response.data);
})
    
var cid =""
const cid_data = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS',
    data,
    {
        'Content-Type': 'application/json',
        headers: {
            'Authorization': AUTH
        }
    }).then(response => {
        
    cid = response.data.IpfsHash;
    console.log(response.data);
    console.log(cid)
    //return cid
    
})
const cid_xx =  await cid_data
console.log(cid)
return  cid

  

}

export {getCid}
