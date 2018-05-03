define("mobile/common/component/ConfirmBox_html", [], function () { return '<div class="confirm-dialog"><div class="code-wrapper">手机验证码<input type="text" value="{{smsCode}}"><span class="code-btn {{colorClassName}}"><CodeButton options="{{verifyCodeButtonOptions}}" on-click="sendSmsCode()" /></span></div>{{#if options.protocolName}}<div class="protocol-wrapper">{{#if agree}}<i class="icon-check-o" on-click="set(\'agree\', false)"></i>{{else}}<i class="icon-circle-o" on-click="set(\'agree\', true)"></i>{{/if}}<span class="protocol">同意<span>{{options.protocolName}}</span></span></div>{{/if}}<div class="error-tip error">{{errorContent}}</div><button class="btn-submit{{#if submitDisabled || submitting}} disabled{{/if}}" on-click="submit()" {{#if submitting}}disabled{{/if}}>{{#if submitting}}提交中{{>loader}}{{else}}{{options.submitButtonName}}{{/if}}</button><style>{{style}}</style></div>'});