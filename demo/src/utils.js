
export function mockData (start, end) {
  let cate = 1 // 类别
  const list = []
  for (let i = 0; i < end; i++) {
    const text = getContent()
    const text2 = getContent()
    if (Math.random() > 0.6) cate++

    list.push({
      id: start++,
      index: i,
      text,
      text2,
      show: false,
      checked: false,
      date: new Date().toLocaleString(),
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      shop: '王小虎夫妻店',
      shopId: '10333',
      count: genRandomVal(0, 1000),
      cate
    })
  }
  return list
}

function genRandomVal (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getContent () {
  const content = [
    '这是一条测试数据',
    '君不见黄河之水天上来，奔流到海不复回。',
    '十年生死两茫茫',
    '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。',
    '桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。',
    '明月几时有，把酒问青天。',
    '槛菊愁烟兰泣露，罗幕轻寒，',
    '寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？',
    '红豆生南国，春来发几枝。',
    '黄鹂'
  ]
  const i = Math.floor(Math.random() * 10)
  return content[i]
}

export function generateTreeData (count, pre) {
  const treeData = [];

  for (let i = 1; i <= count; i++) {
    const doload = Math.random() >= 0.8;
    const hasChildren = doload ? null : Math.random() >= 0.7

    const id = pre ? `${pre}_${i}` : i
    let children = null;
    if (hasChildren) {
      children = generateTreeData(Math.floor(Math.random() * 5) + 1, id);
    }
    const text = getContent()
    const text2 = getContent()
    const node = {
      id: id,
      text,
      text2,
      date: new Date().toLocaleString(),
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      shop: '王小虎夫妻店',
      shopId: '10333',
      hasChildren,
      children
    };

    treeData.push(node);
  }

  return treeData;
}

// 生成guid
export function guid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}
