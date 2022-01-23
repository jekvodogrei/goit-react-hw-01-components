import styled from "styled-components";

export const Section = styled.section`
  display: block;
  margin: 0px auto;
  width: 400px;
  padding: 10px;
  border: solid 3px black;
  color: white;
  text-align: center;
  font-family: verdana;
  margin-top: 5px;
`;

export const H2 = styled.h2`
  text-align: center;
  color: black;
  font-size: 8pt;
  margin-top: 0px;
  margin-bottom: 20px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: block;
  width: 50%;
  border: solid 0px black;
  border: 1px 0px 0px 0;
  padding: 0px;
  margin: 0px;
  font-size: 9pt;
  font-weight: 100;
`;

export const Header = styled.span`
  display: block;
  padding: 15px 0;
  color: green;
`;

export const Numbers = styled.span`
  display: block;
  padding: 5px 0;
  color: black;
  font-size: 9pt;
  font-weight: 600;
`;
