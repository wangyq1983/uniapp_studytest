var webhost = 'https://develop.vsclouds.com/';
//var webhost = 'http://192.168.3.9:8080/';
var webapi = {
    // 学校列表
    schoolList : webhost +'public/school/get/list',
    // 学校详情
    schoolDetail: webhost + 'public/school/detail/info/school_id',

    // 学员列表
    studentList: webhost +'public/course/student/list', 
    // 学员详情
    studentDetail: webhost + 'public/course/student/detail',
    
    // 推荐列表
    recoList: webhost + 'public/course/recommend/detail/list',
    // 推荐详情
    recoDetail: webhost + 'public/course/recommend/detail/info',

    // 教师列表
    teacherList: webhost + 'public/course/teacher/list',
    // 教师详情
    teacherDetail: webhost + 'public/course/teacher/detail',

    // 课程列表
    lessonList: webhost + 'public/course/list',
    // 课程详情
    lessonDetail: webhost + 'public/course/info/detail',

    // 课程类型列表
    lessonType: webhost + 'public/course/type/list',

    // 手机登录
    phoneLogin: webhost + 'public/weixin/mp/common/user/login/phone',

    // 微信登陆
    wxLogin: webhost + 'public/weixin/mp/common/user/login/wx',

    // 收藏
    collection: webhost + 'course/user/collection',

    // 收藏列表
    collectionList: webhost + 'course/user/collection/list',

    // 绑定微信
    bindwx: webhost + 'weixin/mp/common/user/bind'
}

const objToStr = obj => {
    var strParmas = '';
    var firstP = 1;
    for (var p in obj) {
        var linkAdd = "";
        if (firstP == 0) {
            linkAdd = '&';
        }
        strParmas = strParmas + linkAdd + p + '=' + obj[p];
        firstP = 0;
    }
    return strParmas;
}

const doRequest = (url,params,callback)=>{
	let allParams = '?' + objToStr(params); //组合为完成请求参数
    var url = url + allParams;
    console.log(url);
    uni.showLoading({
        title: '加载中',
    });
    uni.request({
        url: url,
        data: {
 
        },
        header: {
            'content-type': 'application/json'
        },
        success: (res) => {
            console.log(res.data);
            uni.hideLoading();
            callback(res);
        },
        fail: (res) => {
            console.log(res)
        }
    })
}

module.exports = {
    doRequest: doRequest,
    webapi:webapi
}