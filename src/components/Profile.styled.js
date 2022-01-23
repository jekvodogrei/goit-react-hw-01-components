import styled from "styled-components";

export const Div = styled.div`
  display: block;
  margin: 0px auto;
  width: 200px;
  padding: 20px;
  border: solid 3px black;
  text-align: center;
`;

export const Img = styled.img`
  width: 80%;
`;

export const Name = styled.p`
  color: black;
  font-size: 18pt;
  font-weight: 600;
`;

export const Info = styled.p`
  color: black;
  font-size: 12pt;
  font-weight: 100;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: inline-block;
  width: 50%;
  border: solid 0px black;
  border: 1px 0px 0px 0;
  padding: px;
  margin: 0px;
  font-size: 8pt;
  font-weight: 100;
`;

export const LiHeader = styled.span`
  display: block;
  padding: 10px 0;
  color: green;
`;

export const LiNumbers = styled.span`
  display: block;
  padding: 5px 0;
  color: red;
  font-size: 10pt;
  font-weight: 600;
`;
