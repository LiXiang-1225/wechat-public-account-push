/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx386c18037f2fbcd6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ce4adc5e212556e569981fb49d86850b',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'X丶',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oFOzH6JIMrzotQa6rwTX0MnQkbd0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MjxMacrgSGZwyZAzuKI8YVC7-CBKBdC7Jk4mLLn9Lb0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-15',
      openUrl: 'www.baidu.com',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '11-15',
        },
        {
          type: '*生日', name: '猪蹄', year: '1996', date: '12-25',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-02-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '9CjHaNtMZqYaBSS2fqBj_tNmhjTD1Z_Nh0hEEkMIZ48',

  CALLBACK_USERS: [
    {
      name: 'X丶',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oFOzH6JIMrzotQa6rwTX0MnQkbd0',
    }
  ],

}

module.exports = USER_CONFIG

