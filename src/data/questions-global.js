const allQuestions = [
  // === Q1-Q5 核心题 (极简版) ===
  {
    id: 1,
    text: '你理想的假期方式？',
    options: [
      {
        id: 'a',
        text: '在欧洲小镇漫无目的地散步，迷路也是风景',
        traits: { artistic: 4, social: 1, adventure: 3, career: 1, nature: 3, food: 2, freedom: 5, culture: 4 }
      },
      {
        id: 'b',
        text: '打卡全球米其林，用味蕾丈量世界',
        traits: { artistic: 3, social: 3, adventure: 2, career: 2, nature: 1, food: 5, freedom: 2, culture: 3 }
      },
      {
        id: 'c',
        text: '去无人区徒步、潜水、跳伞，肾上腺素拉满',
        traits: { artistic: 1, social: 2, adventure: 5, career: 1, nature: 5, food: 1, freedom: 4, culture: 1 }
      },
      {
        id: 'd',
        text: '参加当地节日和工作坊，深度体验在地文化',
        traits: { artistic: 3, social: 4, adventure: 3, career: 2, nature: 2, food: 3, freedom: 3, culture: 5 }
      }
    ]
  },
  {
    id: 2,
    text: '到了一个陌生国家，你第一件事是？',
    options: [
      {
        id: 'a',
        text: '直奔当地最有名的地标，先拍照再说',
        traits: { artistic: 2, social: 3, adventure: 2, career: 2, nature: 2, food: 1, freedom: 2, culture: 3 }
      },
      {
        id: 'b',
        text: '钻进街头巷尾，看看本地人怎么生活',
        traits: { artistic: 3, social: 2, adventure: 4, career: 1, nature: 2, food: 3, freedom: 4, culture: 5 }
      },
      {
        id: 'c',
        text: '找一家评分最高的当地餐厅，先填饱肚子',
        traits: { artistic: 1, social: 2, adventure: 2, career: 1, nature: 1, food: 5, freedom: 3, culture: 2 }
      },
      {
        id: 'd',
        text: '去博物馆或美术馆，了解这个国家的灵魂',
        traits: { artistic: 5, social: 1, adventure: 1, career: 2, nature: 1, food: 1, freedom: 2, culture: 5 }
      }
    ]
  },
  {
    id: 3,
    text: '你的饮食冒险度有多高？',
    options: [
      {
        id: 'a',
        text: '什么都敢吃！炸蝎子、鲱鱼罐头来者不拒',
        traits: { artistic: 1, social: 3, adventure: 5, career: 1, nature: 2, food: 5, freedom: 4, culture: 3 }
      },
      {
        id: 'b',
        text: '喜欢尝试各国料理，但底线还是要守住的',
        traits: { artistic: 2, social: 3, adventure: 3, career: 2, nature: 2, food: 4, freedom: 3, culture: 3 }
      },
      {
        id: 'c',
        text: '比起冒险，更在意食物的品质和用餐环境',
        traits: { artistic: 4, social: 2, adventure: 1, career: 3, nature: 1, food: 3, freedom: 2, culture: 3 }
      },
      {
        id: 'd',
        text: '出门在外还是中餐最香，走哪儿都先找中餐馆',
        traits: { artistic: 1, social: 2, adventure: 1, career: 2, nature: 1, food: 3, freedom: 1, culture: 1 }
      }
    ]
  },
  {
    id: 4,
    text: '在国外社交，你会？',
    options: [
      {
        id: 'a',
        text: '主动搭讪！和陌生人聊天是旅行的灵魂',
        traits: { artistic: 1, social: 5, adventure: 4, career: 2, nature: 1, food: 2, freedom: 4, culture: 3 }
      },
      {
        id: 'b',
        text: '参加当地活动或兴趣小组，自然而然地交朋友',
        traits: { artistic: 3, social: 4, adventure: 3, career: 2, nature: 2, food: 2, freedom: 3, culture: 4 }
      },
      {
        id: 'c',
        text: '和同行的朋友在一起就好，不太主动社交',
        traits: { artistic: 2, social: 2, adventure: 1, career: 2, nature: 2, food: 2, freedom: 2, culture: 2 }
      },
      {
        id: 'd',
        text: '享受独行的自由，观察就是最好的交流',
        traits: { artistic: 4, social: 1, adventure: 3, career: 1, nature: 3, food: 1, freedom: 5, culture: 3 }
      }
    ]
  },
  {
    id: 5,
    text: '最吸引你的城市类型是？',
    options: [
      {
        id: 'a',
        text: '千年古都，到处是历史的痕迹和故事',
        traits: { artistic: 4, social: 2, adventure: 1, career: 2, nature: 2, food: 3, freedom: 2, culture: 5 }
      },
      {
        id: 'b',
        text: '国际大都市，充满机遇和可能性',
        traits: { artistic: 2, social: 4, adventure: 3, career: 5, nature: 1, food: 3, freedom: 2, culture: 3 }
      },
      {
        id: 'c',
        text: '海滨小城，推开窗就是蓝天碧海',
        traits: { artistic: 3, social: 2, adventure: 2, career: 1, nature: 5, food: 2, freedom: 4, culture: 2 }
      },
      {
        id: 'd',
        text: '创意之城，到处是艺术、设计和新鲜想法',
        traits: { artistic: 5, social: 3, adventure: 2, career: 3, nature: 1, food: 2, freedom: 4, culture: 4 }
      }
    ]
  },

  // === Q6-Q10 延伸题 (简单版) ===
  {
    id: 6,
    text: '你更偏好的出行方式？',
    options: [
      {
        id: 'a',
        text: '骑自行车或步行，慢慢感受城市的呼吸',
        traits: { artistic: 3, social: 1, adventure: 2, career: 1, nature: 4, food: 2, freedom: 4, culture: 3 }
      },
      {
        id: 'b',
        text: '地铁公交，跟着本地人的节奏走',
        traits: { artistic: 2, social: 3, adventure: 2, career: 3, nature: 1, food: 2, freedom: 2, culture: 3 }
      },
      {
        id: 'c',
        text: '租车自驾，自由才是第一生产力',
        traits: { artistic: 1, social: 2, adventure: 4, career: 2, nature: 3, food: 2, freedom: 5, culture: 1 }
      },
      {
        id: 'd',
        text: '打车或包车，效率和舒适最重要',
        traits: { artistic: 1, social: 2, adventure: 1, career: 4, nature: 1, food: 2, freedom: 2, culture: 1 }
      }
    ]
  },
  {
    id: 7,
    text: '你对天气和气候的态度是？',
    options: [
      {
        id: 'a',
        text: '永远的夏天！阳光、沙滩、椰子树',
        traits: { artistic: 2, social: 3, adventure: 3, career: 1, nature: 4, food: 2, freedom: 4, culture: 1 }
      },
      {
        id: 'b',
        text: '四季分明最好，每个季节都有不同的美',
        traits: { artistic: 3, social: 2, adventure: 2, career: 2, nature: 3, food: 2, freedom: 2, culture: 3 }
      },
      {
        id: 'c',
        text: '下雨天窝在咖啡馆才是最幸福的事',
        traits: { artistic: 4, social: 1, adventure: 1, career: 2, nature: 2, food: 3, freedom: 3, culture: 4 }
      },
      {
        id: 'd',
        text: '无所谓天气，只要城市够有趣就行',
        traits: { artistic: 2, social: 3, adventure: 3, career: 3, nature: 1, food: 2, freedom: 3, culture: 3 }
      }
    ]
  },
  {
    id: 8,
    text: '你会为一座城市学当地语言吗？',
    options: [
      {
        id: 'a',
        text: '当然！学语言是了解一个文化最好的方式',
        traits: { artistic: 3, social: 3, adventure: 3, career: 3, nature: 1, food: 2, freedom: 2, culture: 5 }
      },
      {
        id: 'b',
        text: '学几句日常用语就够了，比划也是一种沟通',
        traits: { artistic: 1, social: 4, adventure: 3, career: 2, nature: 1, food: 2, freedom: 3, culture: 2 }
      },
      {
        id: 'c',
        text: '英语走天下，翻译软件是我的好帮手',
        traits: { artistic: 1, social: 2, adventure: 2, career: 4, nature: 1, food: 1, freedom: 2, culture: 1 }
      },
      {
        id: 'd',
        text: '语言不通反而更有趣，鸡同鸭讲也是一种体验',
        traits: { artistic: 2, social: 3, adventure: 5, career: 1, nature: 2, food: 2, freedom: 4, culture: 3 }
      }
    ]
  },
  {
    id: 9,
    text: '在异国遇到困难，你的反应是？',
    options: [
      {
        id: 'a',
        text: '向路人求助，困难反而是交朋友的机会',
        traits: { artistic: 1, social: 5, adventure: 3, career: 2, nature: 1, food: 1, freedom: 3, culture: 3 }
      },
      {
        id: 'b',
        text: '自己想办法解决，这才是旅行的意义',
        traits: { artistic: 2, social: 1, adventure: 5, career: 3, nature: 2, food: 1, freedom: 4, culture: 2 }
      },
      {
        id: 'c',
        text: '打开手机搜攻略，科技是第一生产力',
        traits: { artistic: 1, social: 1, adventure: 2, career: 4, nature: 1, food: 1, freedom: 2, culture: 1 }
      },
      {
        id: 'd',
        text: '不慌，困难会过去的，先找个地方坐下来喝杯咖啡',
        traits: { artistic: 3, social: 2, adventure: 2, career: 1, nature: 2, food: 3, freedom: 4, culture: 2 }
      }
    ]
  },
  {
    id: 10,
    text: '你的购物风格是？',
    options: [
      {
        id: 'a',
        text: '只买当地手工艺品和独立设计师的作品',
        traits: { artistic: 5, social: 2, adventure: 2, career: 1, nature: 2, food: 1, freedom: 3, culture: 5 }
      },
      {
        id: 'b',
        text: '逛免税店和奢侈品街，旅行必须买买买',
        traits: { artistic: 2, social: 3, adventure: 1, career: 3, nature: 1, food: 1, freedom: 1, culture: 2 }
      },
      {
        id: 'c',
        text: '买当地特色食材和调料，把味道带回家',
        traits: { artistic: 2, social: 2, adventure: 2, career: 1, nature: 2, food: 5, freedom: 2, culture: 3 }
      },
      {
        id: 'd',
        text: '不怎么购物，体验和回忆比东西更珍贵',
        traits: { artistic: 3, social: 2, adventure: 3, career: 1, nature: 3, food: 1, freedom: 5, culture: 3 }
      }
    ]
  },

  // === Q11-Q18 深度题 (复杂版) ===
  {
    id: 11,
    text: '你理想的工作环境是？',
    options: [
      {
        id: 'a',
        text: '摩天大楼里的落地窗办公室，俯瞰城市天际线',
        traits: { artistic: 2, social: 3, adventure: 2, career: 5, nature: 1, food: 2, freedom: 1, culture: 3 }
      },
      {
        id: 'b',
        text: '巴厘岛的泳池边，带着笔记本电脑远程办公',
        traits: { artistic: 3, social: 1, adventure: 3, career: 2, nature: 5, food: 2, freedom: 5, culture: 2 }
      },
      {
        id: 'c',
        text: '充满创意的共享空间，周围都是有趣的灵魂',
        traits: { artistic: 4, social: 4, adventure: 2, career: 3, nature: 1, food: 2, freedom: 3, culture: 3 }
      },
      {
        id: 'd',
        text: '安静的图书馆或书房，沉浸在自己的世界里',
        traits: { artistic: 4, social: 1, adventure: 1, career: 3, nature: 2, food: 1, freedom: 3, culture: 4 }
      }
    ]
  },
  {
    id: 12,
    text: '最能代表你的艺术类型是？',
    options: [
      {
        id: 'a',
        text: '街头涂鸦和当代艺术，越叛逆越来劲',
        traits: { artistic: 5, social: 3, adventure: 4, career: 1, nature: 1, food: 1, freedom: 5, culture: 3 }
      },
      {
        id: 'b',
        text: '古典音乐和油画，永恒的才是最美的',
        traits: { artistic: 5, social: 1, adventure: 1, career: 2, nature: 2, food: 2, freedom: 2, culture: 5 }
      },
      {
        id: 'c',
        text: '电影和摄影，记录真实世界的片段',
        traits: { artistic: 4, social: 2, adventure: 3, career: 2, nature: 3, food: 1, freedom: 3, culture: 4 }
      },
      {
        id: 'd',
        text: '美食本身就是艺术，一道菜胜过千言万语',
        traits: { artistic: 3, social: 3, adventure: 2, career: 2, nature: 2, food: 5, freedom: 2, culture: 3 }
      }
    ]
  },
  {
    id: 13,
    text: '你对可持续生活的态度？',
    options: [
      {
        id: 'a',
        text: '坚定的环保主义者，减碳从我做起',
        traits: { artistic: 2, social: 2, adventure: 2, career: 2, nature: 5, food: 2, freedom: 2, culture: 3 }
      },
      {
        id: 'b',
        text: '支持环保理念，但不会让它影响生活品质',
        traits: { artistic: 2, social: 2, adventure: 2, career: 3, nature: 3, food: 3, freedom: 3, culture: 2 }
      },
      {
        id: 'c',
        text: '比起环保，更关心怎么让自己过得更好',
        traits: { artistic: 1, social: 3, adventure: 2, career: 4, nature: 1, food: 3, freedom: 2, culture: 1 }
      },
      {
        id: 'd',
        text: '向往自给自足的田园生活，从源头开始绿色',
        traits: { artistic: 3, social: 1, adventure: 3, career: 1, nature: 5, food: 3, freedom: 5, culture: 3 }
      }
    ]
  },
  {
    id: 14,
    text: '你对"自由"的理解是？',
    options: [
      {
        id: 'a',
        text: '财务自由，有足够的钱去过任何想要的生活',
        traits: { artistic: 1, social: 2, adventure: 2, career: 5, nature: 1, food: 2, freedom: 3, culture: 1 }
      },
      {
        id: 'b',
        text: '时间自由，能掌控自己的每一天',
        traits: { artistic: 3, social: 1, adventure: 3, career: 2, nature: 3, food: 2, freedom: 5, culture: 2 }
      },
      {
        id: 'c',
        text: '思想自由，不被任何偏见和教条束缚',
        traits: { artistic: 4, social: 2, adventure: 3, career: 2, nature: 2, food: 1, freedom: 5, culture: 5 }
      },
      {
        id: 'd',
        text: '关系自由，和喜欢的人在一起，远离不喜欢的',
        traits: { artistic: 2, social: 4, adventure: 2, career: 1, nature: 2, food: 2, freedom: 4, culture: 2 }
      }
    ]
  },
  {
    id: 15,
    text: '你的夜生活偏好？',
    options: [
      {
        id: 'a',
        text: '嗨到凌晨的夜店和Live House，不嗨不回家',
        traits: { artistic: 2, social: 5, adventure: 4, career: 1, nature: 1, food: 2, freedom: 4, culture: 2 }
      },
      {
        id: 'b',
        text: '小酒馆里和朋友喝杯酒聊聊天，微醺刚好',
        traits: { artistic: 3, social: 3, adventure: 2, career: 2, nature: 1, food: 3, freedom: 3, culture: 3 }
      },
      {
        id: 'c',
        text: '夜间徒步或骑车探索城市，看不一样的风景',
        traits: { artistic: 3, social: 1, adventure: 5, career: 1, nature: 3, food: 1, freedom: 5, culture: 3 }
      },
      {
        id: 'd',
        text: '夜市逛吃逛吃，或者找家深夜食堂慰劳自己',
        traits: { artistic: 1, social: 3, adventure: 2, career: 1, nature: 1, food: 5, freedom: 3, culture: 3 }
      }
    ]
  },
  {
    id: 16,
    text: '你更看重城市的哪种气质？',
    options: [
      {
        id: 'a',
        text: '效率和秩序，一切都井然有序地运转',
        traits: { artistic: 1, social: 2, adventure: 1, career: 5, nature: 1, food: 2, freedom: 1, culture: 2 }
      },
      {
        id: 'b',
        text: '混乱中的活力，喧嚣才有烟火气',
        traits: { artistic: 2, social: 4, adventure: 4, career: 1, nature: 2, food: 4, freedom: 4, culture: 3 }
      },
      {
        id: 'c',
        text: '文艺和优雅，每条街都像一幅画',
        traits: { artistic: 5, social: 2, adventure: 1, career: 2, nature: 3, food: 3, freedom: 3, culture: 5 }
      },
      {
        id: 'd',
        text: '包容和多元，能容纳各种不同的人和想法',
        traits: { artistic: 3, social: 3, adventure: 3, career: 3, nature: 2, food: 3, freedom: 5, culture: 4 }
      }
    ]
  },
  {
    id: 17,
    text: '如果可以在任何地方生活一年，你会选择？',
    options: [
      {
        id: 'a',
        text: '一座文艺复兴时期的欧洲老城，每天泡在博物馆',
        traits: { artistic: 5, social: 1, adventure: 2, career: 1, nature: 2, food: 3, freedom: 3, culture: 5 }
      },
      {
        id: 'b',
        text: '东南亚的热带小镇，每天冲浪瑜伽吃水果',
        traits: { artistic: 2, social: 2, adventure: 3, career: 1, nature: 5, food: 3, freedom: 5, culture: 2 }
      },
      {
        id: 'c',
        text: '一线国际都市，抓住所有机会和资源',
        traits: { artistic: 1, social: 4, adventure: 3, career: 5, nature: 1, food: 3, freedom: 2, culture: 3 }
      },
      {
        id: 'd',
        text: '南美或非洲的冒险之地，每天都是新的探索',
        traits: { artistic: 2, social: 3, adventure: 5, career: 1, nature: 4, food: 3, freedom: 4, culture: 4 }
      }
    ]
  },
  {
    id: 18,
    text: '你认为最重要的人生体验是？',
    options: [
      {
        id: 'a',
        text: '看遍世界的奇观，从极光到撒哈拉的星空',
        traits: { artistic: 3, social: 1, adventure: 5, career: 1, nature: 5, food: 1, freedom: 4, culture: 3 }
      },
      {
        id: 'b',
        text: '和来自不同文化的人深度交流，理解这个世界',
        traits: { artistic: 3, social: 5, adventure: 3, career: 2, nature: 1, food: 2, freedom: 3, culture: 5 }
      },
      {
        id: 'c',
        text: '在自己的领域做到极致，留下自己的印记',
        traits: { artistic: 3, social: 2, adventure: 2, career: 5, nature: 1, food: 1, freedom: 2, culture: 3 }
      },
      {
        id: 'd',
        text: '找到让自己内心真正平静的生活方式',
        traits: { artistic: 3, social: 1, adventure: 2, career: 1, nature: 4, food: 2, freedom: 5, culture: 3 }
      }
    ]
  }
];

export const questionsGlobal = {
  mini: allQuestions.slice(0, 5),
  simple: allQuestions.slice(0, 10),
  complex: allQuestions
};
