import { shallowMount } from "@vue/test-utils";
import ExportData from "@/components/ExportData.vue";

describe("ExportData.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ExportData, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
