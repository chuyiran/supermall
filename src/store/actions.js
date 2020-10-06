import { ADD_CART, ADD_COUNTER } from './mutations-types'
export default{
    addCart(context, payload) {
        //1.查找之前的state中的数组是否有s该商品
        //查找数组并返回新对象,find方法修改后,对原数组有影响
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct) {
          context.commit(ADD_COUNTER, oldProduct)
        }
        else {
          payload.count = 1
          context.commit(ADD_CART, payload)
        }
      },
}