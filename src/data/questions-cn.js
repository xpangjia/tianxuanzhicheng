const allQuestions = [
  // ===== 核心题 Q1-Q5（极简版使用）=====
  {
    id: 1,
    text: '周末到了，你最想怎么度过？',
    options: [
      {
        id: 'a',
        text: '去美术馆看展，再找个咖啡馆坐坐',
        traits: { artistic: 5, social: 1, adventure: 1, career: 1, nature: 2, food: 2, freedom: 3, culture: 4 }
      },
      {
        id: 'b',
        text: '约上朋友去新开的网红店打卡',
        traits: { artistic: 2, social: 5, adventure: 2, career: 1, nature: 1, food: 4, freedom: 2, culture: 2 }
      },
      {
        id: 'c',
        text: '背上包去周边徒步或者露营',
        traits: { artistic: 1, social: 2, adventure: 5, career: 1, nature: 5, food: 1, freedom: 4, culture: 1 }
      },
      {
        id: 'd',
        text: '在家学个新技能，提升一下自己',
        traits: { artistic: 2, social: 1, adventure: 1, career: 5, nature: 1, food: 1, freedom: 2, culture: 3 }
      }
    ]
  },
  {
    id: 2,
    text: '你更喜欢哪种生活节奏？',
    options: [
      {
        id: 'a',
        text: '快节奏，每天充实到飞起才有安全感',
        traits: { artistic: 1, social: 3, adventure: 3, career: 5, nature: 1, food: 2, freedom: 1, culture: 2 }
      },
      {
        id: 'b',
        text: '慢悠悠的，喝茶晒太阳就是最好的生活',
        traits: { artistic: 3, social: 2, adventure: 1, career: 1, nature: 4, food: 3, freedom: 5, culture: 3 }
      },
      {
        id: 'c',
        text: '工作日冲刺，周末彻底躺平',
        traits: { artistic: 2, social: 2, adventure: 2, career: 3, nature: 2, food: 3, freedom: 3, culture: 2 }
      },
      {
        id: 'd',
        text: '随心所欲，不想被任何节奏绑定',
        traits: { artistic: 3, social: 2, adventure: 4, career: 1, nature: 3, food: 2, freedom: 5, culture: 2 }
      }
    ]
  },
  {
    id: 3,
    text: '关于吃这件事，你的态度是？',
    options: [
      {
        id: 'a',
        text: '无辣不欢！越辣越爽越过瘾',
        traits: { artistic: 1, social: 3, adventure: 4, career: 1, nature: 1, food: 5, freedom: 3, culture: 2 }
      },
      {
        id: 'b',
        text: '追求精致摆盘和仪式感，吃的是格调',
        traits: { artistic: 5, social: 2, adventure: 1, career: 2, nature: 1, food: 3, freedom: 2, culture: 4 }
      },
      {
        id: 'c',
        text: '街边小摊才是灵魂，烟火气最重要',
        traits: { artistic: 1, social: 3, adventure: 2, career: 1, nature: 2, food: 5, freedom: 3, culture: 3 }
      },
      {
        id: 'd',
        text: '养生派，吃得健康比什么都重要',
        traits: { artistic: 2, social: 1, adventure: 1, career: 2, nature: 4, food: 2, freedom: 2, culture: 2 }
      }
    ]
  },
  {
    id: 4,
    text: '你的社交风格更像？',
    options: [
      {
        id: 'a',
        text: '社牛本牛，走哪都能交到朋友',
        traits: { artistic: 1, social: 5, adventure: 3, career: 2, nature: 1, food: 3, freedom: 3, culture: 2 }
      },
      {
        id: 'b',
        text: '小圈子就好，三五知己足矣',
        traits: { artistic: 3, social: 2, adventure: 1, career: 2, nature: 3, food: 2, freedom: 3, culture: 3 }
      },
      {
        id: 'c',
        text: '线上冲浪达人，面基就免了吧',
        traits: { artistic: 2, social: 2, adventure: 1, career: 3, nature: 1, food: 1, freedom: 3, culture: 2 }
      },
      {
        id: 'd',
        text: '享受独处，一个人也能过得很精彩',
        traits: { artistic: 4, social: 1, adventure: 2, career: 2, nature: 4, food: 1, freedom: 5, culture: 3 }
      }
    ]
  },
  {
    id: 5,
    text: '哪种风景最能打动你？',
    options: [
      {
        id: 'a',
        text: '雪山草原，壮阔到让人说不出话',
        traits: { artistic: 2, social: 1, adventure: 5, career: 1, nature: 5, food: 1, freedom: 5, culture: 1 }
      },
      {
        id: 'b',
        text: '小桥流水，古镇青石板路上的慢时光',
        traits: { artistic: 5, social: 1, adventure: 1, career: 1, nature: 3, food: 2, freedom: 3, culture: 5 }
      },
      {
        id: 'c',
        text: '灯火璀璨的城市天际线，越繁华越心动',
        traits: { artistic: 2, social: 3, adventure: 2, career: 5, nature: 1, food: 2, freedom: 1, culture: 3 }
      },
      {
        id: 'd',
        text: '海边日落，听着浪声什么都不想',
        traits: { artistic: 3, social: 1, adventure: 2, career: 1, nature: 5, food: 1, freedom: 4, culture: 2 }
      }
    ]
  },

  // ===== 延伸题 Q6-Q10（简单版包含）=====
  {
    id: 6,
    text: '理想的居住环境是？',
    options: [
      {
        id: 'a',
        text: '市中心高层公寓，推窗就是繁华',
        traits: { artistic: 2, social: 4, adventure: 2, career: 5, nature: 1, food: 3, freedom: 1, culture: 3 }
      },
      {
        id: 'b',
        text: '老城区的独栋小院，有花有草有猫',
        traits: { artistic: 5, social: 2, adventure: 1, career: 1, nature: 4, food: 2, freedom: 3, culture: 4 }
      },
      {
        id: 'c',
        text: '海边或湖边，每天推门见水',
        traits: { artistic: 3, social: 1, adventure: 3, career: 1, nature: 5, food: 2, freedom: 4, culture: 2 }
      },
      {
        id: 'd',
        text: '新城区精装房，配套齐全最省心',
        traits: { artistic: 1, social: 3, adventure: 1, career: 3, nature: 2, food: 3, freedom: 2, culture: 2 }
      }
    ]
  },
  {
    id: 7,
    text: '工作中你最看重什么？',
    options: [
      {
        id: 'a',
        text: '发展空间大，能实现人生价值',
        traits: { artistic: 1, social: 2, adventure: 3, career: 5, nature: 1, food: 1, freedom: 2, culture: 2 }
      },
      {
        id: 'b',
        text: '工作和生活能平衡，不想被卷死',
        traits: { artistic: 3, social: 2, adventure: 1, career: 2, nature: 3, food: 3, freedom: 5, culture: 3 }
      },
      {
        id: 'c',
        text: '团队氛围好，同事都很nice',
        traits: { artistic: 2, social: 5, adventure: 1, career: 2, nature: 2, food: 2, freedom: 2, culture: 2 }
      },
      {
        id: 'd',
        text: '能做自己热爱的事，钱不是第一位',
        traits: { artistic: 5, social: 1, adventure: 3, career: 1, nature: 3, food: 1, freedom: 4, culture: 4 }
      }
    ]
  },
  {
    id: 8,
    text: '你觉得一座城市最重要的是什么？',
    options: [
      {
        id: 'a',
        text: '机会多，能让人不断成长和突破',
        traits: { artistic: 1, social: 3, adventure: 3, career: 5, nature: 1, food: 2, freedom: 2, culture: 3 }
      },
      {
        id: 'b',
        text: '有文化底蕴，走到哪都有故事',
        traits: { artistic: 4, social: 2, adventure: 1, career: 1, nature: 2, food: 2, freedom: 3, culture: 5 }
      },
      {
        id: 'c',
        text: '好吃的多，生活成本别太离谱',
        traits: { artistic: 1, social: 3, adventure: 2, career: 2, nature: 2, food: 5, freedom: 3, culture: 2 }
      },
      {
        id: 'd',
        text: '气候宜人，生态环境好才是王道',
        traits: { artistic: 2, social: 1, adventure: 2, career: 1, nature: 5, food: 2, freedom: 4, culture: 2 }
      }
    ]
  },
  {
    id: 9,
    text: '你的旅行风格是？',
    options: [
      {
        id: 'a',
        text: '做攻略狂魔，每个景点都不能错过',
        traits: { artistic: 3, social: 2, adventure: 3, career: 3, nature: 2, food: 3, freedom: 1, culture: 4 }
      },
      {
        id: 'b',
        text: '随便走走，迷路也是一种风景',
        traits: { artistic: 3, social: 2, adventure: 4, career: 1, nature: 3, food: 2, freedom: 5, culture: 3 }
      },
      {
        id: 'c',
        text: '找个地方住下来，像当地人一样生活',
        traits: { artistic: 4, social: 2, adventure: 2, career: 1, nature: 3, food: 4, freedom: 4, culture: 4 }
      },
      {
        id: 'd',
        text: '主打一个吃，旅行就是吃遍当地美食',
        traits: { artistic: 1, social: 3, adventure: 2, career: 1, nature: 1, food: 5, freedom: 3, culture: 3 }
      }
    ]
  },
  {
    id: 10,
    text: '你的消费观更接近？',
    options: [
      {
        id: 'a',
        text: '该省省该花花，但品质不能将就',
        traits: { artistic: 3, social: 2, adventure: 1, career: 3, nature: 2, food: 3, freedom: 2, culture: 3 }
      },
      {
        id: 'b',
        text: '体验大于一切，愿意为快乐买单',
        traits: { artistic: 3, social: 3, adventure: 4, career: 1, nature: 3, food: 3, freedom: 4, culture: 2 }
      },
      {
        id: 'c',
        text: '精打细算过日子，存钱才有安全感',
        traits: { artistic: 1, social: 2, adventure: 1, career: 3, nature: 2, food: 2, freedom: 2, culture: 2 }
      },
      {
        id: 'd',
        text: '不太在意钱，开心就好',
        traits: { artistic: 2, social: 3, adventure: 3, career: 1, nature: 3, food: 3, freedom: 5, culture: 1 }
      }
    ]
  },

  // ===== 深度题 Q11-Q18（复杂版包含）=====
  {
    id: 11,
    text: '你的朋友圈画风是？',
    options: [
      {
        id: 'a',
        text: '精修九宫格，配文都要斟酌半天',
        traits: { artistic: 5, social: 3, adventure: 1, career: 2, nature: 2, food: 2, freedom: 2, culture: 4 }
      },
      {
        id: 'b',
        text: '记录日常碎片，想发就发不纠结',
        traits: { artistic: 2, social: 3, adventure: 2, career: 1, nature: 2, food: 3, freedom: 4, culture: 2 }
      },
      {
        id: 'c',
        text: '主要转发和点赞，自己很少发',
        traits: { artistic: 2, social: 2, adventure: 1, career: 3, nature: 2, food: 1, freedom: 2, culture: 3 }
      },
      {
        id: 'd',
        text: '朋友圈已关闭，请私聊',
        traits: { artistic: 3, social: 1, adventure: 2, career: 2, nature: 3, food: 1, freedom: 5, culture: 2 }
      }
    ]
  },
  {
    id: 12,
    text: '最能代表你的音乐类型是？',
    options: [
      {
        id: 'a',
        text: '民谣/独立音乐，小众才有品味',
        traits: { artistic: 5, social: 1, adventure: 2, career: 1, nature: 4, food: 1, freedom: 4, culture: 4 }
      },
      {
        id: 'b',
        text: '流行/电子，蹦迪的时候最快乐',
        traits: { artistic: 2, social: 5, adventure: 3, career: 2, nature: 1, food: 2, freedom: 3, culture: 1 }
      },
      {
        id: 'c',
        text: '古典/爵士，优雅是一种生活态度',
        traits: { artistic: 5, social: 2, adventure: 1, career: 2, nature: 2, food: 2, freedom: 2, culture: 5 }
      },
      {
        id: 'd',
        text: '说唱/摇滚，要的就是态度和自由',
        traits: { artistic: 2, social: 3, adventure: 4, career: 2, nature: 1, food: 1, freedom: 5, culture: 2 }
      }
    ]
  },
  {
    id: 13,
    text: '理想的约会方式是？',
    options: [
      {
        id: 'a',
        text: '一起逛博物馆或者看话剧',
        traits: { artistic: 5, social: 2, adventure: 1, career: 1, nature: 2, food: 1, freedom: 2, culture: 5 }
      },
      {
        id: 'b',
        text: '找个氛围感餐厅，吃顿好的',
        traits: { artistic: 3, social: 3, adventure: 1, career: 2, nature: 1, food: 5, freedom: 2, culture: 3 }
      },
      {
        id: 'c',
        text: '一起去户外运动，骑行/爬山/冲浪',
        traits: { artistic: 1, social: 3, adventure: 5, career: 1, nature: 5, food: 1, freedom: 4, culture: 1 }
      },
      {
        id: 'd',
        text: '在家窝着看电影，点个外卖就很好',
        traits: { artistic: 2, social: 1, adventure: 1, career: 1, nature: 2, food: 3, freedom: 4, culture: 2 }
      }
    ]
  },
  {
    id: 14,
    text: '面对压力你会怎么做？',
    options: [
      {
        id: 'a',
        text: '化压力为动力，卷起来就完了',
        traits: { artistic: 1, social: 2, adventure: 3, career: 5, nature: 1, food: 1, freedom: 1, culture: 2 }
      },
      {
        id: 'b',
        text: '找朋友倾诉，说出来就好了一半',
        traits: { artistic: 2, social: 5, adventure: 1, career: 2, nature: 1, food: 2, freedom: 2, culture: 2 }
      },
      {
        id: 'c',
        text: '找个没人的地方待着，自己消化',
        traits: { artistic: 3, social: 1, adventure: 2, career: 2, nature: 4, food: 1, freedom: 4, culture: 3 }
      },
      {
        id: 'd',
        text: '吃顿好的！美食能治愈一切',
        traits: { artistic: 1, social: 2, adventure: 1, career: 1, nature: 2, food: 5, freedom: 3, culture: 1 }
      }
    ]
  },
  {
    id: 15,
    text: '你觉得"成功"是什么？',
    options: [
      {
        id: 'a',
        text: '事业有成，获得社会认可和财富',
        traits: { artistic: 1, social: 3, adventure: 2, career: 5, nature: 1, food: 2, freedom: 1, culture: 2 }
      },
      {
        id: 'b',
        text: '做自己喜欢的事，不为五斗米折腰',
        traits: { artistic: 4, social: 1, adventure: 3, career: 1, nature: 3, food: 1, freedom: 5, culture: 4 }
      },
      {
        id: 'c',
        text: '家庭和睦，有人等你回家吃饭',
        traits: { artistic: 2, social: 3, adventure: 1, career: 2, nature: 3, food: 3, freedom: 2, culture: 3 }
      },
      {
        id: 'd',
        text: '看过世界的广阔，活出自己的精彩',
        traits: { artistic: 3, social: 2, adventure: 5, career: 1, nature: 4, food: 2, freedom: 4, culture: 3 }
      }
    ]
  },
  {
    id: 16,
    text: '退休后你想过什么样的生活？',
    options: [
      {
        id: 'a',
        text: '环游世界，把没去过的地方都走一遍',
        traits: { artistic: 2, social: 2, adventure: 5, career: 1, nature: 4, food: 3, freedom: 5, culture: 3 }
      },
      {
        id: 'b',
        text: '找个山清水秀的地方，种花养鱼',
        traits: { artistic: 3, social: 1, adventure: 1, career: 1, nature: 5, food: 2, freedom: 4, culture: 3 }
      },
      {
        id: 'c',
        text: '继续搞事业，退休只是换个赛道',
        traits: { artistic: 2, social: 3, adventure: 3, career: 5, nature: 1, food: 2, freedom: 1, culture: 2 }
      },
      {
        id: 'd',
        text: '在城里跳广场舞、逛公园，热热闹闹',
        traits: { artistic: 2, social: 5, adventure: 1, career: 1, nature: 2, food: 3, freedom: 2, culture: 2 }
      }
    ]
  },
  {
    id: 17,
    text: '你对城市夜生活的态度？',
    options: [
      {
        id: 'a',
        text: '越热闹越好，酒吧、livehouse走起',
        traits: { artistic: 2, social: 5, adventure: 4, career: 1, nature: 1, food: 3, freedom: 4, culture: 2 }
      },
      {
        id: 'b',
        text: '安静的小酒馆就好，微醺最舒服',
        traits: { artistic: 4, social: 2, adventure: 1, career: 1, nature: 2, food: 3, freedom: 3, culture: 3 }
      },
      {
        id: 'c',
        text: '夜市逛吃逛吃，边走边吃最快乐',
        traits: { artistic: 1, social: 3, adventure: 2, career: 1, nature: 1, food: 5, freedom: 3, culture: 3 }
      },
      {
        id: 'd',
        text: '十点必须到家，早睡是我的底线',
        traits: { artistic: 2, social: 1, adventure: 1, career: 3, nature: 3, food: 1, freedom: 1, culture: 2 }
      }
    ]
  },
  {
    id: 18,
    text: '最不能忍受的城市问题是？',
    options: [
      {
        id: 'a',
        text: '房价太高，打工一辈子买不起房',
        traits: { artistic: 2, social: 2, adventure: 2, career: 4, nature: 2, food: 2, freedom: 3, culture: 2 }
      },
      {
        id: 'b',
        text: '文化沙漠，没有博物馆没有书店没有展',
        traits: { artistic: 5, social: 1, adventure: 1, career: 1, nature: 2, food: 1, freedom: 2, culture: 5 }
      },
      {
        id: 'c',
        text: '空气差、环境糟，连蓝天都是奢侈品',
        traits: { artistic: 2, social: 1, adventure: 2, career: 1, nature: 5, food: 2, freedom: 4, culture: 2 }
      },
      {
        id: 'd',
        text: '太无聊了，想吃想玩都没地方去',
        traits: { artistic: 1, social: 4, adventure: 3, career: 1, nature: 1, food: 4, freedom: 3, culture: 1 }
      }
    ]
  }
];

export const questionsCN = {
  mini: allQuestions.slice(0, 5),
  simple: allQuestions.slice(0, 10),
  complex: allQuestions
};
