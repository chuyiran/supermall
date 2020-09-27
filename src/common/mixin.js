import { debounce } from '@/common/utlis'
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const newRefresh = debounce(this.$refs.scroll.refresh, 500);
        this.itemImgListener = () => {
            newRefresh();
        };
        this.$bus.$on("itemImgLoad", this.itemImgListener);
    },
}
export const backTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 600);
        },
    }
}