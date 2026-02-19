/**
 * 计算用户性格向量与城市特征向量的余弦相似度
 */
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * 将 traits 对象转换为固定顺序的数组
 */
const TRAIT_KEYS = ['artistic', 'social', 'adventure', 'career', 'nature', 'food', 'freedom', 'culture'];

function traitsToVector(traits) {
  return TRAIT_KEYS.map(key => traits[key] || 0);
}

/**
 * 根据用户答案计算累加的性格维度分数
 */
function calculateUserTraits(answers, questions) {
  const userTraits = {
    artistic: 0,
    social: 0,
    adventure: 0,
    career: 0,
    nature: 0,
    food: 0,
    freedom: 0,
    culture: 0
  };

  answers.forEach((answerId, index) => {
    const question = questions[index];
    if (!question) return;

    const selectedOption = question.options.find(opt => opt.id === answerId);
    if (!selectedOption) return;

    TRAIT_KEYS.forEach(key => {
      userTraits[key] += selectedOption.traits[key] || 0;
    });
  });

  return userTraits;
}

/**
 * 核心匹配函数：接收用户答案数组，返回排序后的城市匹配结果
 *
 * @param {string[]} answers - 用户每题选择的选项 id 数组，如 ['a', 'c', 'b', ...]
 * @param {Array} questions - 题目数据
 * @param {Array} cities - 城市数据
 * @returns {Array<{ city: object, matchPercent: number }>} 按匹配度降序排列
 */
export function calculateMatch(answers, questions, cities) {
  const userTraits = calculateUserTraits(answers, questions);
  const userVector = traitsToVector(userTraits);

  // 计算每个城市的相似度
  const results = cities.map(city => {
    const cityVector = traitsToVector(city.traits);
    const similarity = cosineSimilarity(userVector, cityVector);
    return { city, similarity };
  });

  // 按相似度降序排列
  results.sort((a, b) => b.similarity - a.similarity);

  // 归一化到 75-98 的范围
  const maxSim = results[0]?.similarity || 1;
  const minSim = results[results.length - 1]?.similarity || 0;
  const range = maxSim - minSim || 1;

  return results.map((result, index) => {
    // 将相似度映射到 75-98 的范围
    const normalized = (result.similarity - minSim) / range;
    const matchPercent = Math.round(75 + normalized * 23);

    return {
      city: result.city,
      matchPercent
    };
  });
}
