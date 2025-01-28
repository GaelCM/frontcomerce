"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Schema } from "@/types";

type FiltersControlProps = {
    filters: Schema;
    setFilterProducts: (value:string) => void;
};    

export default function FiltersControl({filters,setFilterProducts}:FiltersControlProps) {

    return (
       
        <RadioGroup className="mt-8" onValueChange={(value) => setFilterProducts(value)}>
            {filters.schema.attributes.Origen.enum.map((filter) => (
                <div className="flex items-center space-x-2" key={filter}>
                <RadioGroupItem value={filter} id={filter} />
                <Label htmlFor="r1">{filter}</Label>
                </div>    
            ))}
        </RadioGroup>
    )
}