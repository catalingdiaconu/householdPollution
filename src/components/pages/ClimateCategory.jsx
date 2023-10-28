import React from "react";

export const ClimateCategory = () => {
    return (
        <div className="climateCategory basePage">
            <h1>Climate devices</h1>
            <button type="button" class="climateCategory_AddButton">
                <span class="climateCategory_AddButton_text">Add Item</span>
                <span class="climateCategory_AddButton_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>
            <button class="climateCategory_DeleteButton">
                <span class="climateCategory_DeleteButton_text">Delete</span><span class="climateCategory_DeleteButton_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
            </button>
            <ul>
                <li>
                    <span>1. Item 1</span>
                    <input type="checkbox" />
                </li>
                <li>
                    <span>2. Item 2</span>
                    <input type="checkbox" />
                </li>
                <li>
                    <span>3. Item 3</span>
                    <input type="checkbox" />
                </li>
            </ul>
        </div>
    )
}