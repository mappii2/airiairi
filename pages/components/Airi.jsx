import { useState, useEffect } from 'react'
import styled from 'styled-components';

export default function Airi() {
  const [airi, setAiri] = useState(["あいり！！"]);
  const [isShow, setIsShow] = useState(false);


  useEffect(() => {
    let newArr = airi;
    newArr.push("あいり！！");
    setAiri(newArr);
  }, [airi, isShow]);

  useEffect(() => {
    let index = 0, num = 99999;
    while (index < num) {
      setIsShow(!isShow);
      index++;
    }
  }, [isShow]);

  return (
    <>
      {airi.map((item, index) => (
        <WhiteText key={index}>{item}</WhiteText>
      ))}
    </>
  );
}

const WhiteText = styled.span`
  color: #fff;
`;