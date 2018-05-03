define("mobile/needConfirmJinshang/needConfirm_html", [], function () { return '<div class="fenqi-body"><div class="header-notice"><i class="icon-check-circle"></i><div class="label"><strong>恭喜，您的分期申请已审核通过，具备放款资格，请您再次确认立即放款？</strong></div></div><div class="fenqi-info"><ul class="unstyled"><li>机构名称：{{ orderInfo.orgName }}</li><li>课程名称：{{ orderInfo.courseName }}</li><li>申请分期课程金额：￥{{ formatMoney(orderInfo.applyamt) }}</li></ul><ul class="unstyled"><li>分期期数：{{ orderInfo.applytnr }}</li><li>分期费率：{{ orderInfo.loanRate }}</li><li>每期应还金额：￥{{ formatMoney(orderInfo.refundOnce) }}</li></ul><!-- <ul class="unstyled">{{ #if data.purchase_info.loan_type != 2 }}<li>其中每期本金：￥{{ formatMoney(data.fenqi_info.refund_origin_once) }}</li><li>每期手续费：￥{{ formatMoney(data.fenqi_info.refund_money_once) }}</li>{{ /if }}{{ #if data.course_info.interest_type == 1 }}<li class="notice">* 该课程的分期手续费由机构支付！</li>{{ /if }}</ul> --></div><div class="fenqi-protocol"><div class="notice">请确认相关金额费率正确，然后点击底部按钮获取验证码即可完成分期</div><div class="protocols"><a class="protocol-jinshang" href="{{data.contract_preview}}">《个人消费贷款合同》</a><a class="protocol-genshuixue" href="{{data.intermediary_service_agreement}}">《跟谁学居间服务协议》</a></div></div></div><div class="fenqi-footer"><button class="button info fluid" on-click="toConfirm()">确认借款</button></div>'});