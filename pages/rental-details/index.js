import Message from 'tdesign-miniprogram/message/index';
import request from '~/api/request';

// 获取应用实例
// const app = getApp()

Page({
  data: {

    images: ['http://localhost:3009/image/1395/01JJCAVYWBY4HPVE3FXA9CSS77_h.webp', 'http://localhost:3009/image/1395/01JQPAB0E1Z0PSKH6YG113HDRF_h.webp'],
  },
  // 生命周期
  async onReady() {
    // const [cardRes, swiperRes] = await Promise.all([
    //   request('/home/cards').then((res) => res.data),
    //   request('/home/swipers').then((res) => res.data),
    // ]);

    // this.setData({
    //   cardInfo: cardRes.data,
    //   focusCardInfo: cardRes.data.slice(0, 3),
    //   swiperList: swiperRes.data,
    // });
  },
  onLoad(option) {
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true,
    //   });
    // }
    // if (option.oper) {
    //   let content = '';
    //   if (option.oper === 'release') {
    //     content = '发布成功';
    //   } else if (option.oper === 'save') {
    //     content = '保存成功';
    //   }
    //   this.showOperMsg(content);
    // }
  },
  onRefresh() {
    // this.refresh();
  },
 
});
