const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {"Connection": "Close"};
//$prefs.setValueForKey(temp, "iosVolume"); 在http backend不能用
if($request.method==="POST"){
    let res = JSON.parse($request.body);
    let temp=res['voice'];
    console.log(temp);
    $prefs.setValueForKey(temp, "iosVolume");
    let myResponse1 = {
        status: myStatus,
        headers: myHeaders,
        body: 'success',
    };
    $done(myResponse1);
}
if($request.method==="GET"){
    let volume=$prefs.valueForKey("iosVolume");
    console.log(volume);
    let myResponse2 = {
        status: myStatus,
        headers: myHeaders,
        body: volume,
    };
    $done(myResponse2);
}

