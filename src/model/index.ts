import { computed, reactive, watch } from "vue";
import { createAreaAddressList } from "./area";
import ActionController from "./controller";
import user from "./user";
import User from "./user";
//初始化
const areaList = reactive(createAreaAddressList());
const controller = reactive(new ActionController());
const user1 = reactive(new User({
    userName: '拿捏',
    money: 8000,
    bankMoney: 400,
    img: '',
    tax: 0.1,
  }));
  const user2 = reactive(new User({
    userName: '小胖啵',
    money: 10000,
    bankMoney: 300,
    img: '',
    tax: 0.1,
  }));
controller.activeUser(user1.id); // 激活用户1
const  randomStep = () =>{
    return Math.ceil(Math.random() * 6);
}

// 用户列表
const userList = computed(() => [
    user1,
    user2,
  ]);
// 活跃用户和其他用户
const userInfo = reactive({
    currentUser: user1,
    anotherUser: user2,
});
// 页面信息和行为
const pageInfo = reactive({
    userName: user1.userName
})
//当前1是否活跃
const isUser1Active = computed(() => {
    return userInfo.currentUser.id === user1.id;
  })

//存储当前活跃用户
watch(()=> controller.userId,(userId)=>{
    userInfo.currentUser = userList.value.find(user=>user.id === userId)
    userInfo.anotherUser = userList.value.find(user => user !== userInfo.currentUser )
    pageInfo.userName = userInfo.currentUser.userName;
})

  // ArrowDown w s ArrowUp
  document.addEventListener('keydown', (e) => {
    if (!userInfo.currentUser) {
      return;
    }

    // 用户一逻辑
    if (isUser1Active.value) {
      if (e.key === 'w') {
          controller.move(userInfo.currentUser,randomStep())
    //     if (controller.activeBehavior === 'move') {
        
    //       // 移动完了，看看对应step有没有需要特殊按键的

    //       controller.setActiveBehavior('');
    //     } else if (controller.activeBehavior === 'buy') {

    //       areaAddressList[user1.currentStep].owner = user1.id;

    //       controller.activeUser(user2.id);
    //     } else if (controller.activeBehavior === 'update') {
    //       areaAddressList[user1.currentStep].houseLevel!++;
    //       controller.activeUser(user2.id);
    //     }
    //     // 无论按了什么最终都把控制器交给另一个用户
    //     //controller.activeUser(user2.id);
    //   } else if (e.key === 's') {

    //     controller.activeUser(user2.id);
    //     controller.setActiveBehavior('move');
      }
    }
    // 用户二逻辑
    else {
      if (e.key === 'ArrowUp') {
        controller.move(userInfo.currentUser,randomStep())
    //     if (controller.activeBehavior === 'move') {
    //       controller.move(userInfo.currentUser,randomStep());

    //       // 移动完了，看看对应step有没有需要特殊按键的
    //       controller.setActiveBehavior('');
    //     } else if (controller.activeBehavior === 'buy') {

    //       areaAddressList[user2.currentStep].owner = user2.id;

    //       controller.activeUser(user1.id);
    //     } else if (controller.activeBehavior === 'update') {
    //       areaAddressList[user2.currentStep].houseLevel!++;
    //       controller.activeUser(user1.id);
    //     }
    //     // 无论按了什么最终都把控制器交给另一个用户
    //     //controller.activeUser(user1.id);
    //   } else if (e.key === 'ArrowDown') {

    //     controller.activeUser(user1.id);
    //     controller.setActiveBehavior('move');
    //   }
    }
}
  })

  watch(() => userInfo.currentUser.curStep, (step) => {
    // 每次走动都到这里
    const {
      owner,
      diamond,
      houseLevel,
      customProps,
      moneyCost
    } = areaList[step];
    if (userInfo.anotherUser.stopCount > 0) {
      // 如果二号在监狱
      userInfo.anotherUser.stopCount--;
      //还是user1的回合
      controller.move(userInfo.currentUser,randomStep())
    } else if (owner) {
      // 消费酒店逻辑在这，处理普通房子
      if (owner === userInfo.anotherUser.id) {//2号不在监狱 你还到了他的房子
        // TODO: 考虑级别做的更好些
        userInfo.anotherUser.addMoney(200 * houseLevel!);
        user1.minusMoney(200 * houseLevel!);
        // 如果是单纯的移动，结束后把控制权给另一个用户
       
      } else {
        // 房子升级
        if (houseLevel! < 3 && userInfo.currentUser.updateStar >= 1 && userInfo.currentUser.money >= 200) {
          controller.updateHouse(userInfo.currentUser,areaList[step])
         
        } 
          // 不能升级的时候，控制权给另一个人
         
        
      }
      controller.activeUser(userInfo.anotherUser.id);
    } else if (typeof houseLevel === 'number' && userInfo.currentUser.money >= moneyCost && userInfo.currentUser.diamond >= diamond) {
      // 可以买地
      controller.buyArea(userInfo.currentUser,areaList[step]);
      controller.activeUser(userInfo.anotherUser.id);
    } else if (customProps) {
      // 如果走到的是特殊位置
      if (customProps.suspend) {
        // 监狱
        userInfo.currentUser.stopCount += customProps.suspend + 1;

        
      } else if (customProps.lucky) {
        // 给当前用户抽奖,
       
      } else if (customProps.storeGoods) {
        // 给用户执行购买商城
        // controller.setActiveBehavior('store');
       
      }
      controller.activeUser(userInfo.anotherUser.id);
    }
  })

 
