/**
 * @api {post} /captcha/ 申请验证码
 * @apiVersion 0.1.0
 * @apiName postCaptcha
 * @apiGroup captcha
 *
 * @apiHeader {String} [authorization] 认证用的的令牌
 *
 * @apiParam (Body) {String="email","mobile"} receiverType 接收终端的类型，邮箱和手机等。
 * @apiParam (Body) {String} receiverId 接收终端的识别码，如手机号、邮箱地址等。
 * @apiParam (Body) {String="identity", "reset-pwd", "validate-device"} purpose 申请验证码的用途。
 *
 * @apiSuccess (200) {String} code 处理结果状态码。
 * @apiSuccess (200) {String} message  处理结果消息。
 *
 * @apiError (400) RequestParamsError 请求中的参数不符合要求
 * @apiError (500) ServiceInternalError 服务器内部错误
 */