import Vue from 'vue'
import Vuex from 'vuex'
import fetchData from "../utils/fetchData";
import { API_GET_LIST } from "../api/service";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    // Authorization: sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : '',
    screenList: []
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      sessionStorage.setItem('Authorization', user.Authorization);
    },
    //保存屏幕列表数据
    initList(state, data) {
      state.screenList = data.screenList
      console.log(state)
    },

  },
  actions: {
    async initList(context) {

      // let res = await fetchData(API_GET_LIST, {}, "get")
      // let data = res.data;
      let data = {
        screenList:
          [
            {
              id: 2,
              title: "AIscreen2",
              index: 2,
              moduleList: [
                {
                  id: 6,
                  title: "业务场景时间轴",
                  width: 74,
                  height: 29,
                  x: 1,
                  y: 1,
                  graphDataList: [
                    {
                      id: 17,
                      dataTypeInfo: {
                        id: 1,
                        dataType: "businessScene",
                        remark: "业务场景统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "BAR",
                        graphDesc: "柱状图"
                      },
                      dataSource: [
                        {
                          name: "累计业务问题",
                          yAxisIndex: 1,
                          verticalName: "business",
                          value: [
                            {
                              id: 1,
                              business: 50,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              business: 100,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              business: 150,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              business: 200,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              business: 250,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计日常问题",
                          yAxisIndex: 0,
                          verticalName: "daily",
                          value: [
                            {
                              id: 1,
                              daily: 2000,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              daily: 10000,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              daily: 20000,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              daily: 40000,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              daily: 60000,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计场景数",
                          verticalName: "scene",
                          yAxisIndex: 1,
                          value: [
                            {
                              id: 1,
                              scene: 1,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              scene: 3,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              scene: 5,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              scene: 7,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              scene: 9,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 22,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "weekStatistics",
                        remark: "一周的统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "LINES",
                        graphDesc: "折线图"
                      },
                      dataSource: [
                        {
                          name: "一周的统计",
                          verticalName: "weekStatistics",
                          value: [
                            {
                              id: 1,
                              weekStatistics: 20000,
                              horizontalAxis: "5G+智能银行"
                            },
                            {
                              id: 2,
                              weekStatistics: 10000,
                              horizontalAxis: "云南政务"
                            },
                            {
                              id: 3,
                              weekStatistics: 30000,
                              horizontalAxis: "惠懂你"
                            },
                            {
                              id: 4,
                              weekStatistics: 50000,
                              horizontalAxis: "安康政务"
                            },
                            {
                              id: 5,
                              weekStatistics: 40000,
                              horizontalAxis: "数字天津"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 23,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "hotQuestionPredict",
                        remark: "热门问题预测"
                      },
                      graph: {
                        id: 6,
                        graphType: "LIST",
                        graphDesc: "列表"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              desc: "转账汇款迟迟未到账怎么办"
                            },
                            {
                              id: 2,
                              desc: "银行卡异地盗刷怎么办"
                            },
                            {
                              id: 3,
                              desc: "如何办理银行卡销户"
                            },
                            {
                              id: 4,
                              desc: "忘记银行卡密码该怎么办"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 4,
                  title: "交易量统计监控",
                  width: 74,
                  height: 38,
                  x: 1,
                  y: 31,
                  graphDataList: [
                    {
                      id: 24,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "platformAbility",
                        remark: "NLP平台能力"
                      },
                      graph: {
                        id: 6,
                        graphType: "NET",
                        graphDesc: "关系图"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              name: "智能应答",
                              children: [
                                {
                                  id: 1,
                                  name: "多轮会话",
                                  children: [
                                    {
                                      id: 1,
                                      name: "SlotFilling"
                                    }
                                  ]
                                },
                                {
                                  id: 2,
                                  name: "智能交易",
                                  children: [
                                    {
                                      id: 2,
                                      name: "BERT"
                                    },
                                    {
                                      id: 3,
                                      name: "CRF"
                                    }
                                  ]
                                },
                                {
                                  id: 7,
                                  name: "意图识别",
                                  children: [
                                    {
                                      id: 4,
                                      name: "BERT"
                                    },
                                    {
                                      id: 5,
                                      name: "CNN"
                                    }
                                  ]
                                },
                                {
                                  id: 8,
                                  name: "上下文关联",
                                  children: [
                                    {
                                      id: 6,
                                      name: "Seq2seq"
                                    }
                                  ]
                                },
                                {
                                  id: 3,
                                  name: "问题推荐"
                                },
                                {
                                  id: 4,
                                  name: "问题联想"
                                },
                                {
                                  id: 5,
                                  name: "业务问答"
                                },
                                {
                                  id: 6,
                                  name: "闲聊问答"
                                }
                              ]
                            }
                          ]
                        },

                      ]
                    }
                  ]
                },
                {
                  id: 5,
                  title: "模型算法监控",
                  width: 74,
                  height: 29,
                  x: 1,
                  y: 70,
                  graphDataList: [
                    {
                      id: 13,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "keywordProperty",
                        remark: "关键词属性"
                      },
                      graph: {
                        id: 6,
                        graphType: "TREE",
                        graphDesc: "树状图"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              name: "信用卡",
                              children: [
                                {
                                  id: 1,
                                  name: "开发",
                                },
                                {
                                  id: 2,
                                  name: "补卡",
                                },
                                {
                                  id: 3,
                                  name: "挂失",
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 15,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "wordcloud",
                        remark: "关检词"
                      },
                      graph: {
                        id: 6,
                        graphType: "WORDCLOUD",
                        graphDesc: "词云"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              name: "5G+智能银行",
                              value: 900
                            },
                            {
                              name: "信用卡挂失",
                              value: 700
                            },
                            {
                              name: "买理财",
                              value: 500
                            },
                            {
                              name: "信用卡补卡",
                              value: 400
                            },
                            {
                              name: "买基金",
                              value: 300
                            },
                            {
                              name: "信用卡开卡",
                              value: 300
                            },
                            {
                              name: "修改密码",
                              value: 100
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 16,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "businessScene",
                        remark: "交易量"
                      },
                      graph: {
                        id: 6,
                        graphType: "PICTORIALBAR",
                        graphDesc: "象形柱状图"
                      },
                      dataSource: [
                        {
                          name: "一周的统计",
                          verticalName: "weekStatistics",
                          value: [
                            {
                              id: 1,
                              weekStatistics: 20000,
                              horizontalAxis: "5G+智能银行"
                            },
                            {
                              id: 2,
                              weekStatistics: 10000,
                              horizontalAxis: "云南政务"
                            },
                            {
                              id: 3,
                              weekStatistics: 30000,
                              horizontalAxis: "惠懂你"
                            },
                            {
                              id: 4,
                              weekStatistics: 50000,
                              horizontalAxis: "安康政务"
                            },
                            {
                              id: 5,
                              weekStatistics: 40000,
                              horizontalAxis: "数字天津"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 7,
                  title: "技术能力时间轴",
                  width: 23,
                  height: 98,
                  x: 76,
                  y: 1,
                  graphDataList: [
                    {
                      id: 14,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "timeline",
                        remark: "技术能力时间轴"
                      },
                      graph: {
                        id: 6,
                        graphType: "TIMELINE",
                        graphDesc: "时间轴"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              timing: "2019-11",
                              event: "全面引入知识图谱技术，与复旦大学肖仰实验室合作联合研发知识图谱先进算法"
                            },
                            {
                              id: 2,
                              timing: "2019-10",
                              event: "完成企业级NLP中台"
                            },
                            {
                              id: 3,
                              timing: "2019-09",
                              event: "与清华大学黄名烈实验室合作，探索情感分析等前沿算法"
                            },
                            {
                              id: 4,
                              timing: "2019-08",
                              event: "引入BERT模型，提升NLP平台能力，发布NLP基础服务接口"
                            },
                            {
                              id: 5,
                              timing: "2019-07",
                              event: "基于模板引擎+AI引擎双引擎构建智能应答平台"
                            },
                            {
                              id: 6,
                              timing: "2019-06",
                              event: "建行人工智能_交互类NLP组件立项"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
            {
              id: 1,
              title: "AIscreen1",
              index: 1,
              moduleList: [
                {
                  id: 1,
                  title: "业务场景时间轴",
                  width: 98,
                  height: 32,
                  x: 1,
                  y: 1,
                  graphDataList: [
                    {
                      id: 1,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "businessScene",
                        remark: "业务场景统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "BAR",
                        graphDesc: "柱状图"
                      },
                      dataSource: [
                        {
                          name: "累计业务问题",
                          yAxisIndex: 1,
                          verticalName: "business",
                          value: [
                            {
                              id: 1,
                              business: 50,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              business: 100,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              business: 150,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              business: 200,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              business: 250,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计日常问题",
                          yAxisIndex: 0,
                          verticalName: "daily",
                          value: [
                            {
                              id: 1,
                              daily: 2000,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              daily: 10000,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              daily: 20000,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              daily: 40000,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              daily: 60000,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计场景数",
                          verticalName: "scene",
                          yAxisIndex: 1,
                          value: [
                            {
                              id: 1,
                              scene: 1,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              scene: 3,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              scene: 5,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              scene: 7,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              scene: 9,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 2,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "weekStatistics",
                        remark: "一周的统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "LINES",
                        graphDesc: "折线图"
                      },
                      dataSource: [
                        {
                          name: "一周的统计",
                          verticalName: "weekStatistics",
                          value: [
                            {
                              id: 1,
                              weekStatistics: 20000,
                              horizontalAxis: "5G+智能银行"
                            },
                            {
                              id: 2,
                              weekStatistics: 10000,
                              horizontalAxis: "云南政务"
                            },
                            {
                              id: 3,
                              weekStatistics: 30000,
                              horizontalAxis: "惠懂你"
                            },
                            {
                              id: 4,
                              weekStatistics: 50000,
                              horizontalAxis: "安康政务"
                            },
                            {
                              id: 5,
                              weekStatistics: 40000,
                              horizontalAxis: "数字天津"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 3,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "hotQuestionPredict",
                        remark: "热门问题预测"
                      },
                      graph: {
                        id: 6,
                        graphType: "LIST",
                        graphDesc: "列表"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              desc: "转账汇款迟迟未到账怎么办"
                            },
                            {
                              id: 2,
                              desc: "银行卡异地盗刷怎么办"
                            },
                            {
                              id: 3,
                              desc: "如何办理银行卡销户"
                            },
                            {
                              id: 4,
                              desc: "忘记银行卡密码该怎么办"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 4,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "platformAbility",
                        remark: "NLP平台能力"
                      },
                      graph: {
                        id: 6,
                        graphType: "NET",
                        graphDesc: "关系图"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              name: "智能应答",
                              children: [
                                {
                                  id: 1,
                                  name: "多轮会话",
                                  children: [
                                    {
                                      id: 1,
                                      name: "SlotFilling"
                                    }
                                  ]
                                },
                                {
                                  id: 2,
                                  name: "智能交易",
                                  children: [
                                    {
                                      id: 2,
                                      name: "BERT"
                                    },
                                    {
                                      id: 3,
                                      name: "CRF"
                                    }
                                  ]
                                },
                                {
                                  id: 7,
                                  name: "意图识别",
                                  children: [
                                    {
                                      id: 4,
                                      name: "BERT"
                                    },
                                    {
                                      id: 5,
                                      name: "CNN"
                                    }
                                  ]
                                },
                                {
                                  id: 8,
                                  name: "上下文关联",
                                  children: [
                                    {
                                      id: 6,
                                      name: "Seq2seq"
                                    }
                                  ]
                                },
                                {
                                  id: 3,
                                  name: "问题推荐"
                                },
                                {
                                  id: 4,
                                  name: "问题联想"
                                },
                                {
                                  id: 5,
                                  name: "业务问答"
                                },
                                {
                                  id: 6,
                                  name: "闲聊问答"
                                }
                              ]
                            }
                          ]
                        },

                      ]
                    }
                  ]
                },
                {
                  id: 2,
                  title: "业务场景时间轴",
                  width: 98,
                  height: 32,
                  x: 1,
                  y: 34,
                  graphDataList: [
                    {
                      id: 5,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "businessScene",
                        remark: "业务场景统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "BAR",
                        graphDesc: "柱状图"
                      },
                      dataSource: [
                        {
                          name: "累计业务问题",
                          yAxisIndex: 1,
                          verticalName: "business",
                          value: [
                            {
                              id: 1,
                              business: 50,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              business: 100,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              business: 150,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              business: 200,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              business: 250,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计日常问题",
                          yAxisIndex: 0,
                          verticalName: "daily",
                          value: [
                            {
                              id: 1,
                              daily: 2000,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              daily: 10000,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              daily: 20000,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              daily: 40000,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              daily: 60000,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计场景数",
                          verticalName: "scene",
                          yAxisIndex: 1,
                          value: [
                            {
                              id: 1,
                              scene: 1,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              scene: 3,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              scene: 5,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              scene: 7,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              scene: 9,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
                {
                  id: 3,
                  title: "算力实时监控",
                  width: 98,
                  height: 32,
                  x: 1,
                  y: 67,
                  graphDataList: [
                    {
                      id: 9,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "businessScene",
                        remark: "业务场景统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "BAR",
                        graphDesc: "柱状图"
                      },
                      dataSource: [
                        {
                          name: "累计业务问题",
                          yAxisIndex: 1,
                          verticalName: "business",
                          value: [
                            {
                              id: 1,
                              business: 50,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              business: 100,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              business: 150,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              business: 200,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              business: 250,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计日常问题",
                          yAxisIndex: 0,
                          verticalName: "daily",
                          value: [
                            {
                              id: 1,
                              daily: 2000,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              daily: 10000,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              daily: 20000,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              daily: 40000,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              daily: 60000,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计场景数",
                          verticalName: "scene",
                          yAxisIndex: 1,
                          value: [
                            {
                              id: 1,
                              scene: 1,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              scene: 3,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              scene: 5,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              scene: 7,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              scene: 9,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 10,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "weekStatistics",
                        remark: "一周的统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "LINES",
                        graphDesc: "折线图"
                      },
                      dataSource: [
                        {
                          name: "一周的统计",
                          verticalName: "weekStatistics",
                          value: [
                            {
                              id: 1,
                              weekStatistics: 20000,
                              horizontalAxis: "5G+智能银行"
                            },
                            {
                              id: 2,
                              weekStatistics: 10000,
                              horizontalAxis: "云南政务"
                            },
                            {
                              id: 3,
                              weekStatistics: 30000,
                              horizontalAxis: "惠懂你"
                            },
                            {
                              id: 4,
                              weekStatistics: 50000,
                              horizontalAxis: "安康政务"
                            },
                            {
                              id: 5,
                              weekStatistics: 40000,
                              horizontalAxis: "数字天津"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 11,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "hotQuestionPredict",
                        remark: "热门问题预测"
                      },
                      graph: {
                        id: 6,
                        graphType: "LIST",
                        graphDesc: "列表"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              desc: "转账汇款迟迟未到账怎么办"
                            },
                            {
                              id: 2,
                              desc: "银行卡异地盗刷怎么办"
                            },
                            {
                              id: 3,
                              desc: "如何办理银行卡销户"
                            },
                            {
                              id: 4,
                              desc: "忘记银行卡密码该怎么办"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 12,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "platformAbility",
                        remark: "NLP平台能力"
                      },
                      graph: {
                        id: 6,
                        graphType: "NET",
                        graphDesc: "关系图"
                      },
                      dataSource: [
                        {
                          value: [
                            {
                              id: 1,
                              name: "智能应答",
                              children: [
                                {
                                  id: 1,
                                  name: "多轮会话",
                                  children: [
                                    {
                                      id: 1,
                                      name: "SlotFilling"
                                    }
                                  ]
                                },
                                {
                                  id: 2,
                                  name: "智能交易",
                                  children: [
                                    {
                                      id: 2,
                                      name: "BERT"
                                    },
                                    {
                                      id: 3,
                                      name: "CRF"
                                    }
                                  ]
                                },
                                {
                                  id: 7,
                                  name: "意图识别",
                                  children: [
                                    {
                                      id: 4,
                                      name: "BERT"
                                    },
                                    {
                                      id: 5,
                                      name: "CNN"
                                    }
                                  ]
                                },
                                {
                                  id: 8,
                                  name: "上下文关联",
                                  children: [
                                    {
                                      id: 6,
                                      name: "Seq2seq"
                                    }
                                  ]
                                },
                                {
                                  id: 3,
                                  name: "问题推荐"
                                },
                                {
                                  id: 4,
                                  name: "问题联想"
                                },
                                {
                                  id: 5,
                                  name: "业务问答"
                                },
                                {
                                  id: 6,
                                  name: "闲聊问答"
                                }
                              ]
                            }
                          ]
                        },

                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 3,
              title: "AIscreen3",
              index: 3,
              moduleList: [
                {
                  id: 1,
                  title: "业务场景时间轴",
                  width: 74,
                  height: 29,
                  x: 1,
                  y: 1,
                  graphDataList: [
                    {
                      id: 1,
                      dataTypeInfo: {
                        id: 11,
                        dataType: "businessScene",
                        remark: "业务场景统计"
                      },
                      graph: {
                        id: 6,
                        graphType: "BAR",
                        graphDesc: "柱状图"
                      },
                      dataSource: [
                        {
                          name: "累计业务问题",
                          yAxisIndex: 1,
                          verticalName: "business",
                          value: [
                            {
                              id: 1,
                              business: 50,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              business: 100,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              business: 150,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              business: 200,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              business: 250,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计日常问题",
                          yAxisIndex: 0,
                          verticalName: "daily",
                          value: [
                            {
                              id: 1,
                              daily: 2000,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              daily: 10000,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              daily: 20000,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              daily: 40000,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              daily: 60000,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        },
                        {
                          name: "累计场景数",
                          verticalName: "scene",
                          yAxisIndex: 1,
                          value: [
                            {
                              id: 1,
                              scene: 1,
                              horizontalAxis: "2019-06"
                            },
                            {
                              id: 2,
                              scene: 3,
                              horizontalAxis: "2019-07"
                            },
                            {
                              id: 3,
                              scene: 5,
                              horizontalAxis: "2019-08"
                            },
                            {
                              id: 4,
                              scene: 7,
                              horizontalAxis: "2019-09"
                            },
                            {
                              id: 5,
                              scene: 9,
                              horizontalAxis: "2019-10"
                            }
                          ]
                        }
                      ]
                    },
                  ]
                },
                // {
                //   id: 2,
                //   title: "业务场景时间轴2",

                //   graphDataList: [
                //     {
                //       id: 10,
                //       dataTypeInfo: {
                //         id: 11,
                //         dataType: "weekStatistics",
                //         remark: "一周的统计"
                //       },
                //       graph: {
                //         id: 6,
                //         graphType: "LINES",
                //         graphDesc: "折线图"
                //       },
                //       dataSource: [
                //         {
                //           name: "一周的统计",
                //           verticalName: "weekStatistics",
                //           value: [
                //             {
                //               id: 1,
                //               weekStatistics: 20000,
                //               horizontalAxis: "5G+智能银行"
                //             },
                //             {
                //               id: 2,
                //               weekStatistics: 10000,
                //               horizontalAxis: "云南政务"
                //             },
                //             {
                //               id: 3,
                //               weekStatistics: 30000,
                //               horizontalAxis: "惠懂你"
                //             },
                //             {
                //               id: 4,
                //               weekStatistics: 50000,
                //               horizontalAxis: "安康政务"
                //             },
                //             {
                //               id: 5,
                //               weekStatistics: 40000,
                //               horizontalAxis: "数字天津"
                //             }
                //           ]
                //         }
                //       ]
                //     },
                //   ]
                // }
              ]
            },

          ]
      }

      context.commit('initList', data)
    }
  },

})
