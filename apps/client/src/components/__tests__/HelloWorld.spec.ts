import { describe, expect, it } from "vitest";

import AppLogo from "@/components/AppLogo.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
	it("renders properly", () => {
		const wrapper = mount(AppLogo);
		expect(wrapper.attributes("alt")).toContain("Eaty logo");
	});
});
