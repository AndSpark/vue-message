## How to use

```bash
npm i @andspark/vue-message
```

```js
import { message } from '@andspark/vue-message'
message.success('成功', 4000)
// etc.

message.loading('Loading...', 4000).then(({ destory }) => {
  setTimeout(() => {
    destory()
    message.success('成功', 4000)
  }, 2000)
}
```

## Interface

```ts
export interface ArgsProps {
	content: string
	duration?: number | null
	key?: string | number
}
type JointContent = ConfigContent | ArgsProps
type ConfigContent = string
type ConfigDuration = number | (() => number)
export interface MessageInstance {
	info(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	success(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	error(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	warning(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	warn(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	loading(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
}

export type MessageReturnType = {
	destory(): boolean
}
```
