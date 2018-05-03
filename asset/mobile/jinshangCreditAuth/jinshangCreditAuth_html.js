define("mobile/jinshangCreditAuth/jinshangCreditAuth_html", [], function () { return '<div class="fenqi-body"><div class="header-notice"><i class="icon-check-circle"></i><div class="label"><strong>恭喜，您的分期申请资料已填写完毕</strong></div></div><div class="fenqi-protocol"><div class="title">个人征信业务授权书</div><div><b>【特别提醒】：</b></div><div>为了保障您的合法权益，在您确认签署《个人征信业务授权书》之前，请您务必仔细阅读《个人征信业务授权书》的所有条款，充分理解条款内容，并严格遵守《个人征信业务授权书》。<b>《个人征信业务授权书》以数据电文形式订立，一旦您在线确认个人征信业务授权书，即视为您已充分理解《个人征信业务授权书》所有条款的含义及相应的法律后果，并同意接受所有授权书条款的约束。</b></div><div>《个人征信业务授权书》是您向被授权人做出的单方授权，效力具有独立性，不因《个人消费贷款合同》或其他文件任何条款的无效而无效。<b>即使您的贷款申请未被审核通过，《个人征信业务授权书》各项授权的有效性不受影响。</b></div><div><b>晋商消费金融股份有限公司：</b></div><p>本人特授权贵司在办理下列业务过程中（从业务申请至业务终止），可以通过中国人民银行个人信用信息基础数据库查询、使用、保存本人的信用报告，并同意将本人的身份识别、职业和居住地址等个人基本信息，本人在个人贷款、各类信用卡和对外担保等信用活动中形成的交易记录等个人信贷交易信息及其他相关信息向中国人民银行个人信用信息基础数据库报送：</p><ul class="unstyled"><li>（1）审核贷款申请；</li><li>（2）审核本人作为担保人；</li><li>（3）对已发放的个人信贷进行贷后风险管理；</li><li>（4）受理法人或其他组织作为贷款担保人，需要查询其法定代表人及出资人信用状况；</li><li>（5）特约商户实名审查；</li><li>（6）法定代表人、负责人、高管等资信审查；</li><li>（7）客户准入资格审查；</li><li>（8）异议核查；</li><li>（9）其他贵司认为需要本人信用状况的合法合规的业务。</li></ul><p>若本人与贵司发生任何纠纷或争议，首先应友好协商解决。协商不成的，本人同意将纠纷或争议提交贵司注册地有管辖权的人民法院管辖。本授权书的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。</p><p><b><u>本人声明：本人已仔细阅读上述所有条款，并已特别注意字体加黑的内容。贵司已应本人要求对相关条款予以明确说明。本人对所有条款的含义及相应的法律后果已全部通晓并充分理解，本人自愿作出上述授权、承诺和声明。</u></b></p><div class="footer"><div><div>授权人（签章）：{{customerInfo.custname}}</div><div>身份证号码：{{customerInfo.idno}}</div><div>授权日期：{{formatDate(customerInfo.currentDate)}}</div></div></div></div><div class="fenqi-protocol"><div class="title">晋商消费金融股份有限公司个人消费贷款<br>客户知情及风险告知书</div><div>尊敬的客户：</div><p>您好！欢迎您申请晋商消费金融股份有限公司（下称：“本公司”）个人消费贷款业务。为保证您的权益，现郑重提醒您注意以下事项：</p><p>1.您已同意并授权本公司向中国人民银行个人信用信息基础数据库以及其他经政府有权部门批准合法设立的信息库查询您的个人征信记录、财产、资信等其他相关情况，用于审核您所提交的贷款申请。</p><p>2.您的还款记录将会报送至中国人民银行全国个人征信系统，违约情况将被记入您的征信记录，影响到您今后办理信用卡、房贷、车贷等各类金融业务。</p><ul class="unstyled">3.<li>（1）若为一般类或耐用类消费贷款，如贷款审核通过，您同意授权本公司根据贷款合同的约定将贷款支付至指定账户中（包括但不限于合作商户账户、申请人指定账户、个人授信账户等）。贷款支付当日即为该笔款放款日，并开始按照贷款利率计算利息；</li><li>（2）若为循环授信类贷款，如贷款审核通过，您同意授权本公司对您在贷款额度内的用款申请（包括但不限于取现行为，请款申请等）于您申请成功之日开始按照贷款利率计算利息；</li><li>同时请您确保在申请贷款时已充分了解该笔贷款对应的账户管理费用情况，包括但不限于服务内容，方式、功能、效果、收费标准。</li></ul><p>4.请您在还款日保持还款账户内余额充足，若因余额不足、还款账户状态不正常等原因导致未能按时归还应还未还款项即为贷款逾期，由此产生的逾期滞纳金、罚息及人行征信负面影响将由您个人承担。</p><p>5.贷款生效后，您在消费过程中所发生的任何纠纷，包括您在消费中由商品或服务质量产生的问题，均不影响您的还款义务。您需按时偿还未清偿款项，直到贷款全部结清。</p><p>6.您有义务提供自己的真实资料，并保证诸如电子邮件地址、联系电话、联系地址等内容的有效性、安全性和及时更新，以便本公司为您提供服务并与您进行及时、有效的联系。您应完全独自承担因通过这些联系方式无法与您取得联系而因此遭受的任何损失或增加任何费用等不利后果。</p><p>7.本公司个人消费贷款业务与申请信用卡无任何关系，任何人以申请信用卡、找兼职工作等与您本人个人消费需求无关的理由要求您申请此笔贷款均属诈骗行为，请您坚决回绝。</p><p>8.您已知晓，任何以不真实名义，虚假交易或联合非法中介等骗贷的行为，将会被追究相关法律责任。</p><p>9.请您确认本贷款为您本人自愿办理，本人承诺按时还款，贷款还款账号为本人名下的银行卡。若在办理贷款时还款账号未成功关联，请您于贷款发放后7个工作日内致电本公司客服电话4001685858绑定还款账号，确保正常还款。</p><div><b>郑重提示：请您谨慎衡量您的还款能力，并珍惜您的信用记录，认真履行还款义务！</b></div><div><b><u>申请人一经签署，即表明申请人已清楚知晓上述信息，不会以商品或服务质量或申请人与商户的纠纷等理由拒绝还款。申请人承诺所提供的个人信息均真实有效并自愿承担因贷款逾期所产生的一切后果。</u></b></div><div class="title">贷后服务指南</div><div>贷款业务咨询、绑定/变更还款账号、变更预留信息、办理提前还款等事项请拨打晋商消费金融股份有限公司客服电话4001685858；业务各项收费标准信息以贷款合同为准。</div></div></div><div class="fenqi-footer"><button class="button info fluid" on-click="toConfirm()">同意协议并提交</button></div>'});