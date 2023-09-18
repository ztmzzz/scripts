let VAL_signcookie=$persistentStore.read("cookie_sfacg");
let VAL_SFSecurity=$persistentStore.read("SFSecurity_sfacg");
let VAL_Authorization=$persistentStore.read("Authorization_sfacg");
let VAL_UA=$persistentStore.read("UA_sfacg");
const url = "https://api.sfacg.com/user/signInfo/";
const headers = {"Host": "api.sfacg.com","Content-Length": 0,"User-Agent": VAL_UA,"Cookie": VAL_signcookie,"SFSecurity": VAL_SFSecurity,"Authorization": VAL_Authorization};

const myRequest = {
    url: url,
    headers: headers, 
    body: ""
};

$httpClient.put(myRequest,(err,response,data) =>{
    if(data===null){
        console.log(response['status']['msg']);
    }else {
        console.log('获取代券数:'+data['coupons']);
    }
    $done();})
    

