define("mobile/applyList/applyList_html", [], function () { return '<div class="apply-list"><NavBar options="{{navBarOptions}}" />{{#if applyList.length}}<div class="data-list unstyled">{{#each applyList}}<a class="item" {{#if auditStatus == constant.AUDIT_STATUS_YITONGGUO && loanStatus == constant.LOAN_STATUS_DAIQUEREN}}href="./needConfirmJinshang.html?orderId={{ orderId }}"{{elseif auditStatus == constant.AUDIT_STATUS_YITONGGUO}}href="./refundDetail.html?orderId={{ orderId }}"{{else}}href="./course.html?customerId={{customerId}}&courseId={{ courseId }}"{{/if}}><div class="fenqi-notice"><span class="muted"></span><span {{#if auditStatus == constant.AUDIT_STATUS_YITONGGUO}}class="success"{{else}}class="error"{{/if}}>{{transStatus(auditStatus, loanStatus)}}</span></div><ul class="fenqi-info unstyled"><li>{{courseName}}</li><li>申请时间：{{formatDate(createTime)}}</li><li>申请金额：¥ {{formatMoney(applyamt)}}</li><li>时间：{{applytnr}} 个月</li></ul></a>{{/each}}</div>{{else}}<div class="loader-wrapper">{{>loader}}</div>{{/if}}</div>'});