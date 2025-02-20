import { rect } from '~/assets/js/utils/common'
import debounce from 'lodash.debounce'

export default class {
    constructor(app) {
        this.app = app

        this.o = new ResizeObserver(this.resize)
        this.o.observe(document.body)

        //screen.orientation.addEventListener('change', () => location.reload())

        this.b = { ww: 0, wh: 0, small: false, max: 0 }
    }

    mount(ctx) {
        this.ctx = ctx
        this.setup()
    }

    setup() {
        this.b.ww = window.innerWidth
        this.b.wh = window.innerHeight
        this.b.small = window.matchMedia('(max-width: 649px)').matches
        this.b.max = Math.max(0, rect(document.body).height - (this.b.wh || 0))

        console.log(this.b.max)

        this.app?.store.dispatch('app/setBounds', { ...this.b })

        this.svhp()
    }

    resize = debounce(() => {
        this.setup()

        console.log('event:RESIZE')

        this.ctx?.$nuxt?.$emit?.('resize', this.b)
    }, 75)

    svhp() {
        document.documentElement.style.setProperty(
            '--vh', `${this.b.wh / 100}px`
        )
    }

    get ww() {
        return this.b.ww
    }

    get wh() {
        return this.b.wh
    }

    get max() {
        return this.b.max
    }

    get bounds() {
        return this.b
    }

    get small() {
        return this.b.small
    }
}
