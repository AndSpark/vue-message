import { h, render } from 'vue'

interface ArgsProps {
	content: string
	duration?: number | null
	key?: string | number
}
type JointContent = ConfigContent | ArgsProps
type ConfigContent = string
type ConfigDuration = number | (() => number)
interface MessageInstance {
	info(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	success(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	error(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	warning(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
	loading(content: JointContent, duration?: ConfigDuration): Promise<MessageReturnType>
}
type MessageReturnType = {
	destory(): boolean
}

interface MessageProps {
	type: 'success' | 'warning' | 'error' | 'info' | 'loading'
	message: string
	duration?: number
}

const MessageContainerPrefixId = `gls-message-container`

function FaSolidTimesCircle(props: any) {
	return h(
		'svg',
		Object.assign(
			{ width: '1em', height: '1em', viewBox: '0 0 512 512', style: { color: '#ff6347' } },
			props
		),
		[
			h('path', {
				d: 'M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65l-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7l65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
				fill: 'currentColor'
			})
		]
	)
}
const LoadingIcon = (props: any) => {
	return h(
		'svg',
		Object.assign(
			{ viewBox: '0 0 512 512', width: '1em', height: '1em', style: { color: '#6495ed' } },
			props
		),
		[
			h('path', {
				fill: 'currentColor',
				d: 'M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z'
			})
		]
	)
}
function FaSolidCheckCircle(props: any) {
	return h(
		'svg',
		Object.assign(
			{ width: '1em', height: '1em', viewBox: '0 0 512 512', style: { color: '#39c5bb' } },
			props
		),
		[
			h('path', {
				d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
				fill: 'currentColor'
			})
		]
	)
}
function FaSolidInfoCircle(props: any) {
	return h(
		'svg',
		Object.assign(
			{ width: '1em', height: '1em', viewBox: '0 0 512 512', style: { color: '#6495ed' } },
			props
		),
		[
			h('path', {
				d: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42s-42-18.804-42-42s18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z',
				fill: 'currentColor'
			})
		]
	)
}
function FaSolidExclamationCircle(props: any) {
	return h(
		'svg',
		Object.assign(
			{ width: '1em', height: '1em', viewBox: '0 0 512 512', style: { color: '#ffc107' } },
			props
		),
		[
			h('path', {
				d: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46s46-20.595 46-46s-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
				fill: 'currentColor'
			})
		]
	)
}

function styleInject(css: string) {
	if (!css || typeof document === 'undefined') {
		return
	}
	const head = document.head || document.getElementsByTagName('head')[0]
	const style = document.createElement('style')
	style.appendChild(document.createTextNode(css))
	head.appendChild(style)
}

const css_248z =
	'html.light .index-module_wrap__-qGn2,\nbody.light .index-module_wrap__-qGn2,\n.index-module_wrap__-qGn2 {\n  --message-background-color: #fff;\n  --message-text-color: #333;\n}\n\nhtml.dark .index-module_wrap__-qGn2,\nbody.dark .index-module_wrap__-qGn2 {\n  --message-background-color: #212121;\n  --message-text-color: #858585;\n}\n\n@media (prefers-color-scheme: dark) {\n  .index-module_wrap__-qGn2 {\n    --message-background-color: #212121;\n    --message-text-color: #858585;\n  }\n}\n\n.index-module_wrap__-qGn2 {\n  display: block;\n  margin: 12px auto;\n  text-align: center;\n  line-height: 1.5;\n  max-width: 80vw;\n}\n\n.index-module_inner-wrap__jEzuM {\n  border-radius: 2em;\n  padding: 10px 16px;\n  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),\n    0 9px 28px 8px rgb(0 0 0 / 5%);\n  position: relative;\n  background-color: var(--message-background-color);\n  display: inline-flex;\n  align-items: center;\n  -webkit-animation: index-module_fade-small-large__FXKmg 0.3s both;\n          animation: index-module_fade-small-large__FXKmg 0.3s both\n}\n\n.index-module_inner-wrap__jEzuM .index-module_icon__s5v93 {\n    display: inline-flex;\n    height: 100%;\n    align-items: center;\n  }\n\n.index-module_inner-wrap__jEzuM .index-module_message__1RXlz {\n    display: inline-block;\n    color: var(--message-text-color);\n    padding-left: 12px;\n    word-break: break-all;\n    text-align: left;\n  }\n\n.index-module_inner-wrap__jEzuM.index-module_appear__QRGiJ {\n    -webkit-animation: index-module_fade-small-large__FXKmg 0.3s both;\n            animation: index-module_fade-small-large__FXKmg 0.3s both;\n  }\n\n.index-module_inner-wrap__jEzuM.index-module_disappear__v6RRa {\n    -webkit-animation: index-module_fade-large-small__umyAb 0.3s both;\n            animation: index-module_fade-large-small__umyAb 0.3s both;\n  }\n\n.index-module_container__Cn1fk {\n  position: fixed;\n  right: 0;\n  top: 8px;\n  left: 0;\n  z-index: 999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.index-module_rotate__Yz504 {\n  -webkit-animation: index-module_rotate__Yz504 1s infinite linear;\n          animation: index-module_rotate__Yz504 1s infinite linear;\n}\n\n@-webkit-keyframes index-module_rotate__Yz504 {\n  from {\n    transform: rotate(0);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes index-module_rotate__Yz504 {\n  from {\n    transform: rotate(0);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes index-module_fade-small-large__FXKmg {\n  from {\n    opacity: 0;\n    transform: scale(0.5, 0.5);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n}\n\n@keyframes index-module_fade-small-large__FXKmg {\n  from {\n    opacity: 0;\n    transform: scale(0.5, 0.5);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n}\n\n@-webkit-keyframes index-module_fade-large-small__umyAb {\n  from {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.5, 0.5);\n  }\n}\n\n@keyframes index-module_fade-large-small__umyAb {\n  from {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.5, 0.5);\n  }\n}\n'
const styles = {
	wrap: 'index-module_wrap__-qGn2',
	'inner-wrap': 'index-module_inner-wrap__jEzuM',
	'fade-small-large': 'index-module_fade-small-large__FXKmg',
	icon: 'index-module_icon__s5v93',
	message: 'index-module_message__1RXlz',
	appear: 'index-module_appear__QRGiJ',
	disappear: 'index-module_disappear__v6RRa',
	'fade-large-small': 'index-module_fade-large-small__umyAb',
	container: 'index-module_container__Cn1fk',
	rotate: 'index-module_rotate__Yz504'
}

styleInject(css_248z)

const Icon = {
	success: h(FaSolidCheckCircle, null),
	error: h(FaSolidTimesCircle, null),
	info: h(FaSolidInfoCircle, null),
	warning: h(FaSolidExclamationCircle, null),
	loading: h(LoadingIcon, { class: styles['rotate'] })
}

const isServerSide = typeof window === 'undefined'

let containerNode: any

const getContainerNode = () => {
	if (isServerSide) {
		return
	}
	if (!containerNode) {
		const $root = document.getElementById(MessageContainerPrefixId)
		if ($root) {
			containerNode = $root
			return $root
		}
		const div = document.createElement('div')
		div.id = MessageContainerPrefixId
		div.className = styles['container']
		document.body.appendChild(div)
		return div
	}
	return containerNode
}

const Message = (props: MessageProps) => {
	const { type, message, duration } = props

	const innerWrap = h('div', { class: styles['inner-wrap'] }, [
		h(Icon[type], { class: styles['icon'] }),
		h('div', { class: styles['message'] }, [h('span', null, message)])
	])

	setTimeout(() => {
		if (!innerWrap.el || duration === Infinity) {
			return
		}
		innerWrap.el.classList.add(styles['disappear'])
	}, duration || 2500)

	return h('div', { class: styles['wrap'] }, [innerWrap])
}

//@ts-ignore
export const message: MessageInstance = {}
const types: ['success', 'error', 'warning', 'info', 'loading'] = [
	'success',
	'error',
	'warning',
	'info',
	'loading'
]

types.forEach(type => {
	message[type] = (content, duration = 2500) => {
		return new Promise(resolve => {
			if (isServerSide) {
				return {
					// mock ssr server
					destroy() {
						return true
					}
				}
			}
			requestAnimationFrame(() => {
				var _a
				let message
				const configDuration =
					typeof content === 'string'
						? duration
						: (_a = content.duration) !== null && _a !== void 0
						? _a
						: duration
				const reallyduration =
					typeof configDuration === 'function' ? configDuration() : configDuration
				if (typeof content === 'string') {
					message = content
				} else {
					message = content.content
				}
				if (!message) {
					throw new Error('message content is required')
				}
				const container = getContainerNode()
				const fragment = document.createElement('div')

				const messageVNode = Message({ type: type, duration: reallyduration, message: message })
				render(messageVNode, fragment)

				let isDestroyed = false
				const destory = () => {
					if (isDestroyed) {
						return false
					}
					container.removeChild(fragment)
					isDestroyed = true
					return true
				}
				// because Infinity is 0 in timer
				if (reallyduration !== Infinity) {
					setTimeout(() => {
						destory()
						// 加 500ms 动画时间
					}, reallyduration + 500)
				}
				container.appendChild(fragment)
				resolve({
					destory
				})
			})
		})
	}
})
