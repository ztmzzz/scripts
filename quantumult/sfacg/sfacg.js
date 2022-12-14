let VAL_signcookie=$prefs.valueForKey("cookie_sfacg");
let VAL_SFSecurity=$prefs.valueForKey("SFSecurity_sfacg");
let VAL_Authorization=$prefs.valueForKey("Authorization_sfacg");
let VAL_UA=$prefs.valueForKey("UA_sfacg");

const url = "https://api.sfacg.com/user/signInfo/";
const method = "PUT";
const headers = {"Host": "api.sfacg.com","Content-Length": 0,"User-Agent": VAL_UA,"Cookie": VAL_signcookie,"SFSecurity": VAL_SFSecurity,"Authorization": VAL_Authorization};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: ""
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    // console.log(response.body);
    // $notify("Title", "Subtitle", response.body); // Success!
    let res = JSON.parse(response.body);
    if(res['data']===null){
        console.log(res['status']['msg']);
    }else {
        console.log('获取代券数:'+res['data']['coupons']);
    }
    $done();
}, reason => {
    // reason.error
    $notify("SFACG", "签到失败", reason.error); // Error!
    $done();
});