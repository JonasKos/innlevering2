import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Calculator from "src/components/Calculator.vue";

describe("Calculator.vue", () => {
  it("display blank on mount", () => {
    const wrapper = mount(Calculator);
    const display = wrapper.find('[class="display"]');
    expect(display.text()).toBe("");
  });

  it("display 1 when 1 is clicked", async () => {
    const wrapper = mount(Calculator);
    const button = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "1")[0];
    await button.trigger('click');
    const display = wrapper.find('[class="display"]');
    expect(display.text()).toBe("1");
  });

  it("display 12 when 1 and 2 are clicked", async () => {
    const wrapper = mount(Calculator);
    const button1 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "1")[0];
    const button2 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "2")[0];
    await button1.trigger('click');
    await button2.trigger('click');
    const display = wrapper.find('[class="display"]');
    expect(display.text()).toBe("12");
  });

  it("display 3 when 1, +, 2, and = buttons are pushed", async () => {
    const wrapper = mount(Calculator);
    const button1 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "1")[0];
    const button2 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "2")[0];
    const buttonPlus = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "+")[0];
    const buttonEqual = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "=")[0];
    await button1.trigger('click');
    await buttonPlus.trigger('click');
    await button2.trigger('click');
    await buttonEqual.trigger('click');
    
    const display = wrapper.find('[class="display"]');
    expect(display.text()).toBe("3");
  });

  it("display is cleared when C is clicked", async () => {
    const wrapper = mount(Calculator);
    const button1 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "1")[0];
    const button2 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "2")[0];
    const buttonClear = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "C")[0];
    await button1.trigger('click');
    await button2.trigger('click');
    await buttonClear.trigger('click');
    
    const display = wrapper.find('[class="display"]');
    expect(display.text()).toBe("");
  });

  it("ANS button displays last answer", async () => {
    const wrapper = mount(Calculator);
    const button1 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "1")[0];
    const button2 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "2")[0];
    const buttonPlus = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "+")[0];
    const buttonEqual = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "=")[0];
    const buttonClear = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "C")[0];
    const buttonAns = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "ANS")[0];
    await button1.trigger('click');
    await buttonPlus.trigger('click');
    await button2.trigger('click');
    await buttonEqual.trigger('click');
    await buttonClear.trigger('click');
    await buttonAns.trigger('click');
    
    const display = wrapper.find('[class="display"]');
    expect(display.text()).toBe("3");
  });

  it("last input is cleared from display when DEL is clicked", async () => {
    const wrapper = mount(Calculator);
    const button1 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "1")[0];
    const button2 = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "2")[0];
    const buttonDel = wrapper.findAll('[class="calcbtn"]').filter((w) => w.text() === "DEL")[0];
    await button1.trigger('click');
    await button2.trigger('click');
    await buttonDel.trigger('click');
    
    const display = wrapper.find('[class="display"]');
    expect(display.text()).toBe("1");
  });
});