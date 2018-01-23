module.exports = {
    rules: {
        receiverValid(value, {argName, validName, validValue, ctx, currentQuery, rule, rules, parsedValidValue}) {
            // 判断手机号码的正则
            let mobileRegex = /^1[34578]\d{9}$/g;
            // 判断邮箱正则表达式
            let mailRegex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;

            return mobileRegex.test(value) || mailRegex.test(value);
        }
    },
    messages: {
        receiverValid: '{name} should eq {args}'
    }
};