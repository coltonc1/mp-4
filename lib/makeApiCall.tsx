"use server";

import {HolidayInfo} from "../types.ts";
// import { useState } from "react";

const HOLIDAY_API_KEY = process.env.HOLIDAY_API_KEY


export default async function getHolidays(month: string, day: string) {
    const res = await fetch(`https://holidays.abstractapi.com/v1/?api_key=${HOLIDAY_API_KEY}&country=US&year=2025&month=${month}&day=${day}`);
    const resJson = await res.json() as HolidayInfo[];
    
    return resJson;
}