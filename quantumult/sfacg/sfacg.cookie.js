// https:\/\/api.sfacg.com\/user\/tickets url script-request-header sfacg/sfacg.cookie.js
const cookieKey = "cookie_sfacg"
const SFSecurityKey = "SFSecurity_sfacg"
const AuthorizationKey = "Authorization_sfacg"
const UAKey = "UA_sfacg"
const cookieVal = $request.headers['Cookie']
const SFSecurityVal = $request.headers['SFSecurity']
const AuthorizationVal = $request.headers['Authorization']
const UAVal = $request.headers['User-Agent']
if (cookieVal) {
    $prefs.setValueForKey(cookieVal, cookieKey);
    $prefs.setValueForKey(SFSecurityVal, SFSecurityKey);
    $prefs.setValueForKey(AuthorizationVal, AuthorizationKey);
    $prefs.setValueForKey(UAVal, UAKey);
    $notify("SFACG", '获取Cookie & SFSecurity && Authorization: 成功', '')
    console.log(`[SFACG] 获取Cookie: 成功, cookie: ${cookieVal} | SFSecurity: ${SFSecurityVal} | Authorization: ${AuthorizationVal} | UA: ${UAVal}`)

}
$done();

