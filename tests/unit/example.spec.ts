import { shallowMount } from "@vue/test-utils";
import TodoItem from "../../src/components/TodoItem.vue";
import {Todo} from "@/Models";

describe("TodoItem.vue", () => {
  it("renders none completed", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
       todo: {
         id: "1",
         title: "todo",
         completed: false
       } as Todo
    }});
    expect(wrapper.findAll('div').at(1).text()).toEqual("todo");
    expect(wrapper.findAll('div').at(1).classes()).toHaveLength(1);
  });

  it("renders completed", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        todo: {
          id: "1",
          title: "todo",
          completed: true
        } as Todo
      }});
    expect(wrapper.findAll('div').at(1).text()).toEqual("todo");
    expect(wrapper.findAll('div').at(1).classes()).toHaveLength(2);
  });
});
