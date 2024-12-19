'use client';
import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

const customTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    // colorTextBase: "red",
    // colorText: "red",
    // colorBgBase: "#181818",
    // colorBgContainer: "yellow",
    colorPrimary: '#bc61f5',
    fontFamily: 'Space',
  },
};

export default customTheme;
