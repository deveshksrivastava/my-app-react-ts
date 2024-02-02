import { ReactNode } from "react";

export interface Card{
    cardImg?:string;
    cardContent:ReactNode;
    sx?:any;
}