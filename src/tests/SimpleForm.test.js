import { mount } from "@vue/test-utils";
import { describe, expect } from "vitest";
import SimpleForm from "../views/SimpleForm.vue";

describe("SimpleForm", () => {
  it("Invalid name", async () => {
    const wrapper = mount(SimpleForm);
    const nameInput = wrapper.find('[placeholder="Enter your name"]');
    await nameInput.setValue("testNameWithSpaceAtEnd ");
    expect(wrapper.find('[class="form-group error"]').exists()).toBe(true);
  });
  it("Valid name", async () => {
    const wrapper = mount(SimpleForm);
    const nameInput = wrapper.find('[placeholder="Enter your name"]');
    await nameInput.setValue("testName");
    expect(wrapper.find('[class="form-group error"]').exists()).toBe(false);
  });
  it("Invalid email", async () => {
    const wrapper = mount(SimpleForm);
    const emailInput = wrapper.find('[placeholder="Enter your email"]');
    await emailInput.setValue("InvalidEmail");
    expect(wrapper.find('[class="form-group error"]').exists()).toBe(true);
  });
  it("Valid email", async () => {
    const wrapper = mount(SimpleForm);
    const emailInput = wrapper.find('[placeholder="Enter your email"]');
    await emailInput.setValue("validEmail@valid.com");
    expect(wrapper.find('[class="form-group error"]').exists()).toBe(false);
  });
  it("Invalid message", async () => {

    const wrapper = mount(SimpleForm);
    const messageInput = wrapper.find('[placeholder="Enter your feedback"]');
    await messageInput.setValue("InvalidMessage");
    expect(wrapper.find('[class="form-group error"]').exists()).toBe(true);
  });
  it("Valid message", async () => {
    const wrapper = mount(SimpleForm);
    const messageInput = wrapper.find('[placeholder="Enter your feedback"]');
    await messageInput.setValue("ValidMessageValidMessageValidMessage");
    expect(wrapper.find('[class="form-group error"]').exists()).toBe(false);
  });
  it("Submit button disabled", async () => {
    const wrapper = mount(SimpleForm);
    const submitButton = wrapper.find('[type="submit"]');
    expect(submitButton.element.disabled).toBe(true);
  });
  it("Submit button enabled", async () => {
    const wrapper = mount(SimpleForm);
    const nameInput = wrapper.find('[placeholder="Enter your name"]');
    const emailInput = wrapper.find('[placeholder="Enter your email"]');
    const messageInput = wrapper.find('[placeholder="Enter your feedback"]');
    await nameInput.setValue("testName");
    await emailInput.setValue("validEmail@valid.com");
    await messageInput.setValue("ValidMessageValidMessageValidMessage");
    const submitButton = wrapper.find('[type="submit"]');
    expect(submitButton.element.disabled).toBe(false);
  });
});