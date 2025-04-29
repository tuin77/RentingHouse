Component({
  properties: {
  },

  data: {
    currentIndex: 0,
    
      images: ['http://192.168.7.103:3009/image/1395/01JJCAVYWBY4HPVE3FXA9CSS77_h.webp', 'http://192.168.7.103:3009/image/1395/01JQPAB0E1Z0PSKH6YG113HDRF_h.webp'],
      maxCashback: '250',
      discount: '学生公寓',
      title: 'Oxney House & Gardens',
      originalPrice: 189,
      currentPrice: 185,
      tags: [
        { text: '最高返现£250', highlight: false },
        { text: '学生公寓', highlight: false },
        { text: '0服务费', highlight: true },
        { text: '25学年开放预订', highlight: false }
      ],
      address: '38-40 Oxney Road, 曼彻斯特 M14 5SZ, 英国',
      transport: [
        { icon: '🚶', time: '18分钟' },
        { icon: '🚲', time: '5分钟' },
        { icon: '🚌', time: '9分钟' },
        { icon: '🚗', time: '5分钟' }
      ],
      stats: '30天内22人收藏此房源',
      agent: {
        avatar: 'avatar.jpg',
        name: 'Galaxy',
        phone: '(86)186****0976'
      }
    
  },

  methods: {
    onCardTap() {
      const { id } = this.data;
      wx.navigateTo({
        url: `/pages/rental-details/index?id=${id}`
      });
    },
    onSwiperChange(e) {
      this.setData({
        currentIndex: e.detail.current
      });
    }
  }
});