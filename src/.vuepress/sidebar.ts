import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/" :
  [
    "",
  ],
  "/STM32F103ZET6/": 
  [
    {
      text: "开发环境的搭建",
      icon: "laptop-code",
      prefix: "1.开发环境搭建/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "点亮LED",
      icon: "laptop-code",
      prefix: "2.LED/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "蜂鸣器",
      icon: "laptop-code",
      prefix: "3.蜂鸣器/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "串口通信",
      icon: "laptop-code",
      prefix: "4.串口/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "独立按键",
      icon: "laptop-code",
      prefix: "5.KEY/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "OLED显示",
      icon: "laptop-code",
      prefix: "6.OLED/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "RTC时钟",
      icon: "laptop-code",
      prefix: "7.RTC时钟/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "EEPROM存储",
      icon: "laptop-code",
      prefix: "8.EEPROM/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "触摸屏显示",
      icon: "laptop-code",
      prefix: "9.TFTLCD/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "2.4G通信",
      icon: "laptop-code",
      prefix: "10.NRF24L01/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "RC522",
      icon: "laptop-code",
      prefix: "11.RC522/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "ADC",
      icon: "laptop-code",
      prefix: "12.ADC/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "高级密码锁",
      icon: "laptop-code",
      prefix: "培训题目/题目1/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "电子时钟",
      icon: "laptop-code",
      prefix: "培训题目/题目2/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "亮度可调的LED",
      icon: "laptop-code",
      prefix: "培训题目/题目3/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "智能考勤系统",
      icon: "laptop-code",
      prefix: "培训题目/题目4/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/RK3588/": 
  [
    {
      text: "开发环境搭建",
      icon: "laptop-code",
      prefix: "1.开发环境搭建/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "RK3588 Linux SDK 软件包",
      icon: "laptop-code",
      prefix: "2.SDK/",
      collapsible: true,
      children: "structure",
    },
  ],
});
