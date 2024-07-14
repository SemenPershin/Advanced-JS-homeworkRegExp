import { Validator } from "../app"

test("Правильное имя", () => {
    const val = new Validator();
    expect(val.validateUsername("us_er-1name")).toBe(true);
});

test("Имя начинается с цифры тире или подчеркивания", () => {
    const val = new Validator();
    expect(val.validateUsername("_user-1name")).toBe(false);
});

test("Имя заканчивается с цифры тире или подчеркивания", () => {
    const val = new Validator();
    expect(val.validateUsername("user-1name1")).toBe(false);
});

test("Имя содержит более 3 цифр подрят", () => {
    const val = new Validator();
    expect(val.validateUsername("user-1234name")).toBe(false);
});

test("Имя содержит неразрешенный символ", () => {
    const val = new Validator();
    expect(val.validateUsername("user+1234name")).toBe(false);
});