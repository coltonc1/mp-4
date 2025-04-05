"use client";

import styled from "styled-components";
import HolidayPreview from "../HolidayPreview.tsx";
import getHolidays from "../../lib/makeApiCall.tsx";
import { HolidayInfo } from "../../types.ts";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Christmas() {

  const [data, setData] = useState<HolidayInfo[]>([]);

  
  useEffect(() => {
    async function getHolidaysData() {
      const tempData = await getHolidays("1", "1");
      setData(tempData);
    }
    try {
      getHolidaysData();
    } catch (e) {
      return (
        <>
        <h1>An error occured, either the API is not responding, or there are no  holidays available at this date</h1>
        </>
      )
    }
  }, [])

  console.log(data)

  // Need this instead of data.map because I was getting too many errors with it
  let holidays = [];
  for(let i = 0; i < data.length; i++) {
    holidays.push(<HolidayPreview key={data[i].name} holiday={data[i]}/>)
  }



  return (
    <>
      <title>Home</title>
      <StyledDiv>
        <h1>Holidays on New Years</h1>
        <div>{holidays}</div>
      </StyledDiv>
    </>
  );
}

