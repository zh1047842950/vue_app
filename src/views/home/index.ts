import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component({name: 'Home', components: {}})
export default class Home extends Vue {
    //@Prop() private prop?: string;
    //@State('banners', {namespace: 'mall'}) banners: any
    //@Action('getBanners', {namespace: 'mall'}) getBanners: any
    // 初始化数据
    timestamp = new Date().getTime()

    // 计算属性 computed
    get users() {
        return []
    }

    create() {

    }

    // 声明周期钩子
    mounted() {

    }

    @Watch('watchValue')
    watchValue(val: any) {

    }

    // 方法
    getUsers() {
    }
}
