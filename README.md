**토큰 구하는 방법 ( Ctrl + Shift + I )**
```javascript
(webpackChunkdiscord_app.push([
    [''], {},
    e => {
        m = [];
        for (let c in e.c) m.push(e.c[c])
    }
]), m).find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken()
```

# Installation
**셀프봇을 실행하기 위해 모듈을 다운받아주세요.**
```
npm install -g typescript
npm install -g ts-node
npm install discord.js-selfbot-v13
```

# Use
**./libs/info.json 파일 안에 사용자의 토큰을 입력해주세요.**
```json
{
    "token": "TOKEN"
}
```

# Start
```
ts-node self.ts
```
