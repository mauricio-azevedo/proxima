import { describe, expect, it } from "vitest";

// Imported via the `@/*` path alias on purpose: this test doubles as proof that
// tsconfig path resolution works under Vitest.
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("lets later Tailwind utilities win over conflicting earlier ones", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });
});
