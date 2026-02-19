export const citiesCN = [
  // ===== 一线城市 =====
  {
    id: 'beijing',
    name: '北京',
    intro: '北京是中国的首都，拥有三千多年建城史和八百多年建都史。故宫、天坛、长城等世界文化遗产举世闻名，胡同四合院承载着老北京的市井记忆。京剧、烤鸭、豆汁儿是这座城市的文化名片，中关村和国贸则代表着现代北京的创新与国际化。',
    personalityTags: ['进取型', '文化型', '格局型'],
    featureTags: ['千年古都', '政治中心', '文化荟萃'],
    description: '你骨子里有一种大气和胸怀，喜欢有深度的事物。北京的胡同与高楼交织、历史与现代碰撞，恰好容得下你对人生的远大抱负和对文化的深层追求。',
    traits: { artistic: 3, social: 3, adventure: 2, career: 4, nature: 1, food: 3, freedom: 2, culture: 5 },
    color: '#C41E3A',
    emoji: '🏯'
  },
  {
    id: 'shanghai',
    name: '上海',
    intro: '上海是中国最大的经济中心城市，素有"东方巴黎"之称。外滩万国建筑群见证百年沧桑，陆家嘴摩天大楼代表着现代金融力量。石库门弄堂里藏着海派文化的精髓，本帮菜、小笼包、生煎是地道的上海味道，南京路和淮海路则是购物与时尚的代名词。',
    personalityTags: ['精致型', '时尚型', '国际型'],
    featureTags: ['魔都风情', '国际大都市', '潮流前沿'],
    description: '你对生活品质有自己的追求，骨子里带着一点精致和讲究。上海的摩登与腔调，外滩的灯火与弄堂的烟火，和你对美好生活的向往不谋而合。',
    traits: { artistic: 3, social: 4, adventure: 2, career: 5, nature: 1, food: 4, freedom: 2, culture: 3 },
    color: '#1E3A8A',
    emoji: '🌃'
  },
  {
    id: 'guangzhou',
    name: '广州',
    intro: '广州是广东省省会，有着两千多年的建城史，自古便是中国南方的商贸重镇。早茶点心、煲仔饭、肠粉等粤式美食享誉全国，骑楼老街和西关大屋诉说着岭南文化的韵味。广州塔"小蛮腰"是城市的现代地标，花市文化和粤语粤剧则是这座城市鲜活的文化符号。',
    personalityTags: ['务实型', '包容型', '美食型'],
    featureTags: ['美食之都', '千年商都', '烟火气十足'],
    description: '你是一个既务实又懂得享受的人，不爱装腔作势，讲究实在。广州的早茶文化、街头巷尾的老字号和这座城市骨子里的包容，和你的性格简直天生一对。',
    traits: { artistic: 2, social: 3, adventure: 2, career: 3, nature: 2, food: 5, freedom: 3, culture: 4 },
    color: '#D97706',
    emoji: '🥢'
  },
  {
    id: 'shenzhen',
    name: '深圳',
    intro: '深圳是中国改革开放的前沿阵地，从小渔村蜕变为国际化大都市仅用了四十余年。华为、腾讯、大疆等科技巨头在此扎根，被誉为"中国硅谷"。这座城市平均年龄不到33岁，充满年轻人的拼搏活力，世界之窗和大梅沙海滨则为快节奏的生活提供了休憩之所。',
    personalityTags: ['进取型', '创新型', '实干型'],
    featureTags: ['科技之城', '创业热土', '年轻活力'],
    description: '你身上有一股不服输的劲儿，相信努力能改变命运。深圳这座年轻的城市和你一样充满干劲，这里没有天花板，只有无限可能。',
    traits: { artistic: 1, social: 3, adventure: 3, career: 5, nature: 1, food: 2, freedom: 3, culture: 1 },
    color: '#0EA5E9',
    emoji: '🚀'
  },

  // ===== 新一线城市 =====
  {
    id: 'hangzhou',
    name: '杭州',
    intro: '杭州是浙江省省会，中国七大古都之一。西湖的诗意美景、灵隐寺的千年禅韵、龙井茶的清香雅韵构成了这座城市的文化底色。同时作为互联网经济重镇，阿里巴巴总部所在地，杭州也是中国数字经济的先锋城市。',
    personalityTags: ['文艺型', '精致型', '自然型'],
    featureTags: ['诗意江南', '科技创新', '宜居城市'],
    description: '你有着诗意的灵魂，既懂得欣赏自然之美，又不甘于平淡。杭州的西湖烟雨和数字经济一样蓬勃，适合既浪漫又务实的你。',
    traits: { artistic: 4, social: 2, adventure: 2, career: 3, nature: 4, food: 3, freedom: 3, culture: 4 },
    color: '#2D8B57',
    emoji: '🍃'
  },
  {
    id: 'chengdu',
    name: '成都',
    intro: '成都是四川省省会，有着两千多年的建城史。以大熊猫、川菜火锅、茶馆文化和悠闲的生活方式闻名于世。宽窄巷子、锦里古街、武侯祠等古迹众多，太古里则展现着成都年轻、时尚的一面。',
    personalityTags: ['享乐型', '随性型', '社交型'],
    featureTags: ['美食天堂', '休闲之都', '巴蜀文化'],
    description: '你是天生的生活家，懂得享受当下的每一刻。成都的火锅与茶馆、太古里与宽窄巷子，完美匹配你会玩、会吃、会享受的生活哲学。',
    traits: { artistic: 2, social: 4, adventure: 2, career: 2, nature: 3, food: 5, freedom: 4, culture: 3 },
    color: '#E85D3A',
    emoji: '🐼'
  },
  {
    id: 'chongqing',
    name: '重庆',
    intro: '重庆是中国四大直辖市之一，因地形起伏被称为"山城"。长江与嘉陵江在此交汇，洪崖洞、李子坝轻轨穿楼等独特景观使其被誉为"8D魔幻城市"。重庆火锅麻辣鲜香闻名全国，解放碑步行街和磁器口古镇是市民和游客最爱的打卡地。',
    personalityTags: ['豪爽型', '冒险型', '热血型'],
    featureTags: ['8D魔幻城市', '火锅之都', '山城夜景'],
    description: '你性格豪爽，不走寻常路，骨子里有一股冒险精神。重庆的魔幻地形、火辣江湖和层层叠叠的赛博朋克夜景，和你的热血灵魂一拍即合。',
    traits: { artistic: 2, social: 3, adventure: 5, career: 2, nature: 2, food: 5, freedom: 3, culture: 2 },
    color: '#EA580C',
    emoji: '🔥'
  },
  {
    id: 'wuhan',
    name: '武汉',
    intro: '武汉是湖北省省会，长江与汉江将城市分为武昌、汉口、汉阳三镇。黄鹤楼为江南三大名楼之首，武汉大学樱花每年吸引无数游客。热干面、豆皮、鸭脖构成独特的"过早"文化，光谷则是中部地区重要的科技创新高地。',
    personalityTags: ['热血型', '直爽型', '烟火型'],
    featureTags: ['江城风骨', '高校云集', '过早文化'],
    description: '你性格爽朗、讲义气，骨子里有一种"不信邪"的劲头。武汉的热干面和江风一样滚烫，这座火炉城市配得上你热辣直爽的性格。',
    traits: { artistic: 2, social: 4, adventure: 3, career: 3, nature: 2, food: 4, freedom: 3, culture: 3 },
    color: '#B91C1C',
    emoji: '🌊'
  },
  {
    id: 'nanjing',
    name: '南京',
    intro: '南京是江苏省省会，中国四大古都之一，有"六朝古都""十朝都会"之称。中山陵、明孝陵、夫子庙、秦淮河等历史遗迹遍布全城，梧桐大道是城市的标志性风景。盐水鸭、鸭血粉丝汤等美食独具特色，南京也是中国重要的高等教育和科研基地。',
    personalityTags: ['沉稳型', '文化型', '温厚型'],
    featureTags: ['六朝古都', '博爱之城', '梧桐大道'],
    description: '你有一种不急不躁的沉稳气质，尊重历史也拥抱当下。南京的梧桐大道和秦淮灯火承载了太多故事，恰好适合你这种有厚度、有温度的灵魂。',
    traits: { artistic: 3, social: 2, adventure: 2, career: 3, nature: 3, food: 3, freedom: 2, culture: 5 },
    color: '#4338CA',
    emoji: '🍂'
  },
  {
    id: 'changsha',
    name: '长沙',
    intro: '长沙是湖南省省会，楚汉名城，湖湘文化的发源地。岳麓书院传承千年学脉，橘子洲头因毛泽东诗词而闻名。长沙是中国娱乐产业重镇，芒果TV总部所在地。臭豆腐、糖油粑粑、茶颜悦色等美食品牌深受年轻人追捧，夜经济极为发达。',
    personalityTags: ['热辣型', '潮流型', '活力型'],
    featureTags: ['娱乐之都', '夜生活天堂', '网红城市'],
    description: '你是人群中的开心果，天生自带社交光环。长沙的超级文和友、橘子洲头和永不打烊的夜生活，完美适配你热情洋溢、永远年轻的灵魂。',
    traits: { artistic: 2, social: 5, adventure: 3, career: 2, nature: 1, food: 5, freedom: 3, culture: 2 },
    color: '#DC2626',
    emoji: '🌶️'
  },
  {
    id: 'xian',
    name: '西安',
    intro: '西安是陕西省省会，古称长安，中国历史上建都时间最长的城市。秦始皇兵马俑被誉为"世界第八大奇迹"，大雁塔和古城墙气势恢宏。回民街汇聚了羊肉泡馍、肉夹馍、凉皮等西北美食，大唐不夜城则以沉浸式唐文化体验吸引着全国游客。',
    personalityTags: ['怀旧型', '厚重型', '豪迈型'],
    featureTags: ['十三朝古都', '丝路起点', '面食王国'],
    description: '你对历史和传统有着天然的亲近感，喜欢有根基、有故事的东西。西安的城墙和兵马俑见证千年，这座古都的厚重正好承载你深沉的灵魂。',
    traits: { artistic: 3, social: 2, adventure: 2, career: 2, nature: 2, food: 4, freedom: 2, culture: 5 },
    color: '#92400E',
    emoji: '🏛️'
  },
  {
    id: 'suzhou',
    name: '苏州',
    intro: '苏州是江苏省辖地级市，有"上有天堂，下有苏杭"的美誉。拙政园、留园等古典园林被列入世界文化遗产，周庄、同里等水乡古镇闻名遐迩。苏州也是昆曲发源地和苏绣之乡，松鼠桂鱼等苏帮菜精致讲究。如今苏州工业园区更是中国经济最强县级市的代表。',
    personalityTags: ['雅致型', '内敛型', '古典型'],
    featureTags: ['园林之城', '江南水乡', '古韵今风'],
    description: '你有着细腻的审美和不争不抢的从容。苏州的园林亭台、评弹昆曲和小桥流水，与你骨子里那份优雅从容、追求质感的气质浑然天成。',
    traits: { artistic: 5, social: 1, adventure: 1, career: 2, nature: 3, food: 3, freedom: 3, culture: 5 },
    color: '#7C3AED',
    emoji: '🏮'
  },
  {
    id: 'tianjin',
    name: '天津',
    intro: '天津是中国四大直辖市之一，近代中国看天津。五大道的小洋楼保留着租界时期的欧式建筑风貌，天津之眼摩天轮横跨海河。天津是相声艺术的发祥地，狗不理包子、煎饼果子、十八街麻花是最具代表性的美食，天津人幽默风趣的性格全国闻名。',
    personalityTags: ['幽默型', '随和型', '市井型'],
    featureTags: ['相声之都', '欧式风情', '接地气'],
    description: '你天生自带幽默感，聊天永远不冷场，骨子里是个乐天派。天津的相声茶馆、狗不理和五大道的洋楼，就像你一样——既有趣又有料。',
    traits: { artistic: 2, social: 4, adventure: 1, career: 2, nature: 1, food: 4, freedom: 3, culture: 3 },
    color: '#0369A1',
    emoji: '🎭'
  },
  {
    id: 'zhengzhou',
    name: '郑州',
    intro: '郑州是河南省省会，地处中原腹地，是中国铁路交通的最大枢纽。少林寺坐落于嵩山脚下，是中国武术文化的圣地。商代遗址证明了郑州三千多年的商都文明史，烩面、胡辣汤是当地人离不开的家乡味道，郑东新区CBD展现着中原城市的现代雄心。',
    personalityTags: ['踏实型', '枢纽型', '包容型'],
    featureTags: ['交通枢纽', '中原腹地', '商都文明'],
    description: '你低调务实，不爱张扬但有韧劲，走到哪里都能站稳脚跟。郑州作为中原大地的心脏，四通八达、兼容并蓄，和你的稳重性格不谋而合。',
    traits: { artistic: 1, social: 3, adventure: 2, career: 3, nature: 2, food: 3, freedom: 2, culture: 3 },
    color: '#78716C',
    emoji: '🚄'
  },

  // ===== 二线特色城市 =====
  {
    id: 'xiamen',
    name: '厦门',
    intro: '厦门是福建省副省级市，位于东南沿海，与台湾隔海相望。鼓浪屿是世界文化遗产，岛上万国建筑和钢琴博物馆充满文艺气息。南普陀寺、厦门大学依山面海风景绝佳，沙茶面、海蛎煎、土笋冻等闽南小吃独具风味，环岛路被誉为中国最美的海滨自行车道。',
    personalityTags: ['浪漫型', '文艺型', '小资型'],
    featureTags: ['海岛风情', '闽南文化', '文艺小城'],
    description: '你有一颗浪漫的心，热爱一切美好而温暖的事物。厦门的鼓浪屿、环岛路和无处不在的文艺气息，正是为你这样的浪漫主义者量身打造的。',
    traits: { artistic: 4, social: 2, adventure: 2, career: 2, nature: 4, food: 3, freedom: 3, culture: 4 },
    color: '#F59E0B',
    emoji: '🏖️'
  },
  {
    id: 'qingdao',
    name: '青岛',
    intro: '青岛是山东省副省级市，依山傍海，气候宜人。红瓦绿树、碧海蓝天是这座城市的经典画面。栈桥、八大关、崂山等景点风光秀丽，青岛啤酒享誉世界，海鲜美食丰富多样。德式建筑遍布老城区，赋予青岛独特的欧陆风情，也是中国帆船之都。',
    personalityTags: ['自在型', '清爽型', '浪漫型'],
    featureTags: ['碧海蓝天', '啤酒之城', '德式风情'],
    description: '你喜欢清爽而不油腻的生活方式，既要有趣又要舒服。青岛的红瓦绿树、碧海蓝天和一杯冰啤的惬意，正好对上了你追求舒适自在的频率。',
    traits: { artistic: 3, social: 2, adventure: 2, career: 2, nature: 4, food: 3, freedom: 3, culture: 3 },
    color: '#0284C7',
    emoji: '🍺'
  },
  {
    id: 'dali',
    name: '大理',
    intro: '大理位于云南省西部，是白族自治州州府所在地。苍山十九峰与洱海碧波构成绝美自然画卷，大理古城和喜洲古镇保留着白族传统民居建筑。扎染、银器等手工艺源远流长，饵丝、乳扇是当地特色美食。近年来大理也成为数字游民和文艺青年的聚集地。',
    personalityTags: ['自由型', '文艺型', '治愈型'],
    featureTags: ['风花雪月', '数字游民', '诗与远方'],
    description: '你的内心渴望自由，不愿被世俗的条条框框束缚。大理的苍山洱海、白族古镇，是为像你这样追求心灵自由、向往诗与远方的灵魂准备的。',
    traits: { artistic: 4, social: 1, adventure: 3, career: 1, nature: 5, food: 2, freedom: 5, culture: 3 },
    color: '#6B8DD6',
    emoji: '🌸'
  },
  {
    id: 'kunming',
    name: '昆明',
    intro: '昆明是云南省省会，因四季如春的气候被誉为"春城"。滇池是云南最大的淡水湖，每年冬天红嘴鸥从西伯利亚飞来越冬已成城市名片。石林世界地质公园喀斯特地貌壮观奇特，过桥米线和鲜花饼是昆明的标志性美食，多民族文化在这里和谐交融。',
    personalityTags: ['治愈型', '自然型', '佛系型'],
    featureTags: ['春城花海', '四季如春', '民族风情'],
    description: '你向往一种不被打扰的、与自然和谐共处的生活状态。昆明四季如春的气候、蓝天白云和多元的民族文化，是治愈你疲惫灵魂的最佳归所。',
    traits: { artistic: 2, social: 2, adventure: 2, career: 1, nature: 5, food: 3, freedom: 4, culture: 3 },
    color: '#16A34A',
    emoji: '🌺'
  },
  {
    id: 'sanya',
    name: '三亚',
    intro: '三亚位于海南岛最南端，是中国唯一的热带滨海旅游城市。亚龙湾、海棠湾、天涯海角等景区椰风海韵，南山寺的海上观音像高达108米。这里全年平均气温25度左右，是冬季避寒度假的热门目的地，海鲜和热带水果资源丰富，免税购物也是一大亮点。',
    personalityTags: ['度假型', '享乐型', '浪漫型'],
    featureTags: ['热带天堂', '碧海银沙', '度假胜地'],
    description: '你骨子里是个热爱阳光和自由的人，人生苦短及时行乐是你的信条。三亚的椰风海韵、热带风情和无边泳池，就是你理想中的人间天堂。',
    traits: { artistic: 2, social: 3, adventure: 3, career: 1, nature: 5, food: 3, freedom: 4, culture: 1 },
    color: '#06B6D4',
    emoji: '🌴'
  },
  {
    id: 'lasa',
    name: '拉萨',
    intro: '拉萨是西藏自治区首府，海拔3650米，有"日光城"之称。布达拉宫是藏传佛教的圣殿，大昭寺前磕长头的信徒让人感受到信仰的力量。八廓街是千年转经道，酥油茶和藏面是当地日常饮食。拉萨日照充足、天空湛蓝，纳木错和羊卓雍错等圣湖令人心灵震撼。',
    personalityTags: ['灵性型', '探索型', '纯粹型'],
    featureTags: ['雪域圣城', '信仰之地', '灵魂净土'],
    description: '你是一个追求精神世界的人，相信人生不止眼前的苟且。拉萨的布达拉宫、转经筒和离天空最近的阳光，能给你灵魂深处渴望的那份宁静与纯粹。',
    traits: { artistic: 3, social: 1, adventure: 5, career: 1, nature: 5, food: 1, freedom: 5, culture: 4 },
    color: '#7E22CE',
    emoji: '🙏'
  },
  {
    id: 'lijiang',
    name: '丽江',
    intro: '丽江位于云南省西北部，丽江古城是世界文化遗产，纳西族东巴文化独具魅力。玉龙雪山终年积雪，蓝月谷碧水如镜。束河古镇保留着茶马古道的历史痕迹，纳西烤鱼和鸡豆凉粉是地道风味。丽江的酒吧文化和民谣音乐吸引着全国各地追求浪漫的年轻人。',
    personalityTags: ['浪漫型', '自由型', '感性型'],
    featureTags: ['古城风韵', '纳西风情', '艳遇之都'],
    description: '你是一个感性的人，相信缘分和浪漫，生活中少不了一些仪式感。丽江的古城小巷、酒吧驻唱和玉龙雪山的月色，为你的故事提供了最美的背景。',
    traits: { artistic: 4, social: 3, adventure: 3, career: 1, nature: 4, food: 2, freedom: 4, culture: 3 },
    color: '#DB2777',
    emoji: '🏔️'
  },
  {
    id: 'haikou',
    name: '海口',
    intro: '海口是海南省省会，地处热带北缘，气候温暖湿润。骑楼老街是中国保存最完好的骑楼建筑群之一，展现了南洋华侨文化的独特风貌。万绿园、假日海滩是市民休闲好去处，老爸茶文化悠闲自在。清补凉、文昌鸡、海南粉是地道的海南味道，生活节奏舒缓宜人。',
    personalityTags: ['慢生活型', '自在型', '温暖型'],
    featureTags: ['椰城慢节奏', '热带花园', '宜居小城'],
    description: '你追求一种不紧不慢、自然舒适的生活节奏，不喜欢卷也不想躺平。海口的椰林骑楼、老爸茶和温暖海风，给你恰到好处的岁月静好。',
    traits: { artistic: 2, social: 2, adventure: 1, career: 1, nature: 4, food: 3, freedom: 4, culture: 2 },
    color: '#059669',
    emoji: '🥥'
  },
  {
    id: 'zhuhai',
    name: '珠海',
    intro: '珠海是广东省地级市，毗邻澳门，是中国最早的经济特区之一。情侣路沿海而建，渔女雕像是城市的标志性地标。珠海航展是中国规模最大的航空航天博览会，港珠澳大桥连接三地。城市绿化率极高，空气质量常年优良，被评为中国最宜居城市之一。',
    personalityTags: ['精致型', '宜居型', '浪漫型'],
    featureTags: ['浪漫之城', '宜居花园', '港珠澳桥'],
    description: '你追求精致但不浮夸的生活方式，喜欢干净、整洁、有品质的环境。珠海的情侣路、渔女像和一年四季的蓝天，满足你对理想生活城市的所有幻想。',
    traits: { artistic: 3, social: 2, adventure: 1, career: 2, nature: 4, food: 3, freedom: 3, culture: 2 },
    color: '#0891B2',
    emoji: '🌹'
  },
  {
    id: 'guilin',
    name: '桂林',
    intro: '桂林是广西壮族自治区的旅游名城，"桂林山水甲天下"闻名于世。漓江两岸喀斯特峰林如水墨画卷，象鼻山是城市的天然名片。阳朔西街汇聚中西文化，龙脊梯田壮美辽阔。桂林米粉是当地人每日必吃的主食，啤酒鱼则是阳朔最受欢迎的特色菜。',
    personalityTags: ['自然型', '恬淡型', '诗意型'],
    featureTags: ['山水甲天下', '喀斯特奇观', '田园牧歌'],
    description: '你有一颗热爱自然的心，相信最美的风景在山水之间。桂林的漓江竹筏、象鼻山和阳朔的田园风光，就是你心中那幅最美的山水画卷。',
    traits: { artistic: 4, social: 1, adventure: 3, career: 1, nature: 5, food: 2, freedom: 3, culture: 3 },
    color: '#15803D',
    emoji: '⛰️'
  },

  // ===== 文化城市 =====
  {
    id: 'luoyang',
    name: '洛阳',
    intro: '洛阳是河南省地级市，中国四大古都之一，十三朝古都。龙门石窟是世界文化遗产，佛像造型精美绝伦。白马寺被誉为"中国第一古刹"，洛阳牡丹甲天下，每年四月牡丹文化节万人空巷。洛阳水席是中国最古老的宴席之一，汤汤水水间尽显古都饮食智慧。',
    personalityTags: ['怀古型', '风雅型', '坚韧型'],
    featureTags: ['神都风华', '牡丹花城', '千年帝都'],
    description: '你对传统文化有深深的热爱，欣赏经得起时间考验的美。洛阳的龙门石窟、白马寺和四月牡丹花开，承载着你对华夏文明的那份骄傲与眷恋。',
    traits: { artistic: 3, social: 1, adventure: 2, career: 2, nature: 3, food: 3, freedom: 2, culture: 5 },
    color: '#BE185D',
    emoji: '🌺'
  },
  {
    id: 'dunhuang',
    name: '敦煌',
    intro: '敦煌位于甘肃省河西走廊最西端，是古丝绸之路上的咽喉要地。莫高窟拥有千年历史的壁画和彩塑，被誉为"东方艺术宝库"。鸣沙山月牙泉沙水共生堪称奇观，阳关和玉门关承载着边塞诗的苍凉意境。驴肉黄面和杏皮水是当地特色美食，大漠落日壮美无比。',
    personalityTags: ['探索型', '艺术型', '壮阔型'],
    featureTags: ['丝路明珠', '大漠孤烟', '莫高窟藏'],
    description: '你有一颗探索未知的心，对遥远和神秘的事物充满向往。敦煌的飞天壁画、鸣沙山和大漠落日，只有像你这样有勇气追寻远方的人才配得上。',
    traits: { artistic: 4, social: 1, adventure: 5, career: 1, nature: 4, food: 1, freedom: 4, culture: 5 },
    color: '#CA8A04',
    emoji: '🏜️'
  },
  {
    id: 'jingdezhen',
    name: '景德镇',
    intro: '景德镇位于江西省东北部，是举世闻名的"瓷都"，制瓷历史长达两千年。御窑厂遗址见证了官窑的辉煌，陶溪川文创街区是年轻陶艺家的聚集地。每周的鬼市陶瓷集市吸引着全国各地的淘瓷爱好者，碱水粑和冷粉是当地特色小吃，整座城市弥漫着手作与艺术的气息。',
    personalityTags: ['匠人型', '文艺型', '专注型'],
    featureTags: ['瓷都千年', '手作天堂', '艺术聚落'],
    description: '你是一个专注而有匠心的人，相信慢工出细活。景德镇的窑火千年不灭，这座因瓷器而生的小城，和你追求极致、沉浸创作的气质完美契合。',
    traits: { artistic: 5, social: 1, adventure: 2, career: 2, nature: 3, food: 2, freedom: 3, culture: 5 },
    color: '#1D4ED8',
    emoji: '🏺'
  },
  {
    id: 'quanzhou',
    name: '泉州',
    intro: '泉州是福建省地级市，古称"刺桐城"，宋元时期是世界级的海上贸易港口。2021年"泉州：宋元中国的世界海洋商贸中心"列入世界遗产名录。开元寺、清净寺、关帝庙等多元宗教建筑和谐共存，面线糊、牛肉羹、土笋冻是地道泉州味，南音和提线木偶戏传承至今。',
    personalityTags: ['包容型', '烟火型', '多元型'],
    featureTags: ['海上丝路', '世遗之城', '多元信仰'],
    description: '你是一个内心丰富、包容多元的人，对不同文化充满好奇。泉州的开元寺、关帝庙和清净寺比邻而居，这座世遗之城和你一样——看似低调，内里繁华。',
    traits: { artistic: 3, social: 2, adventure: 2, career: 2, nature: 2, food: 4, freedom: 3, culture: 5 },
    color: '#C2410C',
    emoji: '⛵'
  },
  {
    id: 'kaifeng',
    name: '开封',
    intro: '开封是河南省地级市，古称汴京，北宋时期为世界上最繁华的都市。清明上河园再现了《清明上河图》中的市井百态，铁塔和龙亭见证着千年历史。鼓楼夜市是中国最古老的夜市之一，灌汤包、桶子鸡、花生糕等小吃令人垂涎。包公祠纪念着清官包拯的廉政精神。',
    personalityTags: ['怀旧型', '市井型', '豁达型'],
    featureTags: ['大宋遗风', '夜市传奇', '包公故里'],
    description: '你有一种穿越时空的情怀，对旧时光里的热闹和烟火气充满向往。开封的鼓楼夜市、清明上河园和大宋遗风，能把你拉进那个最接地气的繁华年代。',
    traits: { artistic: 2, social: 3, adventure: 1, career: 1, nature: 2, food: 4, freedom: 3, culture: 5 },
    color: '#A16207',
    emoji: '🏯'
  },

  // ===== 其他特色城市 =====
  {
    id: 'haerbin',
    name: '哈尔滨',
    intro: '哈尔滨是黑龙江省省会，被誉为"东方莫斯科"和"冰城"。冰雪大世界是全球规模最大的冰雪主题乐园，中央大街的百年欧式建筑风情独特。圣索菲亚大教堂是城市的标志性地标，红肠、锅包肉、马迭尔冰棍是必尝的哈尔滨味道，松花江畔的冬夏两景各有千秋。',
    personalityTags: ['豪爽型', '浪漫型', '热情型'],
    featureTags: ['冰城夏都', '异域风情', '东北豪情'],
    description: '你性格大方热情，对朋友掏心掏肺，骨子里浪漫得很。哈尔滨的冰雪大世界、中央大街和东北人的热情豪爽，和你这个"自来熟"简直是天作之合。',
    traits: { artistic: 2, social: 5, adventure: 3, career: 2, nature: 3, food: 3, freedom: 3, culture: 3 },
    color: '#3B82F6',
    emoji: '❄️'
  },
  {
    id: 'guiyang',
    name: '贵阳',
    intro: '贵阳是贵州省省会，地处云贵高原，森林覆盖率极高，夏季平均气温仅22度左右，是著名的避暑之城。酸汤鱼、丝娃娃、肠旺面等酸辣风味独树一帜，甲秀楼是城市的历史地标。青岩古镇保留着明清时期的石砌建筑，黔灵山公园的野生猕猴与市民和谐共处。',
    personalityTags: ['随性型', '治愈型', '美食型'],
    featureTags: ['爽爽贵阳', '酸汤王国', '避暑天堂'],
    description: '你不追求大富大贵，觉得舒服自在才是人生真谛。贵阳的酸汤鱼、花溪公园和夏天的凉风，给你一种"刚刚好"的幸福感——不多不少，恰到好处。',
    traits: { artistic: 2, social: 2, adventure: 2, career: 1, nature: 4, food: 4, freedom: 4, culture: 2 },
    color: '#22C55E',
    emoji: '🌿'
  },
  {
    id: 'dalian',
    name: '大连',
    intro: '大连是辽宁省副省级市，三面环海，气候宜人，有"北方明珠"之称。星海广场是亚洲最大的城市广场，老虎滩海洋公园是著名的海洋主题景区。大连的海鲜种类丰富，烤鱿鱼和海鲜大排档是城市美食名片。这座城市也是中国足球的重要基地，城市建设整洁有序。',
    personalityTags: ['浪漫型', '开朗型', '洋气型'],
    featureTags: ['浪漫海滨', '北方明珠', '足球之城'],
    description: '你是一个开朗大方的人，喜欢有点洋气又不失亲切的生活氛围。大连的星海广场、老虎滩和海鲜大排档，满足你对浪漫海滨城市的所有想象。',
    traits: { artistic: 3, social: 3, adventure: 2, career: 2, nature: 4, food: 4, freedom: 3, culture: 2 },
    color: '#2563EB',
    emoji: '🐚'
  },
  {
    id: 'weihai',
    name: '威海',
    intro: '威海位于山东半岛最东端，三面环海，是中国大陆距离韩国最近的城市。刘公岛是甲午战争的历史见证地，成山头被誉为"中国好望角"。威海空气质量常年位居全国前列，海水浴场众多且水质优良。海鲜是这里的日常美食，城市干净整洁，被评为中国最宜居城市之一。',
    personalityTags: ['恬静型', '自然型', '纯净型'],
    featureTags: ['最干净海滨', '宜居之城', '天尽头'],
    description: '你喜欢简单纯粹的生活，不需要太多喧嚣和热闹。威海作为中国最干净的海滨城市，蓝天碧海、宁静祥和，恰好给你一份远离尘嚣的清净与自在。',
    traits: { artistic: 2, social: 1, adventure: 1, career: 1, nature: 5, food: 3, freedom: 4, culture: 1 },
    color: '#38BDF8',
    emoji: '🌊'
  }
];
