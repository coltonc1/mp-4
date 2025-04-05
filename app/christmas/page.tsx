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
        try {
          const tempData = await getHolidays("12", "25");
          setData(tempData);
        } catch {
          return (
            <>
            <h1>An error occured, either the API is not responding, or there are no  holidays available at this date</h1>
            </>
          )
        }
      }
  
      getHolidaysData();
    }, [])


  // Need this instead of data.map because I was getting too many errors with it
    const holidays = [];
    for(let i = 0; i < data.length; i++) {
      holidays.push(<HolidayPreview key={data[i].name} holiday={data[i]}/>)
    }
  
  
  
    return (
      <>
        <title>Home</title>
        <StyledDiv>
          <h1>Holidays on Christmas</h1>
          <div>{holidays}</div>
        </StyledDiv>
      </>
    );
}

