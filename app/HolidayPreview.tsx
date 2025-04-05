import styled from "styled-components";
import {HolidayInfo} from "../types.ts";

const HolidayPreviewDiv = styled.div`
  margin: 10px;
  padding: 4px;
  width: 400px;
  background-color: lightblue;
`;

export default function HolidayPreview({
  holiday,
}: {
  holiday: HolidayInfo;
}) {
  return (
      <HolidayPreviewDiv>
        <h3>{holiday.name}</h3>
        <p>Date: {holiday.date}</p>
        <p>Type: {holiday.type}</p>
      </HolidayPreviewDiv>
  );
}