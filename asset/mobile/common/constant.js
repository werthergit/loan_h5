define("mobile/common/constant",["require","exports","module"],function(require,exports,module){"use strict";var T={AUDIT_STATUS_WEITIJIAO:0,AUDIT_STATUS_SHENHEZHONG:1,AUDIT_STATUS_YITONGGUO:2,AUDIT_STATUS_WEITONGGUO:3,AUDIT_STATUS_DAHUIDAIXIUGAI:4},A=function(A){var U={};return U[T.AUDIT_STATUS_WEITIJIAO]="未提交",U[T.AUDIT_STATUS_SHENHEZHONG]="审核中",U[T.AUDIT_STATUS_YITONGGUO]="已通过",U[T.AUDIT_STATUS_WEITONGGUO]="未通过",U[T.AUDIT_STATUS_DAHUIDAIXIUGAI]="打回待修改",U[A]||""},U={LOAN_STATUS_DAIQUEREN:0,LOAN_STATUS_YIQUEREN:1,LOAN_STATUS_SHENCHATONGGUO:2,LOAN_STATUS_FANGKUAN:3},S=function(T){var A={};return A[U.LOAN_STATUS_DAIQUEREN]="待确定",A[U.LOAN_STATUS_YIQUEREN]="已确认待审核",A[U.LOAN_STATUS_SHENCHATONGGUO]="审核通过待放款",A[U.LOAN_STATUS_FANGKUAN]="放款成功",A[T]||""},_=function(U,_){if(U==T.AUDIT_STATUS_YITONGGUO)return S(_);else return A(U)},I={transAuditStatus:A,transLoanStatus:S,transStatus:_};$.extend(I,T,U),module.exports=I});