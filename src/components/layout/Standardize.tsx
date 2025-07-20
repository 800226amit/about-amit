import React from "react";
import { cn } from "@/lib/utils";





interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Standardize({ children, className }: Props) {


    return (

        <div className={cn("container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black", className)}>
            {children}
        </div>

    );
}