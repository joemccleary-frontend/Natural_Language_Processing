import {checkForName} from '.vscode/src/client/js/urlChecker'

describe("Testing to make sure input is url",()=>{
    test("Testing the checkForName() function", ()=>{
       expect(checkForName("hello")).toBe(false);
        })})