/***********************************************

> 应用名称：养基宝SVIP
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-08-09
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：请勿分享他人！！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️

[rewrite_local]

# > 养基宝SVIP
^https?:\/\/.*yangjibao\.com\/(wxapi\/)?account url script-response-body https://raw.githubusercontent.com/lychee-h/QuantumultX-backup/main/scripts/yangjibaovip.js

[mitm]

hostname = *.yangjibao.com

***********************************************/
var body = $response.body.replace(/vip_label":false/g, 'vip_label":true')
						 .replace(/vip_expiry_date":null/g, 'vip_expiry_date":"2099-12-31"')
						 .replace(/is_pay":false/g, 'is_pay":true');
$done({ body })
