import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/chartgroup',
  //   name: 'chartgroup',
  //   component: () => import('../views/ChartGroup.vue'),
  // },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo.vue'),
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('../views/Screen.vue'),
  },
  {
    path: '/screenone',
    name: 'screenone',
    component: () => import('../views/ScreenOne.vue'),
  },
  {
    path: '/screentwo',
    name: 'screentwo',
    component: () => import('../views/ScreenTwo.vue'),
  },
  {
    path: '/screentree',
    name: 'screentree',
    component: () => import('../views/ScreenTree.vue'),
  },
  {
    path: '/drag',
    name: 'drag',
    component: () => import('../views/Drag.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Index.vue'),
    children: [
      //NLP预测服务

      //基础能力
      //词向量
      // { path: '/wordembeddings', name:'wordembeddings', component: () => import('../views/modules/predictservice/baseability/WordEmbeddings.vue'), meta: { title: '词向量' } },
      // // 语法句法分析
      // { path: '/lexical', name:'lexical', component: () => import('../views/modules/predictservice/baseability/Lexical.vue'), meta: { title: '语法语句分析' } },
      // //词袋模型——tf-idf
      // { path: '/tfidf', name:'tfidf', component: () => import('../views/modules/predictservice/baseability/wordbagmodel/Tfidf.vue'), meta: { title: 'tf-idf' } },

      // //信息抽取
      // // 命名实体识别——ner_by_rule_all
      // { path: '/nerbyruleall', name:'nerbyruleall', component: () => import('../views/modules/predictservice/infoextract/namedentity/NerByRuleAll.vue'), meta: { title: 'ner_by_rule_all' } },
      // // 命名实体识别——ner_by_rule_custom
      // { path: '/nerbyrulecustom', name:'nerbyrulecustom', component: () => import('../views/modules/predictservice/infoextract/namedentity/NerByRuleCustom.vue'), meta: { title: 'ner_by_rule_custom' } },
      // // 命名实体识别——ner_by_rule_service
      // { path: '/nerbyruleservice', name:'nerbyruleservice', component: () => import('../views/modules/predictservice/infoextract/namedentity/NerByRuleService.vue'), meta: { title: 'ner_by_rule_service' } },
      // // 命名实体识别——ner_by_model
      // { path: '/modelall', name:'modelall', component: () => import('../views/modules/predictservice/infoextract/namedentity/ModelAll.vue'), meta: { title: 'model_all' } },
      // //关系抽取
      // { path: '/relationextract', name:'relationextract', component: () => import('../views/modules/predictservice/infoextract/RelationExtract.vue'), meta: { title: 'relationExtract' } },
      // // 关键字抽取
      // { path: '/keywordextract', name:'keywordextract', component: () => import('../views/modules/predictservice/infoextract/KeyWordExtract.vue'), meta: { title: '关键字抽取' } },
      // // 摘要抽取
      // { path: '/summaryextract', name:'summaryextract', component: () => import('../views/modules/predictservice/infoextract/SummaryExtract.vue'), meta: { title: '摘要抽取' } },
      // // 摘要生成
      // { path: '/summaryproduct', name:'summaryproduct', component: () => import('../views/modules/predictservice/infoextract/SummaryProduct.vue'), meta: { title: '摘要生成' } },
      // // 序列分类
      // { path: '/sequenceclassification', name:'sequenceclassification', component: () => import('../views/modules/predictservice/infoextract/SequenceClassification.vue'), meta: { title: '序列分类' } },

      // // 语义分析
      // // 文本分类
      // { path: '/textclassification', name:'textclassification', component: () => import('../views/modules/predictservice/semanticanalysis/TextClassification.vue'), meta: { title: '文本分类预测' } },
      // // 文本相似度
      // { path: '/textsimilarity', name:'textsimilarity', component: () => import('../views/modules/predictservice/semanticanalysis/TextSimilarity.vue'), meta: { title: '文本相似度' } },
      // // 填槽意图联合模型
      // { path: '/intentslotjointmodel', name:'intentslotjointmodel', component: () => import('../views/modules/predictservice/semanticanalysis/IntentSlotJointModel.vue'), meta: { title: '填槽意图联合模型' } },



      // // NLP模型训练

      // //基础训练
      // //文本分类训练
      // {path: '/textclassficationtraining', name:'textclassficationtraining', component: () => import('../views/modules/modeltraining/basetraining/TextClassficationTraining.vue'), meta: { title: '文本分类训练' }},
      // // 命名实体识别训练
      // {path: '/namedentitytraining', name:'namedentitytraining', component: () => import('../views/modules/modeltraining/basetraining/NamedEntityTraining.vue'), meta: { title: '命名实体识别训练' }},
      // // 词袋模型训练
      // {path: '/tfidftraining',name:'tfidftraining', component: () => import('../views/modules/modeltraining/basetraining/TfidfTraining.vue'), meta: { title: '词袋模型训练' }},
      // // 关系抽取训练
      // {path: '/relationextracttraining',name:'relationextracttraining', component: () => import('../views/modules/modeltraining/basetraining/RelationExtractTraining.vue'), meta: { title: '关系抽取训练' }},
      // // 文本相似度训练
      // {path: '/textsimilaritytraining',name:'relationextracttraining', component: () => import('../views/modules/modeltraining/basetraining/TextSimilarityTraining.vue'), meta: { title: '文本相似度训练' }},


      //NLP配置管理
      //关键词意图
      // 租户渠道意图管理
      // 模型分类管理
      // 模型导航管理
      // 配置信息管理
      // 关键词参数管理
      // 规则识别管理
      // 转发服务管理
      // 请求入口管理
      // 标签信息管理
      // 标签分组管理
      // 词表信息管理
      // 超参数信息管理
      // 模型信息管理
      // 模型信息加载管理
      // 算法信息管理
      // 算法领域管理
      // 实例信息管理
      // 主机信息管理
      // 预处理方法管理
      // 预处理场景管理
      // 预处理场景与方法对应管理



      //其它
      // 句向量
      // 文本对有监督学习
      // corpus_update
      // keyword_update
      // pair_similarity

      //用户管理
      // 用户管理
      // {path: '/usermanage', name:'usermanage', component: () => import('../views/modules/systermmanage/UserManage.vue'),meta: { title: '用户管理' }},
      // // 角色管理
      // {path: '/rolemanage', name:'rolemanage', component: () => import('../views/modules/systermmanage/Rolemanage.vue'), meta: { title: '角色管理' }},


      // {
      //   path: '/predict',
      //   component: resolve => require(['../components/page/predict.vue'], resolve),
      //   meta: { title: '实体识别' }
      // }
      // ,
      // 
      // {
      //   path: '/relationExtract',
      //   component: resolve => require(['../components/page/relation_extraction/relationExtract.vue'], resolve),
      //   meta: { title: 'relationExtract' }
      // }
      // ,
      // 
      // {
      //   path: '/textSimilar',
      //   component: resolve => require(['../components/page/textSimilar.vue'], resolve),
      //   meta: { title: '文本相似度' }
      // }
      // ,
      // {
      //   path: '/dailyChat',
      //   component: resolve => require(['../components/page/dailyChat.vue'], resolve),
      //   meta: { title: '日常聊天' }
      // }
      // ,
      // {
      //   path: '/QABusiness',
      //   component: resolve => require(['../components/page/QABusiness.vue'], resolve),
      //   meta: { title: 'QA业务问答' }
      // },
      // {
      //   path: '/doronSession',
      //   component: resolve => require(['../components/page/doronSession.vue'], resolve),
      //   meta: { title: '多轮会话' }
      // },
      // {
      //   path: '/training',
      //   component: resolve => require(['../components/page/named_entity/training.vue'], resolve),
      //   meta: { title: '命名实体识别训练' }
      // }
      // ,





      // {
      //   path: '/textClassTraining',
      //   component: resolve => require(['../components/page/text_class/textClassTraining'], resolve),
      //   meta: { title: '文本分类训练' }
      // },
      // {
      //   path: '/word_segment',
      //   component: resolve => require(['../components/page/word_segment/wordSegment'], resolve),
      //   meta: { title: '分词服务' }
      // },


      // {
      //   path: '/tfidf_train',
      //   component: resolve => require(['../components/page/bow/tfidf_train'], resolve),
      //   meta: { title: '词袋模型训练' }
      // }, {
      //   path: '/tf-idf',
      //   component: resolve => require(['../components/page/bow/tf-idf'], resolve),
      //   meta: { title: 'tf-idf' }
      // }, {
      //   path: '/term_freq_training',
      //   component: resolve => require(['../components/page/bow/term_freq_training'], resolve),
      //   meta: { title: 'term_freq_training' }
      // }, {
      //   path: '/term_freq',
      //   component: resolve => require(['../components/page/bow/term_freq'], resolve),
      //   meta: { title: 'term_freq' }
      // },
      // {
      //   path: '/weighted_embeddings',
      //   component: resolve => require(['../components/page/sentence_embeddings/weighted_embeddings'], resolve),
      //   meta: { title: '句向量' }
      // }, {
      //   path: '/supervised_embedding',
      //   component: resolve => require(['../components/page/supervised_embedding/supervised_embedding'], resolve),
      //   meta: { title: '文本对有监督学习' }
      // },
      // {
      //   path: '/keywordIntentManage',
      //   component: resolve => require(['../components/page/pjf/keywordIntent_manage/keywordIntentManage'], resolve),
      //   meta: { title: '关键词意图' }
      // },
      // {
      //   path: '/chnlDomainManage',
      //   component: resolve => require(['../components/page/pjf/chnlDomain_manage/chnlDomainManage'], resolve),
      //   meta: { title: '租户渠道意图管理' }
      // },
      // {
      //   path: '/classifyModelManage',
      //   component: resolve => require(['../components/page/pjf/classifyModel_manage/classifyModelManage'], resolve),
      //   meta: { title: '模型分类管理' }
      // },
      // {
      //   path: '/navigateModelManage',
      //   component: resolve => require(['../components/page/pjf/navigateModel_manage/navigateModelManage'], resolve),
      //   meta: { title: '模型导航管理' }
      // },
      // {
      //   path: '/configInfoManage',
      //   component: resolve => require(['../components/page/pjf/config_info_manage/configInfoManage'], resolve),
      //   meta: { title: '配置信息管理' }
      // },
      // {
      //   path: '/kvParamManage',
      //   component: resolve => require(['../components/page/pjf/kvParam_manage/kvParamManage'], resolve),
      //   meta: { title: '关键词参数管理' }
      // },
      // {
      //   path: '/localExecInfoManage',
      //   component: resolve => require(['../components/page/pjf/localExecInfo_manage/localExecInfoManage'], resolve),
      //   meta: { title: '规则识别管理' }
      // },
      // {
      //   path: '/restServiceInfoManage',
      //   component: resolve => require(['../components/page/pjf/restServiceInfo_manage/restServiceInfoManage'], resolve),
      //   meta: { title: '转发服务管理' }
      // },
      // {
      //   path: '/serviceInfoManage',
      //   component: resolve => require(['../components/page/pjf/serviceInfo_manage/serviceInfoManage'], resolve),
      //   meta: { title: '请求入口管理' }
      // },
      // {
      //   path: '/labelInfoManage',
      //   component: resolve => require(['../components/page/pjf/label_info_manage/labelInfoManage'], resolve),
      //   meta: { title: '标签信息管理' }
      // },
      // {
      //   path: '/labelGroupManage',
      //   component: resolve => require(['../components/page/pjf/label_group_manage/labelGroupManage'], resolve),
      //   meta: { title: '标签分组管理' }
      // },
      // {
      //   path: '/vocabInfoManage',
      //   component: resolve => require(['../components/page/pjf/vocab_info_manage/vocabInfoManage'], resolve),
      //   meta: { title: '词表信息管理' }
      // },
      // {
      //   path: '/hyperParamManage',
      //   component: resolve => require(['../components/page/pjf/hyper_param_manage/hyperParamManage'], resolve),
      //   meta: { title: '超参数信息管理' }
      // },
      // {
      //   path: '/modelInfoManage',
      //   component: resolve => require(['../components/page/pjf/model_info_manage/modelInfoManage'], resolve),
      //   meta: { title: '模型信息管理' }
      // },
      // {
      //   path: '/modelResManage',
      //   component: resolve => require(['../components/page/pjf/model_res_manage/modelResManage'], resolve),
      //   meta: { title: '模型信息加载管理' }
      // },
      // {
      //   path: '/algorithmInfoManage',
      //   component: resolve => require(['../components/page/pjf/algorithm_manage/algorithmManage'], resolve),
      //   meta: { title: '算法信息管理' }
      // },
      // {
      //   path: '/algorithmDomainManage',
      //   component: resolve => require(['../components/page/pjf/algorithm_domain_manage/algorithmDomainManage'], resolve),
      //   meta: { title: '算法领域管理' }
      // },
      // {
      //   path: '/instanceManage',
      //   component: resolve => require(['../components/page/pjf/nlp_instance_manage/instanceManage'], resolve),
      //   meta: { title: '实例信息管理' }
      // },
      // {
      //   path: '/machineManage',
      //   component: resolve => require(['../components/page/pjf/nlp_machine_manage/machineManage'], resolve),
      //   meta: { title: '主机信息管理' }
      // },
      // {
      //   path: '/prepFuncManage',
      //   component: resolve => require(['../components/page/pjf/nlp_prep_manage/prepFuncManage'], resolve),
      //   meta: { title: '预处理方法管理' }
      // },
      // {
      //   path: '/prepGroupManage',
      //   component: resolve => require(['../components/page/pjf/nlp_prep_manage/prepGroupManage'], resolve),
      //   meta: { title: '预处理场景管理' }
      // },
      // {
      //   path: '/prepRelationManage',
      //   component: resolve => require(['../components/page/pjf/nlp_prep_manage/prepRelationManage'], resolve),
      //   meta: { title: '预处理场景与方法对应管理' }
      // },

      // {
      //   path: '/corpus_update',
      //   component: resolve => require(['../components/page/corpus_update/corpus_update'], resolve),
      //   meta: { title: 'corpus_update' }
      // },
      // {
      //   path: '/keyword_update',
      //   component: resolve => require(['../components/page/keyword_update/keyword_update'], resolve),
      //   meta: { title: 'keyword_update' }
      // },
      // {
      //   path: '/pair_similarity',
      //   component: resolve => require(['../components/page/pair_similarity/pair_similarity'], resolve),
      //   meta: { title: 'pair_similarity' }
      // }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
