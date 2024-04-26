import { useState } from "react";
import { InputTextFeild, SelectInput } from "../../widget/textfeild";

const countries = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
  ];

const searchProperty = 


(
    <div>
        <div className="col-6 py-3">
            <InputTextFeild type="text" placeholder="Filter by keyword" />
        </div>

        <div className="col-5">
            <SelectInput options={countries} />
        </div>

        <div className="col-3 py-3">
            <InputTextFeild type="number" placeholder="No of Rooms" idStyle="input-padding" />
        </div>
    </div>    
);

export {searchProperty}