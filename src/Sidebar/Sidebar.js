import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import profile from "./profile.png";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  background-color: #f5f5f5;
  width: 180px;
  height: 100%;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 16px;
  h3 {
    display: flex;
    margin: 0px;
  }
`;
const Profile = styled.img`
  width: 50%;
  height: auto;
  border-radius: 100%;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 200px;
  flex-direction: column;
  .active {
    color: black;
    text-decoration: underline;
  }
`;

const activeStyle = {
  color: "#5d5fef",
  textDecoration: "underline"
};
const deactiveStyle = {
  color: "gray",
  textDecoration: "none"
};

function Sidebar() {
  const menus = [
    { name: "������", path: "/profile" },
    { name: "�ۼ��� ��", path: "/mylist" },
    { name: "���ɱ�", path: "/likedlist" },
    { name: "��������", path: "/setting" },
    { name: "�α׾ƿ�", path: "/logout" }
  ];
  return (
    <Side>
      <Profile src={profile} alt="������ ����"></Profile>
      <h3>username</h3>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
              to={menu.path}
              key={index}
            >
              <p>{menu.name}</p>
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;
