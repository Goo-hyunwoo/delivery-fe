import React, { useState } from "react";
import { Layout as LayoutComp, Flex } from "antd";
import styled from "@emotion/styled";

const { Header, Footer, Sider, Content } = LayoutComp;

const DefaultLayout = styled(LayoutComp)`
  border-radius: 8;
  overflow: hidden;
  width: calc(50% - 8px);
  maxwidth: calc(50% - 8px);

  & .ant-layout-sider {
    background-color: #1677ff;

    .ant-layout-sider-trigger {
      position: relative;
      background-color: inherit;
      width: 100%;

      > *:hover {
        cursor: pointer;
      }
    }
  }
`;

const HeaderComp = styled(Header)`
  text-align: center;
  color: #fff;
  height: 64;
  padding-inline: 48;
  line-height: 64px;
  background-color: #4096ff;
`;

const ContentComp = styled(Content)`
  text-align: center;
  min-height: 120;
  line-height: 120px;
  color: #fff;
  background-color: #0958d9;
`;

const SiderComp = styled(Sider)`
  text-align: center;
  line-height: 120px;
  color: #fff;
`;

const FooterComp = styled(Footer)`
  text-align: center;
  color: #fff;
  background-color: #4096ff;
`;

export default function Layout() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  console.log("Layout");
  return (
    <Flex gap="middle" wrap="wrap">
      <DefaultLayout>
        <HeaderComp>Header</HeaderComp>
        <ContentComp>Content</ContentComp>
        <FooterComp>Footer</FooterComp>
      </DefaultLayout>

      <DefaultLayout>
        <HeaderComp>Header</HeaderComp>
        <LayoutComp>
          <SiderComp width="25%">Sider</SiderComp>
          <ContentComp>Content</ContentComp>
        </LayoutComp>
        <FooterComp>Footer</FooterComp>
      </DefaultLayout>

      <DefaultLayout>
        <HeaderComp>Header</HeaderComp>
        <LayoutComp>
          <ContentComp>Content</ContentComp>
          <SiderComp width="25%">Sider</SiderComp>
        </LayoutComp>
        <FooterComp>Footer</FooterComp>
      </DefaultLayout>

      <DefaultLayout hasSider>
        <SiderComp collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          Sider
        </SiderComp>
        <LayoutComp>
          <HeaderComp>Header</HeaderComp>
          <ContentComp>Content</ContentComp>
          <FooterComp>Footer</FooterComp>
        </LayoutComp>
      </DefaultLayout>
    </Flex>
  );
}
