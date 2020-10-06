import { ADD_CART, ADD_COUNTER } from './mutations-types'
export default {
    //添加到购物车
    [ADD_CART](state, payload) {
        state.cartList.push(payload)
    },
    //将购物车物品数量添加1
    [ADD_COUNTER](state, payload) {
        payload.count++;
    }

}