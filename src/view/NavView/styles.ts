import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e06262;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  
  h1 {
    padding: 0px 15px;
    color: white;
  };
`

export const NavOptionsWrapper = styled.div`
  margin: 0px 20px;
` 

export const NavOptions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li {
    color: white;
    padding: 12px;
    border: 1px solid #a51d1d;
    border-radius: 15px;
    margin: 0px 7px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    :hover {
      background-color: #a51d1d
    };
  }
`

export const ScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`