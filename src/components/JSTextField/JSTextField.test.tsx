/**
 * @jest-environment jsdom
 */
 import React, { useState } from "react";
 import "@testing-library/jest-dom";
 import userEvent from "@testing-library/user-event";
 import { render, screen } from "@testing-library/react";
 
 import JSTextField from "./JSTextField";
 
 describe("Running Test for JSTextField", () => {
   
     test("Check placeholder in JSTextField", () => {
         render(<JSTextField placeholder="Hello JS-MUI" label={"Label Teste"} onChange={(value, error) => { }} />);
         expect(screen.getByPlaceholderText("Hello JS-MUI"))
            .toHaveAttribute("placeholder", "Hello JS-MUI");
     });
 
     test("Check label in JSTextField", async () => {
         render(<JSTextField id="testLabel" label={"Label Teste"} onChange={(value, error) => { }} />);
         expect(screen.getByLabelText("Label Teste")).toBeTruthy();
     });
     
     test("Check value in JSTextField", async () => {

        let value
        render(<JSTextField id={"testId"} value={value} onChange={(val, error) => { value = val }} />);
        const input = document.querySelector("#testId") as HTMLInputElement;
        await userEvent.type(input, "Hello world!");
        expect(input.value).toBe("Hello world!");
     });
 
 
 });