function checkPassLength(value) {
    return value.length > 7;
}

function checkNameLength(value) {
    return value.length > 5;
}

function checkEmail(value) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(value) == true;
}


export default {checkPassLength , checkNameLength, checkEmail};

